export const TRANSITION = "transition duration-300 ease-in-out";

export const CONTENT_COLOR = {
    none: "",
    inherit: "text-inherit",
    black: "text-black",
    gray: "text-gray",
    light: "text-light",
    steel: "text-steel",
    blue: "text-blue",
    green: "text-green",
    yellow: "text-yellow",
    red: "text-red",
    orange: "text-orange-500",
    purple: "text-purple-500",
    violet: "text-violet-500",
    cyan: "text-cyan-500",
    white: "text-white",
    glass: "text-white/60",
    mist: "text-white/50",
} as const;

export const CONTENT_COLOR_HOVER = {
    none: "",
    inherit: "",
    black: "hover:text-blue",
    gray: "hover:text-blue",
    light: "hover:text-blue",
    steel: "hover:text-blue",
    blue: "hover:text-blue-400",
    green: "hover:text-green-600",
    yellow: "hover:text-yellow-600",
    red: "hover:text-red-800",
    orange: "hover:text-orange-600",
    purple: "hover:text-purple-600",
    violet: "hover:text-violet-600",
    cyan: "hover:text-cyan-600",
    white: "hover:text-white/70",
    glass: "hover:text-white",
    mist: "hover:text-white",
} as const;

export const SURFACE_COLOR = {
    none: "",
    black: "bg-black",
    gray: "bg-gray",
    light: "bg-light",
    steel: "bg-steel",
    blue: "bg-blue",
    green: "bg-green",
    yellow: "bg-yellow",
    red: "bg-red",
    orange: "bg-orange-500",
    purple: "bg-purple",
    violet: "bg-violet-700",
    cyan: "bg-cyan-500",
    white: "bg-white",
    glass: "bg-white/60 backdrop-blur-md",
    mist: "bg-[linear-gradient(180deg,rgba(255,255,255,0.8)_0%,rgba(249,249,249,0.56)_50%,rgba(239,239,239,0.24)_100%)]",
} as const;

export const SURFACE_COLOR_HOVER = {
    none: "",
    black: "hover:bg-gray",
    gray: "hover:bg-zinc-600",
    light: "hover:bg-light-hover",
    steel: "hover:bg-gray-400/60",
    blue: "hover:bg-blue-600",
    green: "hover:bg-green-600",
    yellow: "hover:bg-yellow-500",
    red: "hover:bg-red-500",
    orange: "hover:bg-orange-400",
    purple: "hover:bg-fuchsia-600",
    violet: "hover:bg-violet-600",
    cyan: "hover:bg-cyan-400",
    white: "hover:bg-blue/15",
    glass: "hover:bg-blue/15",
    mist: "hover:bg-blue/15",
} as const;

export const GHOST_COLOR_HOVER = {
    none: "",
    black: "hover:bg-gray/7",
    gray: "hover:bg-zinc-600/7",
    light: "hover:bg-zinc-500/7",
    steel: "hover:bg-zinc-500/7",
    blue: "hover:bg-blue-600/7",
    green: "hover:bg-green-600/7",
    yellow: "hover:bg-yellow-500/7",
    red: "hover:bg-red-500/7",
    orange: "hover:bg-orange-500/7",
    purple: "hover:bg-purple-500/7",
    violet: "hover:bg-violet-500/7",
    cyan: "hover:bg-cyan-500/7",
    white: "hover:bg-zinc-100/7",
    glass: "hover:bg-zinc-100/7",
    mist: "hover:bg-zinc-100/7",
} as const;

export const FOREGROUND_COLOR = {
    none: "",
    black: "text-white",
    gray: "text-white",
    light: "text-white",
    steel: "text-black",
    blue: "text-white",
    green: "text-white",
    yellow: "text-white",
    red: "text-white",
    orange: "text-white",
    purple: "text-white",
    violet: "text-white",
    cyan: "text-white",
    white: "text-gray",
    glass: "text-gray",
    mist: "text-black",
} as const;

export const OUTLINE_COLOR = {
    none: "",
    black: "border border-black",
    gray: "border border-2 border-gray",
    light: "border border-2 border-light",
    steel: "border border-2 border-steel",
    blue: "border border-2 border-blue",
    green: "border border-2 border-green",
    yellow: "border border-2 border-yellow",
    red: "border border-2 border-red",
    orange: "border border-2 border-orange",
    purple: "border border-2 border-purple",
    violet: "border border-2 border-violet",
    cyan: "border border-2 border-cyan",
    white: "border border-2 border-white",
    glass: "border border-2 border-white",
    mist: "border border-2 border-white",
} as const;

