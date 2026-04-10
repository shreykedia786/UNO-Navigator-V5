import svgPaths from "./svg-n3t9v38tfc";
import imgLogo from "figma:asset/036db285069a2b8b94cc4ad3c602ba0af3a2f1fe.png";

function Link() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center py-[12px] relative">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2753eb] text-[14px] tracking-[-0.1504px]">ARI Resync</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center py-[13px] relative">
        <a className="block cursor-pointer font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#2753eb] text-[14px] tracking-[-0.1504px] whitespace-nowrap" href="https://www.figma.com/make/ch3btwsEOxmocH0WoHaiR6/Feedback-Discussion?t=XiQCk4yiKvLIIL52-1" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[20px]">Manage Pricing Rules</p>
        </a>
      </div>
    </div>
  );
}

function IconChevronDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon/chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon/chevron-down">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #2753EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-px items-center py-[12px] relative">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#2753eb] text-[14px] tracking-[-0.1504px]">Manage Restriction</p>
        <IconChevronDown />
      </div>
    </div>
  );
}

function Links() {
  return (
    <div className="absolute bg-[#f8f7f7] content-stretch flex gap-[32px] items-center justify-end left-0 pt-px px-[50px] top-[66px] w-[1440px]" data-name="Links">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Menu24Dp000000Fill0Wght200Grad0Opsz() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="menu_24dp_000000_FILL0_wght200_GRAD0_opsz24 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="menu_24dp_000000_FILL0_wght200_GRAD0_opsz24 1">
          <path d={svgPaths.p2e55b680} fill="var(--fill-0, #505050)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center p-[10px] relative shrink-0 w-[44px]" data-name="Logo">
      <Menu24Dp000000Fill0Wght200Grad0Opsz />
    </div>
  );
}

function Logo1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center p-[10px] relative shrink-0" data-name="Logo">
      <div className="h-[23px] relative shadow-[0px_0px_1.6px_0px_white] shrink-0 w-[71px]" data-name="logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
    </div>
  );
}

function Logo2() {
  return <div className="content-stretch flex flex-col gap-[10px] h-[48px] items-start justify-center p-[10px] shrink-0" data-name="Logo" />;
}

function Left() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="left">
      <Logo />
      <Logo1 />
      <Logo2 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#333] text-[20px] text-center tracking-[-0.44px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.5]">Rates and Inventory</p>
      </div>
    </div>
  );
}

function WhatsNew() {
  return (
    <div className="h-[20px] relative shrink-0 w-[75px]" data-name="WhatsNew">
      <div className="absolute flex flex-col font-['Roboto:Regular',sans-serif] font-normal inset-[0_4%_0_0] justify-center leading-[0] text-[#2f4bb7] text-[13px] text-center tracking-[-0.286px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.5]">What’s New?</p>
      </div>
      <div className="absolute aspect-[8/8] bg-[#de186c] left-[90.67%] right-0 rounded-[20px] top-[3px]" />
    </div>
  );
}

function Divider() {
  return (
    <div className="h-[19px] relative shrink-0 w-0" data-name="Divider">
      <div className="absolute inset-[0_-1px_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 19">
          <g id="Divider">
            <line id="Line 1875" stroke="var(--stroke-0, #707070)" strokeOpacity="0.4" x1="0.500001" x2="0.5" y1="2.18557e-08" y2="19" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <WhatsNew />
      <Divider />
    </div>
  );
}

function User() {
  return (
    <div className="bg-[#414171] content-stretch flex flex-col gap-[10px] items-center justify-center p-[10px] relative rounded-[16px] shrink-0 size-[32px]" data-name="User">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-right text-white" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        JD
      </p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center justify-end min-h-px min-w-px relative">
      <Frame17 />
      <User />
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="absolute bg-[#d9dbe0] content-stretch flex gap-[253px] items-center left-0 px-[50px] py-[10px] shadow-[0px_1px_12px_0px_rgba(0,0,0,0.06)] top-0 w-[1440px]" data-name="header container">
      <Left />
      <Frame16 />
      <Frame18 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex h-[17px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8a8c9a] text-[11px] text-center tracking-[-0.242px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.5]">Date Range</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-end min-h-px min-w-px relative">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center tracking-[-0.308px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.5]">20 Jan 26 - 19 Feb 26</p>
      </div>
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_36_6644)" id="calendar">
          <g id="Vector" />
          <path d={svgPaths.p1434f800} fill="var(--fill-0, #808080)" id="Icon awesome-calendar-alt" />
        </g>
        <defs>
          <clipPath id="clip0_36_6644">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Datepicker16Px() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[32px]" data-name="Datepicker (16px)">
      <Calendar />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px pb-[3px] relative w-full">
      <div aria-hidden="true" className="absolute border-[#a8a8a8] border-b-[0.6px] border-solid inset-0 pointer-events-none" />
      <Frame11 />
      <Datepicker16Px />
    </div>
  );
}

function Select() {
  return (
    <div className="content-stretch flex flex-col h-[50px] items-start justify-between relative shrink-0 w-full" data-name="Select">
      <Frame12 />
      <Frame9 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex h-[17px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Roboto:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#8a8c9a] text-[11px] text-center tracking-[-0.242px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.5]">Selected for next 30 days</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[220px]">
      <Select />
      <Frame13 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex h-[17px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#8a8c9a] text-[11px] text-center tracking-[-0.242px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.5]">Property (Type and Search)*</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-end min-h-px min-w-px relative">
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center tracking-[-0.308px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.5]">DLF City Club 3</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px pb-[3px] relative w-full">
      <div aria-hidden="true" className="absolute border-[#a8a8a8] border-b-[0.6px] border-solid inset-0 pointer-events-none" />
      <Frame15 />
    </div>
  );
}

function Select1() {
  return (
    <div className="content-stretch flex flex-col h-[50px] items-start justify-between relative shrink-0 w-[220px]" data-name="Select">
      <Frame14 />
      <Frame10 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[66.875px]" data-name="Frame21">
      <p className="-translate-x-1/2 absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16.5px] left-[14.5px] text-[#8a8c9a] text-[11px] text-center top-0 tracking-[-0.242px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Room
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[21px] left-0 top-[3.5px] w-[77.516px]" data-name="Frame22">
      <p className="-translate-x-1/2 absolute font-['Roboto:Regular',sans-serif] font-normal leading-[21px] left-[12px] text-[#505050] text-[14px] text-center top-0 tracking-[-0.308px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        All
      </p>
    </div>
  );
}

function Container() {
  return <div className="absolute border-[#a8a8a8] border-b-[0.5px] border-solid h-[30px] left-0 top-0 w-[140px]" data-name="Container" />;
}

function KeyboardArrowDown() {
  return (
    <div className="absolute contents inset-[42.86%_32.14%_39.29%_32.14%]" data-name="Keyboard arrow down">
      <div className="absolute inset-[42.86%_32.14%_39.29%_32.14%]" data-name="Icon feather-chevron-down">
        <div className="absolute inset-[-15%_-7.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 6.5">
            <path d={svgPaths.p3d2c9380} id="Icon feather-chevron-down" stroke="var(--stroke-0, #8A8C9A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <KeyboardArrowDown />
    </div>
  );
}

function KeyboardArrowDown2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[112px] overflow-clip size-[28px] top-0" data-name="KeyboardArrowDown2">
      <Icon />
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Frame14">
      <Frame4 />
      <Container />
      <KeyboardArrowDown2 />
    </div>
  );
}

function AmountSpent() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]" data-name="AmountSpent">
      <Frame3 />
      <Frame />
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[66.875px]" data-name="Frame21">
      <p className="-translate-x-1/2 absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16.5px] left-[14px] text-[#8a8c9a] text-[11px] text-center top-0 tracking-[-0.242px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Rate
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-[21px] left-0 top-[3.5px] w-[77.516px]" data-name="Frame22">
      <p className="-translate-x-1/2 absolute font-['Roboto:Regular',sans-serif] font-normal leading-[21px] left-[12px] text-[#505050] text-[14px] text-center top-0 tracking-[-0.308px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        All
      </p>
    </div>
  );
}

function Container1() {
  return <div className="absolute border-[#a8a8a8] border-b-[0.5px] border-solid h-[30px] left-0 top-0 w-[140px]" data-name="Container" />;
}

function KeyboardArrowDown1() {
  return (
    <div className="absolute contents inset-[42.86%_32.14%_39.29%_32.14%]" data-name="Keyboard arrow down">
      <div className="absolute inset-[42.86%_32.14%_39.29%_32.14%]" data-name="Icon feather-chevron-down">
        <div className="absolute inset-[-15%_-7.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 6.5">
            <path d={svgPaths.p3d2c9380} id="Icon feather-chevron-down" stroke="var(--stroke-0, #8A8C9A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <KeyboardArrowDown1 />
    </div>
  );
}

function KeyboardArrowDown3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[112px] overflow-clip size-[28px] top-0" data-name="KeyboardArrowDown2">
      <Icon1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Frame14">
      <Frame6 />
      <Container1 />
      <KeyboardArrowDown3 />
    </div>
  );
}

function AmountSpent1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]" data-name="AmountSpent">
      <Frame5 />
      <Frame1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[66.875px]" data-name="Frame21">
      <p className="-translate-x-1/2 absolute font-['Roboto:Regular',sans-serif] font-normal leading-[16.5px] left-[29.5px] text-[#8a8c9a] text-[11px] text-center top-0 tracking-[-0.242px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Guest Count
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute h-[21px] left-0 top-[3.5px] w-[77.516px]" data-name="Frame22">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal leading-[21px] left-0 text-[#505050] text-[14px] top-0 tracking-[-0.308px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        1 Adult
      </p>
    </div>
  );
}

function Container2() {
  return <div className="absolute border-[#a8a8a8] border-b-[0.5px] border-solid h-[30px] left-0 top-0 w-[140px]" data-name="Container" />;
}

function KeyboardArrowDown5() {
  return (
    <div className="absolute contents inset-[42.86%_32.14%_39.29%_32.14%]" data-name="Keyboard arrow down">
      <div className="absolute inset-[42.86%_32.14%_39.29%_32.14%]" data-name="Icon feather-chevron-down">
        <div className="absolute inset-[-15%_-7.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 6.5">
            <path d={svgPaths.p3d2c9380} id="Icon feather-chevron-down" stroke="var(--stroke-0, #8A8C9A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <KeyboardArrowDown5 />
    </div>
  );
}

