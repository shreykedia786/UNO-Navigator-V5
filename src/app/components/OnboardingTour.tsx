import { useState, useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';

interface OnboardingStep {
  id: string;
  title: string;
  description: string;
  targetSelector: string; // CSS selector to find the element
  position: 'top' | 'bottom' | 'left' | 'right';
  highlightPadding?: number;
}

const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    id: 'welcome',
    title: 'Unlock Smarter Pricing Insights',
    description: 'We\'ve introduced powerful new tools to help you stay competitive and maintain rate consistency across channels.',
    targetSelector: '', // Centered modal
    position: 'bottom',
    highlightPadding: 0
  },
  {
    id: 'find-it',
    title: 'How to Access This Feature',
    description: 'This feature is available within each room in your rate view.',
    targetSelector: '[data-tour="rate-plan-chevron"]',
    position: 'right',
    highlightPadding: 10
  },
  {
    id: 'competitor-graph',
    title: 'Competitor Rate Analysis at a Glance',
    description: 'This chart compares your pricing with competitor rates for each date.',
    targetSelector: '[data-tour="rate-chart"]',
    position: 'right',
    highlightPadding: 8
  },
  {
    id: 'parity-colors',
    title: 'Parity Status Indicators',
    description: 'Background colors show how your rates compare with OTA channels.',
    targetSelector: '[data-tour="rate-chart"]',
    position: 'right',
    highlightPadding: 8
  },
  {
    id: 'drawer-preview',
    title: 'View Detailed Analysis',
    description: 'Click "View Details" to explore:',
    targetSelector: '[data-tour="view-details-button"]',
    position: 'right',
    highlightPadding: 8
  }
];

interface OnboardingTourProps {
  onComplete: () => void;
  onStepChange?: (stepIndex: number) => void;
}