export const SHADOW_COLOR = {
    none: "",
    black: "shadow-[0_4px_16px_rgba(0,0,0,0.3)]",
    gray: "",
    light: "",
    steel: "",
    blue: "shadow-[0_4px_16px_rgba(50,98,222,0.3)]",
    green: "shadow-[0_4px_16px_rgba(59,187,38,0.3)]",
    yellow: "shadow-[0_4px_16px_rgba(240,202,0,0.3)]",
    red: "shadow-[0_4px_16px_rgba(235,47,47,0.3)]",
    orange: "shadow-[0_4px_16px_rgba(255,105,0,0.3)]",
    purple: "shadow-[0_4px_16px_rgba(173,70,255,0.3)]",
    violet: "shadow-[0_4px_16px_rgba(173,70,255,0.3)]",
    cyan: "shadow-[0_4px_16px_rgba(0,184,219,0.3)]",
    white: "",
    glass: "",
    mist: "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15),0_4px_30px_0_rgba(0,0,0,0.06)]",
} as const;

export const SHADOW_SM_COLOR = {
    none: "",
    black: "shadow-[0_0_10px_rgba(0,0,0,0.3)]",
    gray: "",
    light: "",
    steel: "",
    blue: "shadow-[0_0_10px_rgba(50,98,222,0.3)]",
    green: "shadow-[0_0_10px_rgba(59,187,38,0.3)]",
    yellow: "shadow-[0_0_10px_rgba(240,202,0,0.3)]",
    red: "shadow-[0_0_10px_rgba(235,47,47,0.3)]",
    orange: "shadow-[0_0_10px_rgba(255,105,0,0.3)]",
    purple: "shadow-[0_0_10px_rgba(173,70,255,0.3)]",
    violet: "shadow-[0_0_10px_rgba(173,70,255,0.3)]",
    cyan: "shadow-[0_0_10px_rgba(0,184,219,0.3)]",
    white: "",
    glass: "",
    mist: "",
} as const;

export const FONT_SIZE = {
    "2xs": "text-2xs",
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-xl md:text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
    "8xl": "text-8xl",
    "9xl": "text-9xl",
} as const;

export const FONT_WEIGHT = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
} as const;

export const OVERFLOW = {
    auto: "overflow-auto",
    hidden: "overflow-hidden",
    visible: "overflow-visible",
    "y-scroll": "overflow-y-scroll",
} as const;

export const DISPLAY = {
    inline: "inline",
    block: "block",
    "inline-block": "inline-block",
    flex: "flex",
    "inline-flex": "inline-flex",
    grid: "grid",
    hidden: "hidden",
    "sr-only": "sr-only",
} as const;

export const SM_DISPLAY = {
    inline: "sm:inline",
    block: "sm:block",
    "inline-block": "sm:inline-block",
    flex: "sm:flex",
    "inline-flex": "sm:inline-flex",
    grid: "sm:grid",
    hidden: "sm:hidden",
    "sr-only": "sm:sr-only",
} as const;

export const MD_DISPLAY = {
    inline: "md:inline",
    block: "md:block",
    "inline-block": "md:inline-block",
    flex: "md:flex",
    "inline-flex": "md:inline-flex",
    grid: "md:grid",
    hidden: "md:hidden",
    "sr-only": "md:sr-only",
} as const;

export const LG_DISPLAY = {
    inline: "lg:inline",
    block: "lg:block",
    "inline-block": "lg:inline-block",
    flex: "lg:flex",
    "inline-flex": "lg:inline-flex",
    grid: "lg:grid",
    hidden: "lg:hidden",
    "sr-only": "lg:sr-only",
} as const;

export const XL_DISPLAY = {
    inline: "xl:inline",
    block: "xl:block",
    "inline-block": "xl:inline-block",
    flex: "xl:flex",
    "inline-flex": "xl:inline-flex",
    grid: "xl:grid",
    hidden: "xl:hidden",
    "sr-only": "xl:sr-only",
} as const;

export const XXL_DISPLAY = {
    inline: "2xl:inline",
    block: "2xl:block",
    "inline-block": "2xl:inline-block",
    flex: "2xl:flex",
    "inline-flex": "2xl:inline-flex",
    grid: "2xl:grid",
    hidden: "2xl:hidden",
    "sr-only": "2xl:sr-only",
} as const;