function KeyboardArrowDown4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[112px] overflow-clip size-[28px] top-0" data-name="KeyboardArrowDown2">
      <Icon2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Frame14">
      <Frame8 />
      <Container2 />
      <KeyboardArrowDown4 />
    </div>
  );
}

function AmountSpent2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px]" data-name="AmountSpent">
      <Frame7 />
      <Frame2 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[6px] h-[40px] items-center justify-end px-[12px] relative shrink-0" data-name="label">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-center text-white tracking-[0.28px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Search
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#2753eb] content-stretch flex items-center justify-center px-[10px] relative rounded-[6px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#2753eb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Label />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full">
      <Frame19 />
      <Select1 />
      <AmountSpent />
      <AmountSpent1 />
      <AmountSpent2 />
      <Button />
    </div>
  );
}

function FilterSelection() {
  return (
    <div className="-translate-x-1/2 absolute bg-white content-stretch flex flex-col items-center justify-center left-1/2 px-[140px] py-[18px] top-[113px] w-[1440px]" data-name="Filter Selection">
      <Frame20 />
    </div>
  );
}

function Status() {
  return (
    <div className="absolute content-stretch flex items-center left-0 py-[13px] top-[5px]" data-name="Status">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#5f5f5f] text-[14px] tracking-[-0.1504px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Status:
      </p>
    </div>
  );
}

function Legends() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[60px] py-[18px] top-0" data-name="Legends">
      <div className="bg-[#ff7272] h-[7px] shrink-0 w-[19px]" />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#8b8c9a] text-[12px] tracking-[-0.1504px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Closed
      </p>
    </div>
  );
}

function Legends1() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[138px] py-[18px] top-0" data-name="Legends">
      <div className="bg-[#80cbc4] h-[7px] shrink-0 w-[19px]" />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#8b8c9a] text-[12px] tracking-[-0.1504px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Available
      </p>
    </div>
  );
}

function Legends2() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[226px] py-[18px] top-0" data-name="Legends">
      <div className="bg-[#c1d3f7] h-[7px] shrink-0 w-[19px]" />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#8b8c9a] text-[12px] tracking-[-0.1504px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Parent
      </p>
    </div>
  );
}

function IconLock() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="icon/lock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="icon/lock">
          <path d={svgPaths.p1aca3780} id="Vector" stroke="var(--stroke-0, #FF5E01)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p25f81600} id="Vector_2" stroke="var(--stroke-0, #FF5E01)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Legends3() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[302px] py-[18px] top-0" data-name="Legends">
      <IconLock />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#8b8c9a] text-[12px] tracking-[-0.1504px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Restrictions
      </p>
    </div>
  );
}

function IconZap() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="icon/zap">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="icon/zap">
          <path d={svgPaths.p27661e00} id="Vector" stroke="var(--stroke-0, #D500FF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Legends4() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[403px] py-[18px] top-0" data-name="Legends">
      <IconZap />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#8b8c9a] text-[12px] tracking-[-0.1504px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Rule Applied
      </p>
    </div>
  );
}

