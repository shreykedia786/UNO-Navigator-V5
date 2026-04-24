/** Full subscriber (gate: already subscribed). */
export const STORAGE_SUBSCRIBED = 'unoNavigatorSubscribed';
/** ISO timestamp when 30-day Navigator trial started. */
export const STORAGE_TRIAL_START = 'unoNavigatorTrialStartedAt';
/** User submitted the in-app 30-day trial request form; access is pending team setup (not instant). */
export const STORAGE_TRIAL_REQUEST_SUBMITTED = 'unoNavigatorTrialRequestSubmitted';
/** User completed first-run gate (UNO + Navigator) — go to Rates & Inventory even without Navigator. */
export const STORAGE_GATE_COMPLETED = 'unoNavigatorGateCompleted';

export type NavigatorEntitlement = 'full' | 'trial' | 'trial_expired' | 'limited';

const TRIAL_MS = 30 * 24 * 60 * 60 * 1000;

/**
 * Demo / QA: if there is no real ended trial in storage yet, set `STORAGE_TRIAL_START` to 31 days ago so
 * post-trial upgrade UX can be exercised without waiting. Skips when already subscribed.
 */
export function ensureExpiredTrialSampleInStorage(): void {
  try {
    if (localStorage.getItem(STORAGE_SUBSCRIBED) === 'true') return;
    if (hasNavigatorTrialExpired()) return;
    localStorage.setItem(
      STORAGE_TRIAL_START,
      new Date(Date.now() - 35 * 24 * 60 * 60 * 1000).toISOString()
    );
  } catch {
    /* ignore */
  }
}

/** True when a trial start date exists and the 30-day window has fully elapsed (Navigator intelligence off). */
export function hasNavigatorTrialExpired(): boolean {
  try {
    const started = localStorage.getItem(STORAGE_TRIAL_START);
    if (!started) return false;
    const t = new Date(started).getTime();
    if (!Number.isFinite(t)) return false;
    return Date.now() - t >= TRIAL_MS;
  } catch {
    return false;
  }
}

export function readNavigatorEntitlement(): NavigatorEntitlement {
  try {
    if (localStorage.getItem(STORAGE_SUBSCRIBED) === 'true') {
      return 'full';
    }
    const started = localStorage.getItem(STORAGE_TRIAL_START);
    if (started) {
      const t = new Date(started).getTime();
      if (Number.isFinite(t)) {
        if (Date.now() - t < TRIAL_MS) {
          return 'trial';
        }
        return 'trial_expired';
      }
    }
    return 'limited';
  } catch {
    return 'limited';
  }
}

export function setNavigatorFullSubscriber(): void {
  try {
    localStorage.setItem(STORAGE_SUBSCRIBED, 'true');
    localStorage.setItem(STORAGE_GATE_COMPLETED, 'true');
    localStorage.removeItem(STORAGE_TRIAL_REQUEST_SUBMITTED);
  } catch {
    /* ignore */
  }
}

/** After first gate: user continues in UNO without Navigator subscription (limited intelligence). */
export function markNavigatorGateCompleted(): void {
  try {
    localStorage.setItem(STORAGE_GATE_COMPLETED, 'true');
  } catch {
    /* ignore */
  }
}

/**
 * Gate choice "Not subscribed to Navigator": clear full/trial flags so entitlement is `limited`.
 * Without this, a leftover `unoNavigatorSubscribed` from a prior session keeps the subscribed UI.
 */
export function applyNavigatorLimitedGateChoice(): void {
  try {
    localStorage.removeItem(STORAGE_SUBSCRIBED);
    localStorage.removeItem(STORAGE_TRIAL_START);
    localStorage.setItem(STORAGE_GATE_COMPLETED, 'true');
  } catch {
    /* ignore */
  }
}

export function hasCompletedNavigatorGate(): boolean {
  try {
    return localStorage.getItem(STORAGE_GATE_COMPLETED) === 'true';
  } catch {
    return false;
  }
}

export function markNavigatorTrialRequestSubmitted(): void {
  try {
    localStorage.setItem(STORAGE_TRIAL_REQUEST_SUBMITTED, 'true');
    localStorage.setItem(STORAGE_GATE_COMPLETED, 'true');
  } catch {
    /* ignore */
  }
}

export function hasNavigatorTrialRequestSubmitted(): boolean {
  try {
    return localStorage.getItem(STORAGE_TRIAL_REQUEST_SUBMITTED) === 'true';
  } catch {
    return false;
  }
}

export function startNavigatorTrial(): void {
  try {
    localStorage.setItem(STORAGE_TRIAL_START, new Date().toISOString());
    localStorage.setItem(STORAGE_GATE_COMPLETED, 'true');
    localStorage.removeItem(STORAGE_TRIAL_REQUEST_SUBMITTED);
  } catch {
    /* ignore */
  }
}

export function navigatorIntelligenceUnlocked(entitlement: NavigatorEntitlement): boolean {
  return entitlement === 'full' || entitlement === 'trial';
}

/** Same locked charts / upsell as `limited`, but copy should reference an ended trial. */
export function isNavigatorLimitedUpsell(entitlement: NavigatorEntitlement): boolean {
  return entitlement === 'limited' || entitlement === 'trial_expired';
}

export function trialDaysRemaining(): number | null {
  try {
    const started = localStorage.getItem(STORAGE_TRIAL_START);
    if (!started) return null;
    const t = new Date(started).getTime();
    if (!Number.isFinite(t)) return null;
    const end = t + TRIAL_MS;
    if (Date.now() >= end) return null;
    const left = Math.ceil((end - Date.now()) / (24 * 60 * 60 * 1000));
    return Math.max(0, left);
  } catch {
    return null;
  }
}

/** Limited (not subscribed) flow: user hid the locked Navigator chart preview row(s). */
const STORAGE_LOCKED_PREVIEW_DISMISSED = 'uno.navigatorLockedPreview.dismissed';

export function isNavigatorLockedPreviewDismissed(): boolean {
  try {
    return localStorage.getItem(STORAGE_LOCKED_PREVIEW_DISMISSED) === '1';
  } catch {
    return false;
  }
}

export function dismissNavigatorLockedPreview(): void {
  try {
    localStorage.setItem(STORAGE_LOCKED_PREVIEW_DISMISSED, '1');
  } catch {
    /* ignore */
  }
}

export function clearNavigatorLockedPreviewDismiss(): void {
  try {
    localStorage.removeItem(STORAGE_LOCKED_PREVIEW_DISMISSED);
  } catch {
    /* ignore */
  }
}