export const FLEX_DIRECTION = {
    row: "flex-row",
    "row-reverse": "flex-row-reverse",
    col: "flex-col",
    "col-reverse": "flex-col-reverse",
} as const;

export const SM_FLEX_DIRECTION = {
    row: "sm:flex-row",
    "row-reverse": "sm:flex-row-reverse",
    col: "sm:flex-col",
    "col-reverse": "sm:flex-col-reverse",
} as const;

export const MD_FLEX_DIRECTION = {
    row: "md:flex-row",
    "row-reverse": "md:flex-row-reverse",
    col: "md:flex-col",
    "col-reverse": "md:flex-col-reverse",
} as const;

export const LG_FLEX_DIRECTION = {
    row: "lg:flex-row",
    "row-reverse": "lg:flex-row-reverse",
    col: "lg:flex-col",
    "col-reverse": "lg:flex-col-reverse",
} as const;

export const XL_FLEX_DIRECTION = {
    row: "xl:flex-row",
    "row-reverse": "xl:flex-row-reverse",
    col: "xl:flex-col",
    "col-reverse": "xl:flex-col-reverse",
} as const;

export const XXL_FLEX_DIRECTION = {
    row: "2xl:flex-row",
    "row-reverse": "2xl:flex-row-reverse",
    col: "2xl:flex-col",
    "col-reverse": "2xl:flex-col-reverse",
} as const;

export const FLEX_WRAP = {
    nowrap: "flex-nowrap",
    wrap: "flex-wrap",
    "wrap-reverse": "flex-wrap-reverse",
} as const;

export const FLEX_GROW = {
    1: "grow",
    0: "grow-0",
} as const;

export const SM_FLEX_GROW = {
    1: "sm:grow",
    0: "sm:grow-0",
} as const;

export const MD_FLEX_GROW = {
    1: "md:grow",
    0: "md:grow-0",
} as const;

export const LG_FLEX_GROW = {
    1: "lg:grow",
    0: "lg:grow-0",
} as const;

export const XL_FLEX_GROW = {
    1: "xl:grow",
    0: "xl:grow-0",
} as const;

export const XXL_FLEX_GROW = {
    1: "2xl:grow",
    0: "2xl:grow-0",
} as const;

export const FLEX_SHRINK = {
    1: "shrink",
    0: "shrink-0",
} as const;

export const ALIGN_ITEMS = {
    start: "items-start",
    end: "items-end",
    center: "items-center",
    stretch: "items-stretch",
} as const;

export const SM_ALIGN_ITEMS = {
    start: "sm:items-start",
    end: "sm:items-end",
    center: "sm:items-center",
    stretch: "sm:items-stretch",
} as const;

export const MD_ALIGN_ITEMS = {
    start: "md:items-start",
    end: "md:items-end",
    center: "md:items-center",
    stretch: "md:items-stretch",
} as const;

export const LG_ALIGN_ITEMS = {
    start: "lg:items-start",
    end: "lg:items-end",
    center: "lg:items-center",
    stretch: "lg:items-stretch",
} as const;

export const XL_ALIGN_ITEMS = {
    start: "xl:items-start",
    end: "xl:items-end",
    center: "xl:items-center",
    stretch: "xl:items-stretch",
} as const;

export const XXL_ALIGN_ITEMS = {
    start: "2xl:items-start",
    end: "2xl:items-end",
    center: "2xl:items-center",
    stretch: "2xl:items-stretch",
} as const;

export const ALIGN_SELF = {
    start: "self-start",
    end: "self-end",
    center: "self-center",
    stretch: "self-stretch",
} as const;

export const JUSTIFY_CONTENT = {
    start: "justify-start",
    end: "justify-end",
    center: "justify-center",
    between: "justify-between",
} as const;

export const GAP = {
    0: "gap-0",
    0.5: "gap-0.5",
    1: "gap-1",
    2: "gap-2",
    3: "gap-3",
    4: "gap-4",
    5: "gap-5",
    6: "gap-6",
    8: "gap-8",
    9: "gap-9",
    12: "gap-12",
} as const;

export const SM_GAP = {
    0: "sm:gap-0",
    0.5: "gap-0.5",
    1: "sm:gap-1",
    2: "sm:gap-2",
    3: "sm:gap-3",
    4: "sm:gap-4",
    5: "sm:gap-5",
    6: "sm:gap-6",
    8: "sm:gap-8",
    9: "sm:gap-9",
    12: "sm:gap-12",
} as const;