function LegendsFrame() {
  return (
    <div className="h-[56px] relative shrink-0 w-[490px]" data-name="Legends-Frame">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Status />
        <Legends />
        <Legends1 />
        <Legends2 />
        <Legends3 />
        <Legends4 />
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#e2e8ee] relative rounded-[4px] shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-start overflow-clip px-[10px] py-[6px] relative rounded-[inherit]">
        <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[12px] text-black" style={{ fontVariationSettings: "\'wdth\' 100" }}>{`Automated rules are active on some rooms. Click the      icon to see which conditions are being applied.`}</p>
        <div className="absolute h-[13.333px] left-[294px] top-[9px] w-[12px]" data-name="Vector">
          <div className="absolute inset-[-3.75%_-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14.3334">
              <path d={svgPaths.p1b7d2a80} id="Vector" stroke="var(--stroke-0, #D500FF)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c7c8ca] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function SubHeader() {
  return (
    <div className="absolute bg-[#f1f2f8] content-stretch flex items-center justify-between left-0 pt-px px-[50px] top-[216px] w-[1440px]" data-name="Sub-header">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <LegendsFrame />
      <Frame21 />
    </div>
  );
}

function Column() {
  return <div className="absolute h-[69px] left-0 top-0 w-[240px]" data-name="Column" />;
}

function Column1() {
  return <div className="absolute h-[69px] left-[240px] top-0 w-[90px]" data-name="Column" />;
}

function Column2() {
  return <div className="absolute h-[69px] left-[330px] top-0 w-[80px]" data-name="Column" />;
}

function Column3() {
  return <div className="absolute h-[69px] left-[410px] top-0 w-[80px]" data-name="Column" />;
}

function Column4() {
  return <div className="absolute h-[69px] left-[490px] top-0 w-[80px]" data-name="Column" />;
}

function Column5() {
  return <div className="absolute h-[69px] left-[570px] top-0 w-[80px]" data-name="Column" />;
}

function Column6() {
  return <div className="absolute h-[69px] left-[650px] top-0 w-[80px]" data-name="Column" />;
}

function Column7() {
  return <div className="absolute h-[69px] left-[730px] top-0 w-[80px]" data-name="Column" />;
}

function Column8() {
  return <div className="absolute h-[69px] left-[810px] top-0 w-[80px]" data-name="Column" />;
}

function Column9() {
  return <div className="absolute h-[69px] left-[890px] top-0 w-[80px]" data-name="Column" />;
}

function Column10() {
  return <div className="absolute h-[69px] left-[970px] top-0 w-[80px]" data-name="Column" />;
}

function Column11() {
  return <div className="absolute h-[69px] left-[1050px] top-0 w-[80px]" data-name="Column" />;
}

function Column12() {
  return <div className="absolute h-[69px] left-[1130px] top-0 w-[80px]" data-name="Column" />;
}

function Column13() {
  return <div className="absolute h-[69px] left-[1210px] top-0 w-[80px]" data-name="Column" />;
}

function Column14() {
  return <div className="absolute h-[69px] left-[1290px] top-0 w-[80px]" data-name="Column" />;
}

function Column15() {
  return <div className="absolute h-[69px] left-[1370px] top-0 w-[80px]" data-name="Column" />;
}

function ColumnGroup() {
  return (
    <div className="absolute h-[69px] left-0 top-0 w-[1450px]" data-name="Column Group">
      <Column />
      <Column1 />
      <Column2 />
      <Column3 />
      <Column4 />
      <Column5 />
      <Column6 />
      <Column7 />
      <Column8 />
      <Column9 />
      <Column10 />
      <Column11 />
      <Column12 />
      <Column13 />
      <Column14 />
      <Column15 />
    </div>
  );
}

function HeaderCell() {
  return <div className="absolute border-[#e0e0e0] border-b border-solid h-[69px] left-0 top-0 w-[240px]" data-name="Header Cell" />;
}

function HeaderCell1() {
  return <div className="absolute border-[#e0e0e0] border-b border-r border-solid h-[69px] left-[240px] top-0 w-[90px]" data-name="Header Cell" />;
}

function Text() {
  return (
    <div className="h-[15px] relative shrink-0 w-[19.641px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[15px] left-[10px] text-[#999] text-[10px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Wed
        </p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[17.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[22.5px] left-[9px] text-[#333] text-[15px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          21
        </p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[15px] relative shrink-0 w-[16.547px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[15px] left-[8.5px] text-[#999] text-[10px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Jan
        </p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[52.5px] items-center left-[12.5px] top-[8px] w-[55px]" data-name="Container">
      <Text />
      <Text1 />
      <Text2 />
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute border-[#e0e0e0] border-b border-r border-solid h-[69px] left-[330px] top-0 w-[80px]" data-name="Header Cell">
      <Container5 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[15px] relative shrink-0 w-[17.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[15px] left-[9px] text-[#999] text-[10px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Thu
        </p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[17.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[22.5px] left-[9px] text-[#333] text-[15px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          22
        </p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[15px] relative shrink-0 w-[16.547px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[15px] left-[8.5px] text-[#999] text-[10px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Jan
        </p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[52.5px] items-center left-[12.5px] top-[8px] w-[55px]" data-name="Container">
      <Text3 />
      <Text4 />
      <Text5 />
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute border-[#e0e0e0] border-b border-r border-solid h-[69px] left-[410px] top-0 w-[80px]" data-name="Header Cell">
      <Container6 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[15px] relative shrink-0 w-[11.672px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[15px] left-[6px] text-[#999] text-[10px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Fri
        </p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[17.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[22.5px] left-[9px] text-[#333] text-[15px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          23
        </p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[15px] relative shrink-0 w-[16.547px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[15px] left-[8.5px] text-[#999] text-[10px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Jan
        </p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[52.5px] items-center left-[12.5px] top-[8px] w-[55px]" data-name="Container">
      <Text6 />
      <Text7 />
      <Text8 />
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute border-[#e0e0e0] border-b border-r border-solid h-[69px] left-[490px] top-0 w-[80px]" data-name="Header Cell">
      <Container7 />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[15px] relative shrink-0 w-[14.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[15px] left-[7.5px] text-[#999] text-[10px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Sat
        </p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[17.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[22.5px] left-[9px] text-[#333] text-[15px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          24
        </p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[15px] relative shrink-0 w-[16.547px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[15px] left-[8.5px] text-[#999] text-[10px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Jan
        </p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col h-[52.5px] items-center left-[12.5px] top-[8px] w-[55px]" data-name="Container">
      <Text9 />
      <Text10 />
      <Text11 />
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="absolute border-[#e0e0e0] border-b border-r border-solid h-[69px] left-[570px] top-0 w-[80px]" data-name="Header Cell">
      <Container8 />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[15px] relative shrink-0 w-[17.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[15px] left-[9px] text-[#999] text-[10px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Sun
        </p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[17.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[22.5px] left-[9px] text-[#333] text-[15px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          25
        </p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[15px] relative shrink-0 w-[16.547px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[15px] left-[8.5px] text-[#999] text-[10px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Jan
        </p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col h-[52.5px] items-center left-[12.5px] top-[8px] w-[55px]" data-name="Container">
      <Text12 />
      <Text13 />
      <Text14 />
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="absolute border-[#e0e0e0] border-b border-r border-solid h-[69px] left-[650px] top-0 w-[80px]" data-name="Header Cell">
      <Container9 />
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[15px] relative shrink-0 w-[20.016px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[15px] left-[10.5px] text-[#999] text-[10px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Mon
        </p>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[17.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[22.5px] left-[9px] text-[#333] text-[15px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          26
        </p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[15px] relative shrink-0 w-[16.547px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[15px] left-[8.5px] text-[#999] text-[10px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Jan
        </p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col h-[52.5px] items-center left-[12.5px] top-[8px] w-[55px]" data-name="Container">
      <Text15 />
      <Text16 />
      <Text17 />
    </div>
  );
}

function HeaderCell7() {
  return (
    <div className="absolute border-[#e0e0e0] border-b border-r border-solid h-[69px] left-[730px] top-0 w-[80px]" data-name="Header Cell">
      <Container10 />
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[15px] relative shrink-0 w-[16.844px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[15px] left-[8.5px] text-[#999] text-[10px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Tue
        </p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[17.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[22.5px] left-[9px] text-[#333] text-[15px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          27
        </p>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[15px] relative shrink-0 w-[16.547px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[15px] left-[8.5px] text-[#999] text-[10px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Jan
        </p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col h-[52.5px] items-center left-[12.5px] top-[8px] w-[55px]" data-name="Container">
      <Text18 />
      <Text19 />
      <Text20 />
    </div>
  );
}

function HeaderCell8() {
  return (
    <div className="absolute border-[#e0e0e0] border-b border-r border-solid h-[69px] left-[810px] top-0 w-[80px]" data-name="Header Cell">
      <Container11 />
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[15px] relative shrink-0 w-[19.641px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[15px] left-[10px] text-[#999] text-[10px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Wed
        </p>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[17.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[22.5px] left-[9px] text-[#333] text-[15px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          28
        </p>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[15px] relative shrink-0 w-[16.547px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[15px] left-[8.5px] text-[#999] text-[10px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Jan
        </p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col h-[52.5px] items-center left-[12.5px] top-[8px] w-[55px]" data-name="Container">
      <Text21 />
      <Text22 />
      <Text23 />
    </div>
  );
}

function HeaderCell9() {
  return (
    <div className="absolute border-[#e0e0e0] border-b border-r border-solid h-[69px] left-[890px] top-0 w-[80px]" data-name="Header Cell">
      <Container12 />
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[15px] relative shrink-0 w-[17.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[15px] left-[9px] text-[#999] text-[10px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Thu
        </p>
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[17.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[22.5px] left-[9px] text-[#333] text-[15px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          29
        </p>
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[15px] relative shrink-0 w-[16.547px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[15px] left-[8.5px] text-[#999] text-[10px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Jan
        </p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col h-[52.5px] items-center left-[12.5px] top-[8px] w-[55px]" data-name="Container">
      <Text24 />
      <Text25 />
      <Text26 />
    </div>
  );
}

function HeaderCell10() {
  return (
    <div className="absolute border-[#e0e0e0] border-b border-r border-solid h-[69px] left-[970px] top-0 w-[80px]" data-name="Header Cell">
      <Container13 />
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[15px] relative shrink-0 w-[11.672px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[15px] left-[6px] text-[#999] text-[10px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Fri
        </p>
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[17.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[22.5px] left-[9px] text-[#333] text-[15px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          30
        </p>
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[15px] relative shrink-0 w-[16.547px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[15px] left-[8.5px] text-[#999] text-[10px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Jan
        </p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col h-[52.5px] items-center left-[12.5px] top-[8px] w-[55px]" data-name="Container">
      <Text27 />
      <Text28 />
      <Text29 />
    </div>
  );
}

function HeaderCell11() {
  return (
    <div className="absolute border-[#e0e0e0] border-b border-r border-solid h-[69px] left-[1050px] top-0 w-[80px]" data-name="Header Cell">
      <Container14 />
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[15px] relative shrink-0 w-[14.906px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[15px] left-[7.5px] text-[#999] text-[10px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Sat
        </p>
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[17.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[22.5px] left-[9px] text-[#333] text-[15px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          31
        </p>
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="h-[15px] relative shrink-0 w-[16.547px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[15px] left-[8.5px] text-[#999] text-[10px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Jan
        </p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col h-[52.5px] items-center left-[12.5px] top-[8px] w-[55px]" data-name="Container">
      <Text30 />
      <Text31 />
      <Text32 />
    </div>
  );
}

function HeaderCell12() {
  return (
    <div className="absolute border-[#e0e0e0] border-b border-r border-solid h-[69px] left-[1130px] top-0 w-[80px]" data-name="Header Cell">
      <Container15 />
    </div>
  );
}

function Text33() {
  return (
    <div className="h-[15px] relative shrink-0 w-[17.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[15px] left-[9px] text-[#999] text-[10px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Sun
        </p>
      </div>
    </div>
  );
}

function Text34() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[17.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[22.5px] left-[9px] text-[#333] text-[15px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          01
        </p>
      </div>
    </div>
  );
}

function Text35() {
  return (
    <div className="h-[15px] relative shrink-0 w-[16.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[15px] left-[8.5px] text-[#999] text-[10px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Feb
        </p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col h-[52.5px] items-center left-[12.5px] top-[8px] w-[55px]" data-name="Container">
      <Text33 />
      <Text34 />
      <Text35 />
    </div>
  );
}

function HeaderCell13() {
  return (
    <div className="absolute border-[#e0e0e0] border-b border-r border-solid h-[69px] left-[1210px] top-0 w-[80px]" data-name="Header Cell">
      <Container16 />
    </div>
  );
}

function Text36() {
  return (
    <div className="h-[15px] relative shrink-0 w-[20.016px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[15px] left-[10.5px] text-[#999] text-[10px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Mon
        </p>
      </div>
    </div>
  );
}

function Text37() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[17.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[22.5px] left-[9px] text-[#333] text-[15px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          02
        </p>
      </div>
    </div>
  );
}

function Text38() {
  return (
    <div className="h-[15px] relative shrink-0 w-[16.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[15px] left-[8.5px] text-[#999] text-[10px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Feb
        </p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col h-[52.5px] items-center left-[12.5px] top-[8px] w-[55px]" data-name="Container">
      <Text36 />
      <Text37 />
      <Text38 />
    </div>
  );
}

function HeaderCell14() {
  return (
    <div className="absolute border-[#e0e0e0] border-b border-r border-solid h-[69px] left-[1290px] top-0 w-[80px]" data-name="Header Cell">
      <Container17 />
    </div>
  );
}

function Text39() {
  return (
    <div className="h-[15px] relative shrink-0 w-[16.844px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[15px] left-[8.5px] text-[#999] text-[10px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Tue
        </p>
      </div>
    </div>
  );
}

function Text40() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[17.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[22.5px] left-[9px] text-[#333] text-[15px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          03
        </p>
      </div>
    </div>
  );
}

function Text41() {
  return (
    <div className="h-[15px] relative shrink-0 w-[16.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Roboto:Bold',sans-serif] font-bold leading-[15px] left-[8.5px] text-[#999] text-[10px] text-center top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Feb
        </p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col h-[52.5px] items-center left-[12.5px] top-[8px] w-[55px]" data-name="Container">
      <Text39 />
      <Text40 />
      <Text41 />
    </div>
  );
}

function HeaderCell15() {
  return (
    <div className="absolute border-[#e0e0e0] border-b border-r border-solid h-[69px] left-[1370px] top-0 w-[80px]" data-name="Header Cell">
      <Container18 />
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-[#fafafa] h-[69px] left-0 top-0 w-[1450px]" data-name="Table Row">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
      <HeaderCell4 />
      <HeaderCell5 />
      <HeaderCell6 />
      <HeaderCell7 />
      <HeaderCell8 />
      <HeaderCell9 />
      <HeaderCell10 />
      <HeaderCell11 />
      <HeaderCell12 />
      <HeaderCell13 />
      <HeaderCell14 />
      <HeaderCell15 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[69px] left-0 top-0 w-[1450px]" data-name="Table Header">
      <TableRow />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[69.5px] relative shrink-0 w-full" data-name="Table">
      <ColumnGroup />
      <TableHeader />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[69.5px] items-start left-0 pr-[-110.5px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] top-0 w-[1340px]" data-name="Container">
      <Table />
    </div>
  );
}

function Column16() {
  return <div className="absolute h-[48.5px] left-0 top-0 w-[240px]" data-name="Column" />;
}

function Column17() {
  return <div className="absolute h-[48.5px] left-[240px] top-0 w-[90px]" data-name="Column" />;
}

function Column18() {
  return <div className="absolute h-[48.5px] left-[330px] top-0 w-[80px]" data-name="Column" />;
}

function Column19() {
  return <div className="absolute h-[48.5px] left-[410px] top-0 w-[80px]" data-name="Column" />;
}

function Column20() {
  return <div className="absolute h-[48.5px] left-[490px] top-0 w-[80px]" data-name="Column" />;
}

function Column21() {
  return <div className="absolute h-[48.5px] left-[570px] top-0 w-[80px]" data-name="Column" />;
}

function Column22() {
  return <div className="absolute h-[48.5px] left-[650px] top-0 w-[80px]" data-name="Column" />;
}

function Column23() {
  return <div className="absolute h-[48.5px] left-[730px] top-0 w-[80px]" data-name="Column" />;
}

function Column24() {
  return <div className="absolute h-[48.5px] left-[810px] top-0 w-[80px]" data-name="Column" />;
}

function Column25() {
  return <div className="absolute h-[48.5px] left-[890px] top-0 w-[80px]" data-name="Column" />;
}

function Column26() {
  return <div className="absolute h-[48.5px] left-[970px] top-0 w-[80px]" data-name="Column" />;
}

function Column27() {
  return <div className="absolute h-[48.5px] left-[1050px] top-0 w-[80px]" data-name="Column" />;
}

function Column28() {
  return <div className="absolute h-[48.5px] left-[1130px] top-0 w-[80px]" data-name="Column" />;
}

function Column29() {
  return <div className="absolute h-[48.5px] left-[1210px] top-0 w-[80px]" data-name="Column" />;
}

function Column30() {
  return <div className="absolute h-[48.5px] left-[1290px] top-0 w-[80px]" data-name="Column" />;
}

function Column31() {
  return <div className="absolute h-[48.5px] left-[1370px] top-0 w-[80px]" data-name="Column" />;
}

function ColumnGroup1() {
  return (
    <div className="absolute h-[48.5px] left-0 top-0 w-[1450px]" data-name="Column Group">
      <Column16 />
      <Column17 />
      <Column18 />
      <Column19 />
      <Column20 />
      <Column21 />
      <Column22 />
      <Column23 />
      <Column24 />
      <Column25 />
      <Column26 />
      <Column27 />
      <Column28 />
      <Column29 />
      <Column30 />
      <Column31 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text42() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[94.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[19.5px] left-0 text-[#333] text-[13px] top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          Property Details
        </p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[19.5px] items-center left-[16px] top-[14.25px] w-[207.5px]" data-name="Button">
      <Icon3 />
      <Text42 />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute bg-white border-0 border-[#e0e0e0] border-solid h-[48.5px] left-0 top-0 w-[240px]" data-name="Table Cell">
      <Button1 />
    </div>
  );
}

function Text43() {
  return (
    <div className="absolute content-stretch flex h-[13px] items-start left-[22.09px] top-[19px] w-[45.797px]" data-name="Text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16.5px] relative shrink-0 text-[#666] text-[11px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Inventory
      </p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[48.5px] left-[240px] top-0 w-[90px]" data-name="Table Cell">
      <Text43 />
    </div>
  );
}

function Text44() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[32.53px] top-[17px] w-[14.938px]" data-name="Text">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        44
      </p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[48.5px] left-[330px] top-0 w-[80px]" data-name="Table Cell">
      <Text44 />
    </div>
  );
}

function Text45() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[32.53px] top-[17px] w-[14.938px]" data-name="Text">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        44
      </p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[48.5px] left-[410px] top-0 w-[80px]" data-name="Table Cell">
      <Text45 />
    </div>
  );
}

function Text46() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[32.53px] top-[17px] w-[14.938px]" data-name="Text">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        44
      </p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[48.5px] left-[490px] top-0 w-[80px]" data-name="Table Cell">
      <Text46 />
    </div>
  );
}

function Text47() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[32.53px] top-[17px] w-[14.938px]" data-name="Text">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        44
      </p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[48.5px] left-[570px] top-0 w-[80px]" data-name="Table Cell">
      <Text47 />
    </div>
  );
}

function Text48() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[32.53px] top-[17px] w-[14.938px]" data-name="Text">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        44
      </p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[48.5px] left-[650px] top-0 w-[80px]" data-name="Table Cell">
      <Text48 />
    </div>
  );
}

function Text49() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[32.53px] top-[17px] w-[14.938px]" data-name="Text">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        44
      </p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[48.5px] left-[730px] top-0 w-[80px]" data-name="Table Cell">
      <Text49 />
    </div>
  );
}

function Text50() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[32.53px] top-[17px] w-[14.938px]" data-name="Text">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        44
      </p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[48.5px] left-[810px] top-0 w-[80px]" data-name="Table Cell">
      <Text50 />
    </div>
  );
}

function Text51() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[32.53px] top-[17px] w-[14.938px]" data-name="Text">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        44
      </p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[48.5px] left-[890px] top-0 w-[80px]" data-name="Table Cell">
      <Text51 />
    </div>
  );
}

function Text52() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[32.53px] top-[17px] w-[14.938px]" data-name="Text">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        44
      </p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[48.5px] left-[970px] top-0 w-[80px]" data-name="Table Cell">
      <Text52 />
    </div>
  );
}

function Text53() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[32.53px] top-[17px] w-[14.938px]" data-name="Text">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        44
      </p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[48.5px] left-[1050px] top-0 w-[80px]" data-name="Table Cell">
      <Text53 />
    </div>
  );
}

function Text54() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[32.53px] top-[17px] w-[14.938px]" data-name="Text">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        44
      </p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[48.5px] left-[1130px] top-0 w-[80px]" data-name="Table Cell">
      <Text54 />
    </div>
  );
}

function Text55() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[32.53px] top-[17px] w-[14.938px]" data-name="Text">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        44
      </p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[48.5px] left-[1210px] top-0 w-[80px]" data-name="Table Cell">
      <Text55 />
    </div>
  );
}

function Text56() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[32.53px] top-[17px] w-[14.938px]" data-name="Text">
      <p className="font-['Roboto:SemiBold',sans-serif] font-semibold leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        44
      </p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[48.5px] left-[1290px] top-0 w-[80px]" data-name="Table Cell">
      <Text56 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute border-[#e0e0e0] border-b border-solid h-[48.5px] left-0 top-0 w-[1450px]" data-name="Table Row">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[48.5px] left-0 top-0 w-[1450px]" data-name="Table Body">
      <TableRow1 />
    </div>
  );
}

function Table1() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Table">
      <ColumnGroup1 />
      <TableBody />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 pr-[-110px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] top-[69.5px] w-[1340px]" data-name="Container">
      <Table1 />
    </div>
  );
}

function Column32() {
  return <div className="absolute h-[179px] left-0 top-0 w-[240px]" data-name="Column" />;
}

function Column33() {
  return <div className="absolute h-[179px] left-[240px] top-0 w-[90px]" data-name="Column" />;
}

function Column34() {
  return <div className="absolute h-[179px] left-[330px] top-0 w-[80px]" data-name="Column" />;
}

function Column35() {
  return <div className="absolute h-[179px] left-[410px] top-0 w-[80px]" data-name="Column" />;
}

function Column36() {
  return <div className="absolute h-[179px] left-[490px] top-0 w-[80px]" data-name="Column" />;
}

function Column37() {
  return <div className="absolute h-[179px] left-[570px] top-0 w-[80px]" data-name="Column" />;
}

function Column38() {
  return <div className="absolute h-[179px] left-[650px] top-0 w-[80px]" data-name="Column" />;
}

function Column39() {
  return <div className="absolute h-[179px] left-[730px] top-0 w-[80px]" data-name="Column" />;
}

function Column40() {
  return <div className="absolute h-[179px] left-[810px] top-0 w-[80px]" data-name="Column" />;
}

function Column41() {
  return <div className="absolute h-[179px] left-[890px] top-0 w-[80px]" data-name="Column" />;
}

function Column42() {
  return <div className="absolute h-[179px] left-[970px] top-0 w-[80px]" data-name="Column" />;
}

function Column43() {
  return <div className="absolute h-[179px] left-[1050px] top-0 w-[80px]" data-name="Column" />;
}

function Column44() {
  return <div className="absolute h-[179px] left-[1130px] top-0 w-[80px]" data-name="Column" />;
}

function Column45() {
  return <div className="absolute h-[179px] left-[1210px] top-0 w-[80px]" data-name="Column" />;
}

function Column46() {
  return <div className="absolute h-[179px] left-[1290px] top-0 w-[80px]" data-name="Column" />;
}

function Column47() {
  return <div className="absolute h-[179px] left-[1370px] top-0 w-[80px]" data-name="Column" />;
}

function ColumnGroup2() {
  return (
    <div className="absolute h-[179px] left-0 top-0 w-[1450px]" data-name="Column Group">
      <Column32 />
      <Column33 />
      <Column34 />
      <Column35 />
      <Column36 />
      <Column37 />
      <Column38 />
      <Column39 />
      <Column40 />
      <Column41 />
      <Column42 />
      <Column43 />
      <Column44 />
      <Column45 />
      <Column46 />
      <Column47 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[18px] left-0 text-[#333] text-[12px] top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Standard Room
      </p>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:Medium_Italic',sans-serif] font-medium italic leading-[15px] left-0 text-[#999] text-[10px] top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        STD
      </p>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[33px] relative shrink-0 w-[83.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container22 />
        <Container23 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[33px] items-center left-[16px] top-[12px] w-[207.5px]" data-name="Button">
      <Icon4 />
      <Container21 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute bg-white border-0 border-[#e0e0e0] border-solid h-[57.5px] left-0 top-0 w-[240px]" data-name="Table Cell">
      <Button2 />
    </div>
  );
}

function Text57() {
  return (
    <div className="absolute content-stretch flex h-[13px] items-start left-[22.09px] top-[23.5px] w-[45.797px]" data-name="Text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16.5px] relative shrink-0 text-[#666] text-[11px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Inventory
      </p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[57.5px] left-[240px] top-0 w-[90px]" data-name="Table Cell">
      <Text57 />
    </div>
  );
}

function Text58() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[36.34px] top-[21.5px] w-[7.313px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        5
      </p>
    </div>
  );
}

function Container24() {
  return <div className="absolute bg-[#4ecdc4] h-[3px] left-[0.5px] top-[54px] w-[79px]" data-name="Container" />;
}

function TableCell17() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[57.5px] left-[330px] top-0 w-[80px]" data-name="Table Cell">
      <Text58 />
      <Container24 />
    </div>
  );
}

function Text59() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[36.34px] top-[21.5px] w-[7.313px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        5
      </p>
    </div>
  );
}

function Container25() {
  return <div className="absolute bg-[#4ecdc4] h-[3px] left-[0.5px] top-[54px] w-[79px]" data-name="Container" />;
}

function TableCell18() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[57.5px] left-[410px] top-0 w-[80px]" data-name="Table Cell">
      <Text59 />
      <Container25 />
    </div>
  );
}

function Text60() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[36.34px] top-[21.5px] w-[7.313px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        5
      </p>
    </div>
  );
}

function Container26() {
  return <div className="absolute bg-[#4ecdc4] h-[3px] left-[0.5px] top-[54px] w-[79px]" data-name="Container" />;
}

function TableCell19() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[57.5px] left-[490px] top-0 w-[80px]" data-name="Table Cell">
      <Text60 />
      <Container26 />
    </div>
  );
}

function Text61() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[36.34px] top-[21.5px] w-[7.313px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        5
      </p>
    </div>
  );
}

function Container27() {
  return <div className="absolute bg-[#4ecdc4] h-[3px] left-[0.5px] top-[54px] w-[79px]" data-name="Container" />;
}

function TableCell20() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[57.5px] left-[570px] top-0 w-[80px]" data-name="Table Cell">
      <Text61 />
      <Container27 />
    </div>
  );
}

function Text62() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[36.34px] top-[21.5px] w-[7.313px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        5
      </p>
    </div>
  );
}

function Container28() {
  return <div className="absolute bg-[#4ecdc4] h-[3px] left-[0.5px] top-[54px] w-[79px]" data-name="Container" />;
}

function TableCell21() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[57.5px] left-[650px] top-0 w-[80px]" data-name="Table Cell">
      <Text62 />
      <Container28 />
    </div>
  );
}

function Text63() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[36.34px] top-[21.5px] w-[7.313px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        5
      </p>
    </div>
  );
}

function Container29() {
  return <div className="absolute bg-[#4ecdc4] h-[3px] left-[0.5px] top-[54px] w-[79px]" data-name="Container" />;
}

function TableCell22() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[57.5px] left-[730px] top-0 w-[80px]" data-name="Table Cell">
      <Text63 />
      <Container29 />
    </div>
  );
}

function Text64() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[36.34px] top-[21.5px] w-[7.313px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        5
      </p>
    </div>
  );
}

function Container30() {
  return <div className="absolute bg-[#4ecdc4] h-[3px] left-[0.5px] top-[54px] w-[79px]" data-name="Container" />;
}

function TableCell23() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[57.5px] left-[810px] top-0 w-[80px]" data-name="Table Cell">
      <Text64 />
      <Container30 />
    </div>
  );
}

function Text65() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[36.34px] top-[21.5px] w-[7.313px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        5
      </p>
    </div>
  );
}

function Container31() {
  return <div className="absolute bg-[#4ecdc4] h-[3px] left-[0.5px] top-[54px] w-[79px]" data-name="Container" />;
}

function TableCell24() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[57.5px] left-[890px] top-0 w-[80px]" data-name="Table Cell">
      <Text65 />
      <Container31 />
    </div>
  );
}

function Text66() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[36.34px] top-[21.5px] w-[7.313px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        5
      </p>
    </div>
  );
}

function Container32() {
  return <div className="absolute bg-[#4ecdc4] h-[3px] left-[0.5px] top-[54px] w-[79px]" data-name="Container" />;
}

function TableCell25() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[57.5px] left-[970px] top-0 w-[80px]" data-name="Table Cell">
      <Text66 />
      <Container32 />
    </div>
  );
}

function Text67() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[36.34px] top-[21.5px] w-[7.313px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        5
      </p>
    </div>
  );
}

function Container33() {
  return <div className="absolute bg-[#4ecdc4] h-[3px] left-[0.5px] top-[54px] w-[79px]" data-name="Container" />;
}

function TableCell26() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[57.5px] left-[1050px] top-0 w-[80px]" data-name="Table Cell">
      <Text67 />
      <Container33 />
    </div>
  );
}

function Text68() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[36.34px] top-[21.5px] w-[7.313px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        5
      </p>
    </div>
  );
}

function Container34() {
  return <div className="absolute bg-[#4ecdc4] h-[3px] left-[0.5px] top-[54px] w-[79px]" data-name="Container" />;
}

function TableCell27() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[57.5px] left-[1130px] top-0 w-[80px]" data-name="Table Cell">
      <Text68 />
      <Container34 />
    </div>
  );
}

function Text69() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[36.34px] top-[21.5px] w-[7.313px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        5
      </p>
    </div>
  );
}

function Container35() {
  return <div className="absolute bg-[#4ecdc4] h-[3px] left-[0.5px] top-[54px] w-[79px]" data-name="Container" />;
}

function TableCell28() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[57.5px] left-[1210px] top-0 w-[80px]" data-name="Table Cell">
      <Text69 />
      <Container35 />
    </div>
  );
}

function Text70() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[36.34px] top-[21.5px] w-[7.313px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        5
      </p>
    </div>
  );
}

function Container36() {
  return <div className="absolute bg-[#4ecdc4] h-[3px] left-[0.5px] top-[54px] w-[79px]" data-name="Container" />;
}

function TableCell29() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[57.5px] left-[1290px] top-0 w-[80px]" data-name="Table Cell">
      <Text70 />
      <Container36 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute border-[#e0e0e0] border-b border-solid h-[57.5px] left-0 top-0 w-[1450px]" data-name="Table Row">
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[33px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:Medium',sans-serif] font-medium leading-[16.5px] left-0 text-[#333] text-[11px] top-[-1px] w-[160px] whitespace-pre-wrap" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Club Only Special Rates With Breakfast And Complementary...
      </p>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:Italic',sans-serif] font-normal italic leading-[15px] left-0 text-[#999] text-[10px] top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        GDSR
      </p>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col h-[48px] items-start left-[16px] pl-[24px] top-[10.5px] w-[207.5px]" data-name="Container">
      <Container38 />
      <Container39 />
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute bg-white border-0 border-[#e0e0e0] border-solid h-[69px] left-0 top-0 w-[240px]" data-name="Table Cell">
      <Container37 />
    </div>
  );
}

function Text71() {
  return (
    <div className="absolute content-stretch flex h-[11px] items-start left-[19.7px] top-[30.5px] w-[50.578px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#666] text-[10px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Rates(EUR)
      </p>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[69px] left-[240px] top-0 w-[90px]" data-name="Table Cell">
      <Text71 />
    </div>
  );
}

function Text72() {
  return (
    <div className="absolute content-stretch flex h-[14px] items-start left-[23.13px] top-[28.5px] w-[33.734px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        12960
      </p>
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[69px] left-[330px] top-0 w-[80px]" data-name="Table Cell">
      <Text72 />
    </div>
  );
}

function Text73() {
  return (
    <div className="absolute content-stretch flex h-[14px] items-start left-[29.88px] top-[28.5px] w-[20.234px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        315
      </p>
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[69px] left-[410px] top-0 w-[80px]" data-name="Table Cell">
      <Text73 />
    </div>
  );
}

function Text74() {
  return (
    <div className="absolute content-stretch flex h-[14px] items-start left-[29.88px] top-[28.5px] w-[20.234px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        315
      </p>
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[69px] left-[490px] top-0 w-[80px]" data-name="Table Cell">
      <Text74 />
    </div>
  );
}

function Text75() {
  return (
    <div className="absolute content-stretch flex h-[14px] items-start left-[29.88px] top-[28.5px] w-[20.234px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        315
      </p>
    </div>
  );
}

function TableCell35() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[69px] left-[570px] top-0 w-[80px]" data-name="Table Cell">
      <Text75 />
    </div>
  );
}

function Text76() {
  return (
    <div className="absolute content-stretch flex h-[14px] items-start left-[29.88px] top-[28.5px] w-[20.234px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        315
      </p>
    </div>
  );
}

function TableCell36() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[69px] left-[650px] top-0 w-[80px]" data-name="Table Cell">
      <Text76 />
    </div>
  );
}

function Text77() {
  return (
    <div className="absolute content-stretch flex h-[14px] items-start left-[29.88px] top-[28.5px] w-[20.234px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        315
      </p>
    </div>
  );
}

function TableCell37() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[69px] left-[730px] top-0 w-[80px]" data-name="Table Cell">
      <Text77 />
    </div>
  );
}

function Text78() {
  return (
    <div className="absolute content-stretch flex h-[14px] items-start left-[29.88px] top-[28.5px] w-[20.234px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        315
      </p>
    </div>
  );
}

function TableCell38() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[69px] left-[810px] top-0 w-[80px]" data-name="Table Cell">
      <Text78 />
    </div>
  );
}

function Text79() {
  return (
    <div className="absolute content-stretch flex h-[14px] items-start left-[29.88px] top-[28.5px] w-[20.234px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        315
      </p>
    </div>
  );
}

function TableCell39() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[69px] left-[890px] top-0 w-[80px]" data-name="Table Cell">
      <Text79 />
    </div>
  );
}