export function OnboardingTour({ onComplete, onStepChange }: OnboardingTourProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const [arrowPosition, setArrowPosition] = useState({ top: 0 });
  const [highlightRect, setHighlightRect] = useState({ top: 0, left: 0, width: 0, height: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const step = ONBOARDING_STEPS[currentStep];
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === ONBOARDING_STEPS.length - 1;
  const isCenterModal = !step.targetSelector; // Check if this should be a centered modal

  const getTooltipHeight = () => {
    if (currentStep === 0) return 280; // Welcome
    if (currentStep === 1) return 280; // How to access - click chevron
    if (currentStep === 2) return 280; // Competitor graph
    if (currentStep === 3) return 260; // Parity colors
    return 260; // Drawer preview - View Details
  };

  // Find target element and calculate position
  useEffect(() => {
    // Notify parent about step change
    onStepChange?.(currentStep);

    // If it's a center modal (no target selector), show immediately
    if (isCenterModal) {
      setTargetElement(null);
      setIsVisible(true);
      return;
    }

    const findTarget = () => {
      const element = document.querySelector(step.targetSelector) as HTMLElement;
      if (element) {
        setTargetElement(element);
        calculatePosition(element);
        setIsVisible(true);
      } else {
        // Retry after a short delay if element not found
        setTimeout(findTarget, 100);
      }
    };

    findTarget();

    // Recalculate on scroll or resize
    const handleUpdate = () => {
      if (targetElement) {
        calculatePosition(targetElement);
      }
    };

    window.addEventListener('scroll', handleUpdate, true);
    window.addEventListener('resize', handleUpdate);

    return () => {
      window.removeEventListener('scroll', handleUpdate, true);
      window.removeEventListener('resize', handleUpdate);
    };
  }, [currentStep, step.targetSelector, targetElement, isCenterModal]);

  const calculatePosition = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    const tooltipWidth = 360;
    const tooltipHeight = getTooltipHeight();
    const padding = 20;

    // Update highlight rect here
    const currentHighlightRect = element.getBoundingClientRect();
    setHighlightRect(currentHighlightRect);

    let top = 0;
    let left = 0;

    switch (step.position) {
      case 'bottom':
        top = currentHighlightRect.bottom + padding;
        left = currentHighlightRect.left + currentHighlightRect.width / 2 - tooltipWidth / 2;
        break;
      case 'top':
        top = currentHighlightRect.top - tooltipHeight - padding;
        left = currentHighlightRect.left + currentHighlightRect.width / 2 - tooltipWidth / 2;
        break;
      case 'right':
        // Check if tooltip would overflow on the right
        const rightPosition = currentHighlightRect.right + padding;
        if (rightPosition + tooltipWidth > window.innerWidth - 20) {
          // Position on the left instead
          left = currentHighlightRect.left - tooltipWidth - padding;
        } else {
          left = rightPosition;
        }

        // Calculate ideal position - center the arrow on the highlighted element
        // Arrow will be at position 95px from tooltip top (to stay on white background)
        // So we need: top + 95 = highlightCenter
        const highlightCenter = currentHighlightRect.top + currentHighlightRect.height / 2;
        let idealTop = highlightCenter - 95;

        // For step 2 (how to access), position popup to ensure Next button is visible
        if (currentStep === 1) {
          idealTop = Math.min(idealTop, 280); // Position appropriately
        }

        // For steps 3 and 4 (competitor-graph and parity-colors), move popup up to ensure Next button is visible
        if (currentStep === 2 || currentStep === 3) {
          idealTop = Math.min(idealTop, 330); // Position higher to show CTA
        }

        // For step 5 (drawer-preview), move popup up by 100px
        if (currentStep === 4) {
          idealTop = idealTop - 100;
        }

        // Apply the ideal position with bounds checking
        top = idealTop;

        // Ensure it doesn't go off screen
        if (top + tooltipHeight > window.innerHeight - 20) {
          top = window.innerHeight - tooltipHeight - 20;
        }
        if (top < 40) {
          top = 40;
        }
        break;
      case 'left':
        left = currentHighlightRect.left - tooltipWidth - padding;

        // Calculate ideal position - center the arrow on the highlighted element
        const highlightCenterLeft = currentHighlightRect.top + currentHighlightRect.height / 2;
        const idealTopLeft = highlightCenterLeft - 95;

        // Apply the ideal position with bounds checking
        top = idealTopLeft;

        if (top + tooltipHeight > window.innerHeight - 20) {
          top = window.innerHeight - tooltipHeight - 20;
        }
        if (top < 40) {
          top = 40;
        }
        break;
    }

    // Keep tooltip within viewport horizontally
    left = Math.max(20, Math.min(left, window.innerWidth - tooltipWidth - 20));

    setTooltipPosition({ top, left });

    // Calculate arrow position for right/left positioned tooltips
    if (step.position === 'right' || step.position === 'left') {
      // Calculate where the arrow should point to align with the highlighted element
      const highlightCenter = currentHighlightRect.top + currentHighlightRect.height / 2;
      let arrowTop = highlightCenter - top;

      // For step 4, move arrow down
      if (currentStep === 4) {
        arrowTop += 75;
      }

      // Constrain arrow position to stay within the white body area
      const minArrowTop = 95; // Below blue header
      const maxArrowTop = tooltipHeight - 30; // Above bottom margin
      const constrainedArrowTop = Math.max(minArrowTop, Math.min(arrowTop, maxArrowTop));

      setArrowPosition({ top: constrainedArrowTop });
    }
  };

  const handleNext = () => {
    if (isLastStep) {
      handleComplete();
    } else {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 200);
    }
  };

  const handlePrevious = () => {
    if (!isFirstStep) {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentStep(currentStep - 1);
      }, 200);
    }
  };

  const handleSkip = () => {
    handleComplete();
  };

  const handleComplete = () => {
    setIsVisible(false);
    setTimeout(() => {
      onComplete();
      localStorage.setItem('onboardingTourCompleted', 'true');
    }, 200);
  };

  if (!targetElement && !isCenterModal) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/60 z-[9998] transition-opacity duration-300" style={{ opacity: isVisible ? 1 : 0 }} />

      {/* Spotlight highlight - only show if there's a target element */}
      {targetElement && !isCenterModal && (
        <div
          className="fixed z-[9999] pointer-events-none transition-all duration-300 rounded-lg"
          style={{
            top: highlightRect.top - (step.highlightPadding || 8),
            left: highlightRect.left - (step.highlightPadding || 8),
            width: highlightRect.width + (step.highlightPadding || 8) * 2,
            height: highlightRect.height + (step.highlightPadding || 8) * 2,
            boxShadow: '0 0 0 4px rgba(39, 83, 235, 0.4), 0 0 0 9999px rgba(0, 0, 0, 0.6)',
            opacity: isVisible ? 1 : 0
          }}
        />
      )}

      {/* Tooltip */}
      <div
        className="fixed z-[10000] bg-white rounded-xl shadow-2xl transition-all duration-300"
        style={
          isCenterModal
            ? {
                top: '50%',
                left: '50%',
                transform: isVisible ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.95)',
                width: '420px',
                opacity: isVisible ? 1 : 0
              }
            : {
                top: tooltipPosition.top,
                left: tooltipPosition.left,
                width: '360px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.95)'
              }
        }
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-[#2753eb] to-[#4f46e5] text-white px-6 py-4 rounded-t-xl">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-[15px] font-bold leading-tight mb-1">{step.title}</h3>
                <p className="text-[11px] text-white/80">
                  Step {currentStep + 1} of {ONBOARDING_STEPS.length}
                </p>
              </div>
            </div>
            <button
              onClick={handleComplete}
              className="text-white/80 hover:text-white transition-colors flex-shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-5">
          <p className="text-[13px] text-gray-700 leading-relaxed">
            {step.description}
          </p>

          {/* Visual Illustration for Welcome */}
          {currentStep === 0 && (
            <div className="mt-4 space-y-3">
              <div className="p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                <div className="flex items-start gap-2">
                  
                  <div>
                    <div className="text-[11px] font-bold text-blue-900 mb-1">Competitor Rate Analysis</div>
                    <p className="text-[10px] text-gray-700 leading-relaxed">
                      Compare your pricing with competitors and spot revenue opportunities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                <div className="flex items-start gap-2">
                  
                  <div>
                    <div className="text-[11px] font-bold text-green-900 mb-1">Channel Parity Analysis</div>
                    <p className="text-[10px] text-gray-700 leading-relaxed">
                      Monitor OTA rates and maintain consistency across all channels.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Visual Illustration for Parity Colors */}
          {currentStep === 3 && (
            <div className="mt-3 p-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200">
              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-6 bg-[#dcfce7] rounded border border-green-200 flex-shrink-0"></div>
                  <div>
                    <span className="text-[11px] font-bold text-gray-800">Green — Meet:</span>
                    <span className="text-[10px] text-gray-600 ml-1">Rates are matching</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-6 bg-[#fff7ed] rounded border border-orange-200 flex-shrink-0"></div>
                  <div>
                    <span className="text-[11px] font-bold text-gray-800">Orange — Win:</span>
                    <span className="text-[10px] text-gray-600 ml-1">OTA pricing is higher</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-6 bg-[#fee2e2] rounded border border-red-200 flex-shrink-0"></div>
                  <div>
                    <span className="text-[11px] font-bold text-gray-800">Red — Loss:</span>
                    <span className="text-[10px] text-gray-600 ml-1">OTA pricing is lower</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-gray-300">
                <p className="text-[10px] text-gray-600 leading-relaxed">
                  These color indicators help you quickly identify pricing discrepancies and take action to maintain rate parity.
                </p>
              </div>
            </div>
          )}

          {/* Visual Illustration for Find It */}
          {currentStep === 1 && (
            <div className="mt-3 space-y-3">
              <div className="p-3 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg border border-yellow-300">
                <div className="flex items-start gap-2">
                  <div className="text-[18px] mt-0.5">👈</div>
                  <div>
                    <div className="text-[11px] font-bold text-yellow-900 mb-1">Click This Chevron Icon</div>
                    <p className="text-[10px] text-yellow-800 leading-relaxed">
                      This chevron appears <strong>before each rate plan name</strong>. Click it to expand the detailed analysis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                <div className="text-[11px] font-bold text-blue-900 mb-2">What you'll see:</div>
                <p className="text-[10px] text-gray-700 leading-relaxed">
                  Clicking this chevron reveals the <strong>Competitor & Parity Analysis</strong> section for this rate plan.
                </p>
              </div>
            </div>
          )}

          {/* Visual Illustration for Competitor Graph */}
          {currentStep === 2 && (
            <div className="mt-3 p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-0.5 bg-green-500 flex-shrink-0"></div>
                  <div className="flex-1">
                    <span className="text-[11px] font-bold text-gray-800">Max Competitor Rate</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center flex-shrink-0">
                    <div className="w-2 h-0.5 bg-[#2196F3]"></div>
                    <div className="w-1.5 h-1.5 bg-[#2196F3] rounded-full"></div>
                    <div className="w-2 h-0.5 bg-[#2196F3]"></div>
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] font-bold text-gray-800">My Rate</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-0.5 bg-red-500 flex-shrink-0"></div>
                  <div className="flex-1">
                    <span className="text-[11px] font-bold text-gray-800">Min Competitor Rate</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 pt-2 border-t border-blue-300">
                <p className="text-[10px] text-blue-800 leading-relaxed">
                  The space between the green and red lines shows the competitor pricing range. Compare your blue line to see if you're pricing competitively.
                </p>
              </div>
            </div>
          )}

          {/* Visual Illustration for Drawer Preview */}
          {currentStep === 4 && (
            <div className="mt-3 p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[11px] text-blue-600 mt-0.5">•</span>
                  <p className="text-[11px] text-gray-700 leading-relaxed">
                    <strong>Rate comparison</strong> with each competitor
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[11px] text-blue-600 mt-0.5">•</span>
                  <p className="text-[11px] text-gray-700 leading-relaxed">
                    <strong>Parity</strong> across connected channels (OTAs)
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[11px] text-blue-600 mt-0.5">•</span>
                  <p className="text-[11px] text-gray-700 leading-relaxed">
                    <strong>Win / Meet / Loss</strong> performance by date
                  </p>
                </li>
              </ul>
            </div>
          )}

          {/* Progress indicators */}
          <div className="flex items-center gap-1.5 mt-5 mb-4">
            {ONBOARDING_STEPS.map((_, index) => (
              <div
                key={index}
                className="h-1.5 flex-1 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: index === currentStep ? '#2753eb' : index < currentStep ? '#2753eb80' : '#e5e7eb'
                }}
              />
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={handleSkip}
              className="text-[13px] text-gray-500 hover:text-gray-700 font-medium transition-colors"
            >
              Skip Tour
            </button>

            <div className="flex items-center gap-2">
              {!isFirstStep && (
                <button
                  onClick={handlePrevious}
                  className="flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Previous
                </button>
              )}
              
              <button
                onClick={handleNext}
                className="flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium text-white bg-[#2753eb] hover:bg-[#1e3db8] rounded-lg transition-colors"
              >
                {isLastStep ? 'Finish' : 'Next'}
                {!isLastStep && <ArrowRight className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Arrow pointer */}
        {!isCenterModal && step.position === 'bottom' && (
          <div
            className="absolute -top-2 w-4 h-4 bg-white"
            style={{
              left: '50%',
              transform: 'translateX(-50%) rotate(45deg)'
            }}
          />
        )}
        {!isCenterModal && step.position === 'top' && (
          <div
            className="absolute -bottom-2 w-4 h-4 bg-white"
            style={{
              left: '50%',
              transform: 'translateX(-50%) rotate(45deg)'
            }}
          />
        )}
        {!isCenterModal && step.position === 'right' && (
          <div
            className="absolute -left-2 w-4 h-4 bg-white"
            style={{
              top: arrowPosition.top - 40 + (currentStep === 1 ? 20 : 0) + (currentStep === 2 ? 50 : 0) + (currentStep === 3 ? 100 : 0),
              transform: 'rotate(45deg)'
            }}
          />
        )}
        {!isCenterModal && step.position === 'left' && (
          <div
            className="absolute -right-2 w-4 h-4 bg-white"
            style={{
              top: arrowPosition.top,
              transform: 'rotate(45deg)'
            }}
          />
        )}
      </div>
    </>
  );
}