export const MD_GAP = {
    0: "md:gap-0",
    0.5: "gap-0.5",
    1: "md:gap-1",
    2: "md:gap-2",
    3: "md:gap-3",
    4: "md:gap-4",
    5: "md:gap-5",
    6: "md:gap-6",
    8: "md:gap-8",
    9: "md:gap-9",
    12: "md:gap-12",
} as const;

export const LG_GAP = {
    0: "lg:gap-0",
    0.5: "gap-0.5",
    1: "lg:gap-1",
    2: "lg:gap-2",
    3: "lg:gap-3",
    4: "lg:gap-4",
    5: "lg:gap-5",
    6: "lg:gap-6",
    8: "lg:gap-8",
    9: "lg:gap-9",
    12: "lg:gap-12",
} as const;

export const XL_GAP = {
    0: "xl:gap-0",
    0.5: "gap-0.5",
    1: "xl:gap-1",
    2: "xl:gap-2",
    3: "xl:gap-3",
    4: "xl:gap-4",
    5: "xl:gap-5",
    6: "xl:gap-6",
    8: "xl:gap-8",
    9: "xl:gap-9",
    12: "xl:gap-12",
} as const;

export const XXL_GAP = {
    0: "2xl:gap-0",
    0.5: "gap-0.5",
    1: "2xl:gap-1",
    2: "2xl:gap-2",
    3: "2xl:gap-3",
    4: "2xl:gap-4",
    5: "2xl:gap-5",
    6: "2xl:gap-6",
    8: "2xl:gap-8",
    9: "2xl:gap-9",
    12: "2xl:gap-12",
} as const;

export const PADDING = {
    0: "p-0",
    1: "p-1",
    2: "p-2",
    3: "p-3",
    4: "p-4",
    5: "p-5",
    6: "p-6",
    8: "p-8",
    12: "p-12",
} as const;

export const SM_PADDING = {
    0: "sm:p-0",
    1: "sm:p-1",
    2: "sm:p-2",
    3: "sm:p-3",
    4: "sm:p-4",
    5: "sm:p-5",
    6: "sm:p-6",
    8: "sm:p-8",
    12: "sm:p-12",
} as const;

export const MD_PADDING = {
    0: "md:p-0",
    1: "md:p-1",
    2: "md:p-2",
    3: "md:p-3",
    4: "md:p-4",
    5: "md:p-5",
    6: "md:p-6",
    8: "md:p-8",
    12: "md:p-12",
} as const;

export const LG_PADDING = {
    0: "lg:p-0",
    1: "lg:p-1",
    2: "lg:p-2",
    3: "lg:p-3",
    4: "lg:p-4",
    5: "lg:p-5",
    6: "lg:p-6",
    8: "lg:p-8",
    12: "lg:p-12",
} as const;

export const XL_PADDING = {
    0: "xl:p-0",
    1: "xl:p-1",
    2: "xl:p-2",
    3: "xl:p-3",
    4: "xl:p-4",
    5: "xl:p-5",
    6: "xl:p-6",
    8: "xl:p-8",
    12: "xl:p-12",
} as const;

export const XXL_PADDING = {
    0: "2xl:p-0",
    1: "2xl:p-1",
    2: "2xl:p-2",
    3: "2xl:p-3",
    4: "2xl:p-4",
    5: "2xl:p-5",
    6: "2xl:p-6",
    8: "2xl:p-8",
    12: "2xl:p-12",
} as const;

export const TEXT_ALIGN = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
} as const;

export const CONTROL_SIZE = {
    xs: "min-w-8 h-8 py-0 px-2",
    sm: "min-w-10 md:min-w-8 h-10",
    md: "min-w-10 h-10 py-1 px-5",
    lg: "min-w-12 h-12 py-3 px-5",
    xl: "min-w-16 h-16 py-4 px-5",
} as const;

export const BORDER_RADIUS = {
    none: "rounded-none",
    xs: "rounded-xs",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
    "4xl": "rounded-3xl md:rounded-4xl",
    full: "rounded-full",
} as const;

export const BORDER_TOP_RADIUS = {
    none: "rounded-t-none",
    xs: "rounded-t-xs",
    sm: "rounded-t-sm",
    md: "rounded-t-md",
    lg: "rounded-t-lg",
    xl: "rounded-t-xl",
    "2xl": "rounded-t-2xl",
    "3xl": "rounded-t-3xl",
    "4xl": "rounded-t-3xl md:rounded-t-4xl",
    full: "rounded-t-full",
} as const;

