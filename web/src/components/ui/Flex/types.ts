import type { ReactNode, RefObject } from "react";
import type {
    FLEX_DEFAULT_ELEMENT,
    FLEX_ELEMENT,
} from "@/components/ui/Flex/constants.ts";
import type {
    AlignItems,
    AlignSelf,
    Display,
    FlexDirection,
    FlexGrow,
    FlexShrink,
    FlexWrap,
    Gap,
    JustifyContent,
    Overflow,
    Padding,
} from "@/config/design-tokens.ts";
import type { Polymorphic } from "@/helpers/polymorphic";

export type FlexElement = (typeof FLEX_ELEMENT)[number];

export type FlexOwnProps = {
    ref?: RefObject<HTMLDivElement | null>;
    to?: string;
    overflow?: Overflow;
    display?: Display;
    smDisplay?: Display;
    mdDisplay?: Display;
    lgDisplay?: Display;
    xlDisplay?: Display;
    xxlDisplay?: Display;
    flexDirection?: FlexDirection;
    smFlexDirection?: FlexDirection;
    mdFlexDirection?: FlexDirection;
    lgFlexDirection?: FlexDirection;
    xlFlexDirection?: FlexDirection;
    xxlFlexDirection?: FlexDirection;
    flexWrap?: FlexWrap;
    flexGrow?: FlexGrow;
    smFlexGrow?: FlexGrow;
    mdFlexGrow?: FlexGrow;
    lgFlexGrow?: FlexGrow;
    xlFlexGrow?: FlexGrow;
    xxlFlexGrow?: FlexGrow;
    flexShrink?: FlexShrink;
    alignItems?: AlignItems;
    smAlignItems?: AlignItems;
    mdAlignItems?: AlignItems;
    lgAlignItems?: AlignItems;
    xlAlignItems?: AlignItems;
    xxlAlignItems?: AlignItems;
    alignSelf?: AlignSelf;
    justifyContent?: JustifyContent;
    gap?: Gap;
    smGap?: Gap;
    mdGap?: Gap;
    lgGap?: Gap;
    xlGap?: Gap;
    xxlGap?: Gap;
    padding?: Padding;
    smPadding?: Padding;
    mdPadding?: Padding;
    lgPadding?: Padding;
    xlPadding?: Padding;
    xxlPadding?: Padding;
    fullWidth?: boolean;
    smFullWidth?: boolean;
    mdFullWidth?: boolean;
    lgFullWidth?: boolean;
    xlFullWidth?: boolean;
    xxlFullWidth?: boolean;
    truncate?: boolean;
    className?: string;
    children?: ReactNode;
};

export type FlexProps<E extends FlexElement = typeof FLEX_DEFAULT_ELEMENT> =
    Polymorphic<E, FlexOwnProps>;