function Text80() {
  return (
    <div className="absolute content-stretch flex h-[14px] items-start left-[29.88px] top-[28.5px] w-[20.234px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        315
      </p>
    </div>
  );
}

function TableCell40() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[69px] left-[970px] top-0 w-[80px]" data-name="Table Cell">
      <Text80 />
    </div>
  );
}

function Text81() {
  return (
    <div className="absolute content-stretch flex h-[14px] items-start left-[29.88px] top-[28.5px] w-[20.234px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        315
      </p>
    </div>
  );
}

function TableCell41() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[69px] left-[1050px] top-0 w-[80px]" data-name="Table Cell">
      <Text81 />
    </div>
  );
}

function Text82() {
  return (
    <div className="absolute content-stretch flex h-[14px] items-start left-[29.88px] top-[28.5px] w-[20.234px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        350
      </p>
    </div>
  );
}

function TableCell42() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[69px] left-[1130px] top-0 w-[80px]" data-name="Table Cell">
      <Text82 />
    </div>
  );
}

function Text83() {
  return (
    <div className="absolute content-stretch flex h-[14px] items-start left-[29.88px] top-[28.5px] w-[20.234px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        350
      </p>
    </div>
  );
}

function TableCell43() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[69px] left-[1210px] top-0 w-[80px]" data-name="Table Cell">
      <Text83 />
    </div>
  );
}