export const BORDER_RIGHT_RADIUS = {
    none: "rounded-r-none",
    xs: "rounded-r-xs",
    sm: "rounded-r-sm",
    md: "rounded-r-md",
    lg: "rounded-r-lg",
    xl: "rounded-r-xl",
    "2xl": "rounded-r-2xl",
    "3xl": "rounded-r-3xl",
    "4xl": "rounded-r-3xl rounded-r-4xl",
    full: "rounded-r-full",
} as const;

export const BORDER_BOTTOM_RADIUS = {
    none: "rounded-b-none",
    xs: "rounded-b-xs",
    sm: "rounded-b-sm",
    md: "rounded-b-md",
    lg: "rounded-b-lg",
    xl: "rounded-b-xl",
    "2xl": "rounded-b-2xl",
    "3xl": "rounded-b-3xl",
    "4xl": "rounded-b-3xl md:rounded-b-4xl",
    full: "rounded-b-full",
} as const;

export const BORDER_LEFT_RADIUS = {
    none: "rounded-l-none",
    xs: "rounded-l-xs",
    sm: "rounded-l-sm",
    md: "rounded-l-md",
    lg: "rounded-l-lg",
    xl: "rounded-l-xl",
    "2xl": "rounded-l-2xl",
    "3xl": "rounded-l-3xl",
    "4xl": "rounded-l-3xl md:rounded-l-4xl",
    full: "rounded-l-full",
} as const;

export const BORDER_TOP_LEFT_RADIUS = {
    none: "rounded-tl-none",
    xs: "rounded-tl-xs",
    sm: "rounded-tl-sm",
    md: "rounded-tl-md",
    lg: "rounded-tl-lg",
    xl: "rounded-tl-xl",
    "2xl": "rounded-tl-2xl",
    "3xl": "rounded-tl-3xl",
    "4xl": "rounded-tl-3xl md:rounded-tl-4xl",
    full: "rounded-tl-full",
} as const;

export const BORDER_TOP_RIGHT_RADIUS = {
    none: "rounded-tr-none",
    xs: "rounded-tr-xs",
    sm: "rounded-tr-sm",
    md: "rounded-tr-md",
    lg: "rounded-tr-lg",
    xl: "rounded-tr-xl",
    "2xl": "rounded-tr-2xl",
    "3xl": "rounded-tr-3xl",
    "4xl": "rounded-tr-3xl md:rounded-tr-4xl",
    full: "rounded-tr-full",
} as const;

export const BORDER_BOTTOM_RIGHT_RADIUS = {
    none: "rounded-br-none",
    xs: "rounded-br-xs",
    sm: "rounded-br-sm",
    md: "rounded-br-md",
    lg: "rounded-br-lg",
    xl: "rounded-br-xl",
    "2xl": "rounded-br-2xl",
    "3xl": "rounded-br-3xl",
    "4xl": "rounded-br-3xl md:rounded-br-4xl",
    full: "rounded-br-full",
} as const;

export const BORDER_BOTTOM_LEFT_RADIUS = {
    none: "rounded-bl-none",
    xs: "rounded-bl-xs",
    sm: "rounded-bl-sm",
    md: "rounded-bl-md",
    lg: "rounded-bl-lg",
    xl: "rounded-bl-xl",
    "2xl": "rounded-bl-2xl",
    "3xl": "rounded-bl-3xl",
    "4xl": "rounded-bl-3xl md:rounded-bl-4xl",
    full: "rounded-bl-full",
} as const;

export type Color = keyof typeof CONTENT_COLOR;

export type FontSize = keyof typeof FONT_SIZE;

export type FontWeight = keyof typeof FONT_WEIGHT;

export type Overflow = keyof typeof OVERFLOW;

export type Display = keyof typeof DISPLAY;

export type FlexDirection = keyof typeof FLEX_DIRECTION;

export type FlexWrap = keyof typeof FLEX_WRAP;

export type FlexGrow = keyof typeof FLEX_GROW;

export type FlexShrink = keyof typeof FLEX_SHRINK;

export type AlignItems = keyof typeof ALIGN_ITEMS;

export type AlignSelf = keyof typeof ALIGN_SELF;

export type JustifyContent = keyof typeof JUSTIFY_CONTENT;

export type Gap = keyof typeof GAP;

export type Padding = keyof typeof PADDING;

export type TextAlign = keyof typeof TEXT_ALIGN;

export type ControlSize = keyof typeof CONTROL_SIZE;

export type BorderRadius = keyof typeof BORDER_RADIUS;