function Text84() {
  return (
    <div className="absolute content-stretch flex h-[14px] items-start left-[29.88px] top-[28.5px] w-[20.234px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        350
      </p>
    </div>
  );
}

function TableCell44() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[69px] left-[1290px] top-0 w-[80px]" data-name="Table Cell">
      <Text84 />
    </div>
  );
}

function Text85() {
  return (
    <div className="absolute content-stretch flex h-[14px] items-start left-[29.88px] top-[28.5px] w-[20.234px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        350
      </p>
    </div>
  );
}

function TableCell45() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[69px] left-[1370px] top-0 w-[80px]" data-name="Table Cell">
      <Text85 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute border-[#e0e0e0] border-b border-solid h-[69px] left-0 top-[57.5px] w-[1450px]" data-name="Table Row">
      <TableCell30 />
      <TableCell31 />
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
      <TableCell35 />
      <TableCell36 />
      <TableCell37 />
      <TableCell38 />
      <TableCell39 />
      <TableCell40 />
      <TableCell41 />
      <TableCell42 />
      <TableCell43 />
      <TableCell44 />
      <TableCell45 />
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[16.5px] left-0 text-[#333] text-[11px] top-[-1px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        BAR
      </p>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:Italic',sans-serif] font-normal italic leading-[15px] left-0 text-[#999] text-[10px] top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        BAR
      </p>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col h-[31.5px] items-start left-[16px] pl-[24px] top-[10.5px] w-[207.5px]" data-name="Container">
      <Container41 />
      <Container42 />
    </div>
  );
}

function TableCell46() {
  return (
    <div className="absolute bg-[#f4f5f6] border-0 border-[#e0e0e0] border-solid h-[52.5px] left-0 top-0 w-[240px]" data-name="Table Cell">
      <Container40 />
    </div>
  );
}

function Text86() {
  return (
    <div className="absolute content-stretch flex h-[11px] items-start left-[19.7px] top-[22.25px] w-[50.578px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#666] text-[10px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Rates(EUR)
      </p>
    </div>
  );
}

function TableCell47() {
  return (
    <div className="absolute bg-[#f4f5f6] border-[#e0e0e0] border-r border-solid h-[52.5px] left-[240px] top-0 w-[90px]" data-name="Table Cell">
      <Text86 />
    </div>
  );
}

function Text87() {
  return (
    <div className="absolute content-stretch flex h-[14px] items-start left-[26.5px] top-[20.25px] w-[26.984px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        9000
      </p>
    </div>
  );
}

function TableCell48() {
  return (
    <div className="absolute bg-[#f4f5f6] border-[#e0e0e0] border-r border-solid h-[52.5px] left-[330px] top-0 w-[80px]" data-name="Table Cell">
      <Text87 />
    </div>
  );
}

function Text88() {
  return (
    <div className="absolute content-stretch flex h-[14px] items-start left-[26.5px] top-[20.25px] w-[26.984px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        9000
      </p>
    </div>
  );
}

function TableCell49() {
  return (
    <div className="absolute bg-[#f4f5f6] border-[#e0e0e0] border-r border-solid h-[52.5px] left-[410px] top-0 w-[80px]" data-name="Table Cell">
      <Text88 />
    </div>
  );
}

function Text89() {
  return (
    <div className="absolute content-stretch flex h-[14px] items-start left-[26.5px] top-[20.25px] w-[26.984px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        9000
      </p>
    </div>
  );
}

function TableCell50() {
  return (
    <div className="absolute bg-[#f4f5f6] border-[#e0e0e0] border-r border-solid h-[52.5px] left-[490px] top-0 w-[80px]" data-name="Table Cell">
      <Text89 />
    </div>
  );
}

function Text90() {
  return (
    <div className="absolute content-stretch flex h-[14px] items-start left-[26.5px] top-[20.25px] w-[26.984px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        9000
      </p>
    </div>
  );
}

function TableCell51() {
  return (
    <div className="absolute bg-[#f4f5f6] border-[#e0e0e0] border-r border-solid h-[52.5px] left-[570px] top-0 w-[80px]" data-name="Table Cell">
      <Text90 />
    </div>
  );
}

function Text91() {
  return (
    <div className="absolute content-stretch flex h-[14px] items-start left-[26.5px] top-[20.25px] w-[26.984px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        9000
      </p>
    </div>
  );
}

function TableCell52() {
  return (
    <div className="absolute bg-[#f4f5f6] border-[#e0e0e0] border-r border-solid h-[52.5px] left-[650px] top-0 w-[80px]" data-name="Table Cell">
      <Text91 />
    </div>
  );
}

function Text92() {
  return (
    <div className="absolute content-stretch flex h-[14px] items-start left-[26.5px] top-[20.25px] w-[26.984px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        9000
      </p>
    </div>
  );
}

function TableCell53() {
  return (
    <div className="absolute bg-[#f4f5f6] border-[#e0e0e0] border-r border-solid h-[52.5px] left-[730px] top-0 w-[80px]" data-name="Table Cell">
      <Text92 />
    </div>
  );
}

function Text93() {
  return (
    <div className="absolute content-stretch flex h-[14px] items-start left-[26.5px] top-[20.25px] w-[26.984px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        9000
      </p>
    </div>
  );
}

function TableCell54() {
  return (
    <div className="absolute bg-[#f4f5f6] border-[#e0e0e0] border-r border-solid h-[52.5px] left-[810px] top-0 w-[80px]" data-name="Table Cell">
      <Text93 />
    </div>
  );
}

function Text94() {
  return (
    <div className="absolute content-stretch flex h-[14px] items-start left-[26.5px] top-[20.25px] w-[26.984px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        9000
      </p>
    </div>
  );
}

function TableCell55() {
  return (
    <div className="absolute bg-[#f4f5f6] border-[#e0e0e0] border-r border-solid h-[52.5px] left-[890px] top-0 w-[80px]" data-name="Table Cell">
      <Text94 />
    </div>
  );
}

function Text95() {
  return (
    <div className="absolute content-stretch flex h-[14px] items-start left-[26.5px] top-[20.25px] w-[26.984px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        9000
      </p>
    </div>
  );
}

function TableCell56() {
  return (
    <div className="absolute bg-[#f4f5f6] border-[#e0e0e0] border-r border-solid h-[52.5px] left-[970px] top-0 w-[80px]" data-name="Table Cell">
      <Text95 />
    </div>
  );
}

function Text96() {
  return (
    <div className="absolute content-stretch flex h-[14px] items-start left-[26.5px] top-[20.25px] w-[26.984px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        9000
      </p>
    </div>
  );
}

function TableCell57() {
  return (
    <div className="absolute bg-[#f4f5f6] border-[#e0e0e0] border-r border-solid h-[52.5px] left-[1050px] top-0 w-[80px]" data-name="Table Cell">
      <Text96 />
    </div>
  );
}

function Text97() {
  return (
    <div className="absolute content-stretch flex h-[14px] items-start left-[26.5px] top-[20.25px] w-[26.984px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        9000
      </p>
    </div>
  );
}

function TableCell58() {
  return (
    <div className="absolute bg-[#f4f5f6] border-[#e0e0e0] border-r border-solid h-[52.5px] left-[1130px] top-0 w-[80px]" data-name="Table Cell">
      <Text97 />
    </div>
  );
}

function Text98() {
  return (
    <div className="absolute content-stretch flex h-[14px] items-start left-[26.5px] top-[20.25px] w-[26.984px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        9000
      </p>
    </div>
  );
}

function TableCell59() {
  return (
    <div className="absolute bg-[#f4f5f6] border-[#e0e0e0] border-r border-solid h-[52.5px] left-[1210px] top-0 w-[80px]" data-name="Table Cell">
      <Text98 />
    </div>
  );
}

function Text99() {
  return (
    <div className="absolute content-stretch flex h-[14px] items-start left-[26.5px] top-[20.25px] w-[26.984px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        9000
      </p>
    </div>
  );
}

function TableCell60() {
  return (
    <div className="absolute bg-[#f4f5f6] border-[#e0e0e0] border-r border-solid h-[52.5px] left-[1290px] top-0 w-[80px]" data-name="Table Cell">
      <Text99 />
    </div>
  );
}

function Text100() {
  return (
    <div className="absolute content-stretch flex h-[14px] items-start left-[26.5px] top-[20.25px] w-[26.984px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#333] text-[12px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        9000
      </p>
    </div>
  );
}

function TableCell61() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[52.5px] left-[1370px] top-0 w-[80px]" data-name="Table Cell">
      <Text100 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute border-[#e0e0e0] border-b border-solid h-[52.5px] left-0 top-[126.5px] w-[1450px]" data-name="Table Row">
      <TableCell46 />
      <TableCell47 />
      <TableCell48 />
      <TableCell49 />
      <TableCell50 />
      <TableCell51 />
      <TableCell52 />
      <TableCell53 />
      <TableCell54 />
      <TableCell55 />
      <TableCell56 />
      <TableCell57 />
      <TableCell58 />
      <TableCell59 />
      <TableCell60 />
      <TableCell61 />
    </div>
  );
}

function TableBody1() {
  return (
    <div className="absolute h-[179px] left-0 top-0 w-[1450px]" data-name="Table Body">
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
    </div>
  );
}

function Table2() {
  return (
    <div className="h-[179.5px] relative shrink-0 w-full" data-name="Table">
      <ColumnGroup2 />
      <TableBody1 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[179.5px] items-start left-0 pr-[-110.5px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] top-[130.5px] w-[1340px]" data-name="Container">
      <Table2 />
    </div>
  );
}

function Column48() {
  return <div className="absolute h-[57.5px] left-0 top-0 w-[240px]" data-name="Column" />;
}

function Column49() {
  return <div className="absolute h-[57.5px] left-[240px] top-0 w-[90px]" data-name="Column" />;
}

function Column50() {
  return <div className="absolute h-[57.5px] left-[330px] top-0 w-[80px]" data-name="Column" />;
}

function Column51() {
  return <div className="absolute h-[57.5px] left-[410px] top-0 w-[80px]" data-name="Column" />;
}

function Column52() {
  return <div className="absolute h-[57.5px] left-[490px] top-0 w-[80px]" data-name="Column" />;
}

function Column53() {
  return <div className="absolute h-[57.5px] left-[570px] top-0 w-[80px]" data-name="Column" />;
}

function Column54() {
  return <div className="absolute h-[57.5px] left-[650px] top-0 w-[80px]" data-name="Column" />;
}

function Column55() {
  return <div className="absolute h-[57.5px] left-[730px] top-0 w-[80px]" data-name="Column" />;
}

function Column56() {
  return <div className="absolute h-[57.5px] left-[810px] top-0 w-[80px]" data-name="Column" />;
}

function Column57() {
  return <div className="absolute h-[57.5px] left-[890px] top-0 w-[80px]" data-name="Column" />;
}

function Column58() {
  return <div className="absolute h-[57.5px] left-[970px] top-0 w-[80px]" data-name="Column" />;
}

function Column59() {
  return <div className="absolute h-[57.5px] left-[1050px] top-0 w-[80px]" data-name="Column" />;
}

function Column60() {
  return <div className="absolute h-[57.5px] left-[1130px] top-0 w-[80px]" data-name="Column" />;
}

function Column61() {
  return <div className="absolute h-[57.5px] left-[1210px] top-0 w-[80px]" data-name="Column" />;
}

function Column62() {
  return <div className="absolute h-[57.5px] left-[1290px] top-0 w-[80px]" data-name="Column" />;
}

function Column63() {
  return <div className="absolute h-[57.5px] left-[1370px] top-0 w-[80px]" data-name="Column" />;
}

function ColumnGroup3() {
  return (
    <div className="absolute h-[57.5px] left-0 top-0 w-[1450px]" data-name="Column Group">
      <Column48 />
      <Column49 />
      <Column50 />
      <Column51 />
      <Column52 />
      <Column53 />
      <Column54 />
      <Column55 />
      <Column56 />
      <Column57 />
      <Column58 />
      <Column59 />
      <Column60 />
      <Column61 />
      <Column62 />
      <Column63 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M5.25 10.5L8.75 7L5.25 3.5" id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[18px] left-0 text-[#333] text-[12px] top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Suite
      </p>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:Medium_Italic',sans-serif] font-medium italic leading-[15px] left-0 text-[#666] text-[10px] top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        SUI7
      </p>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[33px] relative shrink-0 w-[27.844px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container45 />
        <Container46 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[33px] items-center left-[16px] top-[12px] w-[207.5px]" data-name="Button">
      <Icon5 />
      <Container44 />
    </div>
  );
}

function TableCell62() {
  return (
    <div className="absolute border-0 border-[#e0e0e0] border-solid h-[57.5px] left-0 top-0 w-[240px]" data-name="Table Cell">
      <Button3 />
    </div>
  );
}

function Text101() {
  return (
    <div className="absolute content-stretch flex h-[13px] items-start left-[22.09px] top-[23.5px] w-[45.797px]" data-name="Text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16.5px] relative shrink-0 text-[#666] text-[11px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Inventory
      </p>
    </div>
  );
}

function TableCell63() {
  return (
    <div className="absolute border-[#e0e0e0] border-r border-solid h-[57.5px] left-[240px] top-0 w-[90px]" data-name="Table Cell">
      <Text101 />
    </div>
  );
}

function Text102() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[32.69px] top-[21.5px] w-[14.625px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        19
      </p>
    </div>
  );
}

function TableCell64() {
  return (
    <div className="absolute border-[#e0e0e0] border-r border-solid h-[57.5px] left-[330px] top-0 w-[80px]" data-name="Table Cell">
      <Text102 />
    </div>
  );
}

function Text103() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[32.69px] top-[21.5px] w-[14.625px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        19
      </p>
    </div>
  );
}

function TableCell65() {
  return (
    <div className="absolute border-[#e0e0e0] border-r border-solid h-[57.5px] left-[410px] top-0 w-[80px]" data-name="Table Cell">
      <Text103 />
    </div>
  );
}

function Text104() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[32.69px] top-[21.5px] w-[14.625px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        19
      </p>
    </div>
  );
}

function TableCell66() {
  return (
    <div className="absolute border-[#e0e0e0] border-r border-solid h-[57.5px] left-[490px] top-0 w-[80px]" data-name="Table Cell">
      <Text104 />
    </div>
  );
}

function Text105() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[32.69px] top-[21.5px] w-[14.625px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        19
      </p>
    </div>
  );
}

function TableCell67() {
  return (
    <div className="absolute border-[#e0e0e0] border-r border-solid h-[57.5px] left-[570px] top-0 w-[80px]" data-name="Table Cell">
      <Text105 />
    </div>
  );
}

function Text106() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[32.69px] top-[21.5px] w-[14.625px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        19
      </p>
    </div>
  );
}

function TableCell68() {
  return (
    <div className="absolute border-[#e0e0e0] border-r border-solid h-[57.5px] left-[650px] top-0 w-[80px]" data-name="Table Cell">
      <Text106 />
    </div>
  );
}

function Text107() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[32.69px] top-[21.5px] w-[14.625px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        19
      </p>
    </div>
  );
}

function TableCell69() {
  return (
    <div className="absolute border-[#e0e0e0] border-r border-solid h-[57.5px] left-[730px] top-0 w-[80px]" data-name="Table Cell">
      <Text107 />
    </div>
  );
}

function Text108() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[32.69px] top-[21.5px] w-[14.625px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        19
      </p>
    </div>
  );
}

function TableCell70() {
  return (
    <div className="absolute border-[#e0e0e0] border-r border-solid h-[57.5px] left-[810px] top-0 w-[80px]" data-name="Table Cell">
      <Text108 />
    </div>
  );
}

function Text109() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[32.69px] top-[21.5px] w-[14.625px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        19
      </p>
    </div>
  );
}

function TableCell71() {
  return (
    <div className="absolute border-[#e0e0e0] border-r border-solid h-[57.5px] left-[890px] top-0 w-[80px]" data-name="Table Cell">
      <Text109 />
    </div>
  );
}

function Text110() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[32.69px] top-[21.5px] w-[14.625px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        19
      </p>
    </div>
  );
}

function TableCell72() {
  return (
    <div className="absolute border-[#e0e0e0] border-r border-solid h-[57.5px] left-[970px] top-0 w-[80px]" data-name="Table Cell">
      <Text110 />
    </div>
  );
}

function Text111() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[32.69px] top-[21.5px] w-[14.625px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        19
      </p>
    </div>
  );
}

function TableCell73() {
  return (
    <div className="absolute border-[#e0e0e0] border-r border-solid h-[57.5px] left-[1050px] top-0 w-[80px]" data-name="Table Cell">
      <Text111 />
    </div>
  );
}

function Text112() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[32.69px] top-[21.5px] w-[14.625px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        19
      </p>
    </div>
  );
}

function TableCell74() {
  return (
    <div className="absolute border-[#e0e0e0] border-r border-solid h-[57.5px] left-[1130px] top-0 w-[80px]" data-name="Table Cell">
      <Text112 />
    </div>
  );
}

function Text113() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[32.69px] top-[21.5px] w-[14.625px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        19
      </p>
    </div>
  );
}

function TableCell75() {
  return (
    <div className="absolute border-[#e0e0e0] border-r border-solid h-[57.5px] left-[1210px] top-0 w-[80px]" data-name="Table Cell">
      <Text113 />
    </div>
  );
}

function Text114() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[32.69px] top-[21.5px] w-[14.625px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        19
      </p>
    </div>
  );
}

function TableCell76() {
  return (
    <div className="absolute border-[#e0e0e0] border-r border-solid h-[57.5px] left-[1290px] top-0 w-[80px]" data-name="Table Cell">
      <Text114 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute bg-[#dde9f7] border-[#e0e0e0] border-b border-solid h-[57.5px] left-0 top-0 w-[1450px]" data-name="Table Row">
      <TableCell62 />
      <TableCell63 />
      <TableCell64 />
      <TableCell65 />
      <TableCell66 />
      <TableCell67 />
      <TableCell68 />
      <TableCell69 />
      <TableCell70 />
      <TableCell71 />
      <TableCell72 />
      <TableCell73 />
      <TableCell74 />
      <TableCell75 />
      <TableCell76 />
    </div>
  );
}

function TableBody2() {
  return (
    <div className="absolute h-[57.5px] left-0 top-0 w-[1450px]" data-name="Table Body">
      <TableRow5 />
    </div>
  );
}

function Table3() {
  return (
    <div className="h-[58px] relative shrink-0 w-full" data-name="Table">
      <ColumnGroup3 />
      <TableBody2 />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[58px] items-start left-0 pr-[-110px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] top-[322px] w-[1340px]" data-name="Container">
      <Table3 />
    </div>
  );
}

function Column64() {
  return <div className="absolute h-[57px] left-0 top-0 w-[240px]" data-name="Column" />;
}

function Column65() {
  return <div className="absolute h-[57px] left-[240px] top-0 w-[90px]" data-name="Column" />;
}

function Column66() {
  return <div className="absolute h-[57px] left-[330px] top-0 w-[80px]" data-name="Column" />;
}

function Column67() {
  return <div className="absolute h-[57px] left-[410px] top-0 w-[80px]" data-name="Column" />;
}

function Column68() {
  return <div className="absolute h-[57px] left-[490px] top-0 w-[80px]" data-name="Column" />;
}

function Column69() {
  return <div className="absolute h-[57px] left-[570px] top-0 w-[80px]" data-name="Column" />;
}

function Column70() {
  return <div className="absolute h-[57px] left-[650px] top-0 w-[80px]" data-name="Column" />;
}

function Column71() {
  return <div className="absolute h-[57px] left-[730px] top-0 w-[80px]" data-name="Column" />;
}

function Column72() {
  return <div className="absolute h-[57px] left-[810px] top-0 w-[80px]" data-name="Column" />;
}

function Column73() {
  return <div className="absolute h-[57px] left-[890px] top-0 w-[80px]" data-name="Column" />;
}

function Column74() {
  return <div className="absolute h-[57px] left-[970px] top-0 w-[80px]" data-name="Column" />;
}

function Column75() {
  return <div className="absolute h-[57px] left-[1050px] top-0 w-[80px]" data-name="Column" />;
}

function Column76() {
  return <div className="absolute h-[57px] left-[1130px] top-0 w-[80px]" data-name="Column" />;
}

function Column77() {
  return <div className="absolute h-[57px] left-[1210px] top-0 w-[80px]" data-name="Column" />;
}

function Column78() {
  return <div className="absolute h-[57px] left-[1290px] top-0 w-[80px]" data-name="Column" />;
}

function Column79() {
  return <div className="absolute h-[57px] left-[1370px] top-0 w-[80px]" data-name="Column" />;
}

function ColumnGroup4() {
  return (
    <div className="absolute h-[57px] left-0 top-0 w-[1450px]" data-name="Column Group">
      <Column64 />
      <Column65 />
      <Column66 />
      <Column67 />
      <Column68 />
      <Column69 />
      <Column70 />
      <Column71 />
      <Column72 />
      <Column73 />
      <Column74 />
      <Column75 />
      <Column76 />
      <Column77 />
      <Column78 />
      <Column79 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #666666)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:SemiBold',sans-serif] font-semibold leading-[18px] left-0 text-[#333] text-[12px] top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Deluxe Room
      </p>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Roboto:Medium_Italic',sans-serif] font-medium italic leading-[15px] left-0 text-[#999] text-[10px] top-0" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        DLX
      </p>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[33px] relative shrink-0 w-[71.281px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container49 />
        <Container50 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[33px] items-center left-[16px] top-[12px] w-[207.5px]" data-name="Button">
      <Icon6 />
      <Container48 />
    </div>
  );
}

function TableCell77() {
  return (
    <div className="absolute bg-white border-0 border-[#e0e0e0] border-solid h-[57px] left-0 top-0 w-[240px]" data-name="Table Cell">
      <Button4 />
    </div>
  );
}

function Text115() {
  return (
    <div className="absolute content-stretch flex h-[13px] items-start left-[22.09px] top-[23.5px] w-[45.797px]" data-name="Text">
      <p className="font-['Roboto:Medium',sans-serif] font-medium leading-[16.5px] relative shrink-0 text-[#666] text-[11px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        Inventory
      </p>
    </div>
  );
}

function TableCell78() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[57px] left-[240px] top-0 w-[90px]" data-name="Table Cell">
      <Text115 />
    </div>
  );
}

function Text116() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[36.34px] top-[21.5px] w-[7.313px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        5
      </p>
    </div>
  );
}

function Container51() {
  return <div className="absolute bg-[#4ecdc4] h-[3px] left-[0.5px] top-[54px] w-[79px]" data-name="Container" />;
}

function TableCell79() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[57px] left-[330px] top-0 w-[80px]" data-name="Table Cell">
      <Text116 />
      <Container51 />
    </div>
  );
}

function Text117() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[36.34px] top-[21.5px] w-[7.313px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        5
      </p>
    </div>
  );
}

function Container52() {
  return <div className="absolute bg-[#4ecdc4] h-[3px] left-[0.5px] top-[54px] w-[79px]" data-name="Container" />;
}

function TableCell80() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[57px] left-[410px] top-0 w-[80px]" data-name="Table Cell">
      <Text117 />
      <Container52 />
    </div>
  );
}

function Text118() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[36.34px] top-[21.5px] w-[7.313px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        5
      </p>
    </div>
  );
}

function Container53() {
  return <div className="absolute bg-[#4ecdc4] h-[3px] left-[0.5px] top-[54px] w-[79px]" data-name="Container" />;
}

function TableCell81() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[57px] left-[490px] top-0 w-[80px]" data-name="Table Cell">
      <Text118 />
      <Container53 />
    </div>
  );
}

function Text119() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[36.34px] top-[21.5px] w-[7.313px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        5
      </p>
    </div>
  );
}

function Container54() {
  return <div className="absolute bg-[#4ecdc4] h-[3px] left-[0.5px] top-[54px] w-[79px]" data-name="Container" />;
}

function TableCell82() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[57px] left-[570px] top-0 w-[80px]" data-name="Table Cell">
      <Text119 />
      <Container54 />
    </div>
  );
}

function Text120() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[36.34px] top-[21.5px] w-[7.313px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        5
      </p>
    </div>
  );
}

function Container55() {
  return <div className="absolute bg-[#4ecdc4] h-[3px] left-[0.5px] top-[54px] w-[79px]" data-name="Container" />;
}

function TableCell83() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[57px] left-[650px] top-0 w-[80px]" data-name="Table Cell">
      <Text120 />
      <Container55 />
    </div>
  );
}

function Text121() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[36.34px] top-[21.5px] w-[7.313px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        5
      </p>
    </div>
  );
}

function Container56() {
  return <div className="absolute bg-[#4ecdc4] h-[3px] left-[0.5px] top-[54px] w-[79px]" data-name="Container" />;
}

function TableCell84() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[57px] left-[730px] top-0 w-[80px]" data-name="Table Cell">
      <Text121 />
      <Container56 />
    </div>
  );
}

function Text122() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[36.34px] top-[21.5px] w-[7.313px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        5
      </p>
    </div>
  );
}

function Container57() {
  return <div className="absolute bg-[#4ecdc4] h-[3px] left-[0.5px] top-[54px] w-[79px]" data-name="Container" />;
}

function TableCell85() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[57px] left-[810px] top-0 w-[80px]" data-name="Table Cell">
      <Text122 />
      <Container57 />
    </div>
  );
}

function Text123() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[36.34px] top-[21.5px] w-[7.313px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        5
      </p>
    </div>
  );
}

function Container58() {
  return <div className="absolute bg-[#4ecdc4] h-[3px] left-[0.5px] top-[54px] w-[79px]" data-name="Container" />;
}

function TableCell86() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[57px] left-[890px] top-0 w-[80px]" data-name="Table Cell">
      <Text123 />
      <Container58 />
    </div>
  );
}

function Text124() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[36.34px] top-[21.5px] w-[7.313px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        5
      </p>
    </div>
  );
}

function Container59() {
  return <div className="absolute bg-[#4ecdc4] h-[3px] left-[0.5px] top-[54px] w-[79px]" data-name="Container" />;
}

function TableCell87() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[57px] left-[970px] top-0 w-[80px]" data-name="Table Cell">
      <Text124 />
      <Container59 />
    </div>
  );
}

function Text125() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[36.34px] top-[21.5px] w-[7.313px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        5
      </p>
    </div>
  );
}

function Container60() {
  return <div className="absolute bg-[#4ecdc4] h-[3px] left-[0.5px] top-[54px] w-[79px]" data-name="Container" />;
}

function TableCell88() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[57px] left-[1050px] top-0 w-[80px]" data-name="Table Cell">
      <Text125 />
      <Container60 />
    </div>
  );
}

function Text126() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[36.34px] top-[21.5px] w-[7.313px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        5
      </p>
    </div>
  );
}

function Container61() {
  return <div className="absolute bg-[#4ecdc4] h-[3px] left-[0.5px] top-[54px] w-[79px]" data-name="Container" />;
}

function TableCell89() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[57px] left-[1130px] top-0 w-[80px]" data-name="Table Cell">
      <Text126 />
      <Container61 />
    </div>
  );
}

function Text127() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[36.34px] top-[21.5px] w-[7.313px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        5
      </p>
    </div>
  );
}

function Container62() {
  return <div className="absolute bg-[#4ecdc4] h-[3px] left-[0.5px] top-[54px] w-[79px]" data-name="Container" />;
}

function TableCell90() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[57px] left-[1210px] top-0 w-[80px]" data-name="Table Cell">
      <Text127 />
      <Container62 />
    </div>
  );
}

function Text128() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[36.34px] top-[21.5px] w-[7.313px]" data-name="Text">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[19.5px] relative shrink-0 text-[#333] text-[13px] text-center" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        5
      </p>
    </div>
  );
}

function Container63() {
  return <div className="absolute bg-[#4ecdc4] h-[3px] left-[0.5px] top-[54px] w-[79px]" data-name="Container" />;
}

function TableCell91() {
  return (
    <div className="absolute bg-white border-[#e0e0e0] border-r border-solid h-[57px] left-[1290px] top-0 w-[80px]" data-name="Table Cell">
      <Text128 />
      <Container63 />
    </div>
  );
}

function TableRow6() {
  return (
    <div className="absolute h-[57px] left-0 top-0 w-[1450px]" data-name="Table Row">
      <TableCell77 />
      <TableCell78 />
      <TableCell79 />
      <TableCell80 />
      <TableCell81 />
      <TableCell82 />
      <TableCell83 />
      <TableCell84 />
      <TableCell85 />
      <TableCell86 />
      <TableCell87 />
      <TableCell88 />
      <TableCell89 />
      <TableCell90 />
      <TableCell91 />
    </div>
  );
}

function TableBody3() {
  return (
    <div className="absolute h-[57px] left-0 top-0 w-[1450px]" data-name="Table Body">
      <TableRow6 />
    </div>
  );
}

function Table4() {
  return (
    <div className="h-[57px] relative shrink-0 w-full" data-name="Table">
      <ColumnGroup4 />
      <TableBody3 />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[57px] items-start left-0 pr-[-110px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)] top-[392px] w-[1340px]" data-name="Container">
      <Table4 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[461px] left-[-1.5px] overflow-clip top-[-0.5px] w-[1340px]" data-name="Container">
      <Container4 />
      <Container19 />
      <Container20 />
      <Container43 />
      <Container47 />
    </div>
  );
}

function AriCollapseView() {
  return (
    <div className="absolute h-[474px] left-[50px] top-[273px] w-[1340px]" data-name="ARI Collapse View">
      <Container3 />
    </div>
  );
}

function IconLock1() {
  return (
    <div className="absolute left-[calc(20%+154px)] size-[12px] top-[405px]" data-name="icon/lock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="icon/lock">
          <path d={svgPaths.p2b283480} id="Vector" stroke="var(--stroke-0, #FF5E01)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pbc77700} id="Vector_2" stroke="var(--stroke-0, #FF5E01)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function IconZap1() {
  return (
    <div className="absolute left-[calc(20%+135px)] size-[14px] top-[404px]" data-name="icon/zap">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="icon/zap">
          <path d={svgPaths.p27661e00} id="Vector" stroke="var(--stroke-0, #D500FF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function IconZap2() {
  return (
    <div className="absolute left-[calc(20%+232px)] size-[14px] top-[404px]" data-name="icon/zap">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="icon/zap">
          <path d={svgPaths.p27661e00} id="Vector" stroke="var(--stroke-0, #D500FF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function IconZap3() {
  return (
    <div className="absolute left-[calc(40%+24px)] size-[14px] top-[404px]" data-name="icon/zap">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="icon/zap">
          <path d={svgPaths.p27661e00} id="Vector" stroke="var(--stroke-0, #D500FF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#f1f2f8] relative size-full" data-name="Home">
      <Links />
      <HeaderContainer />
      <FilterSelection />
      <SubHeader />
      <AriCollapseView />
      <IconLock1 />
      <IconZap1 />
      <IconZap2 />
      <IconZap3 />
    </div>
  );
}