import type { ReactNode, Ref } from "react";
import type {
    BUTTON_DEFAULT_ELEMENT,
    BUTTON_ELEMENT,
    BUTTON_VARIANT,
} from "@/components/ui/Button/constants.ts";
import type {
    BorderRadius,
    Color,
    ControlSize,
    Display,
    FlexGrow,
    JustifyContent,
} from "@/config/design-tokens.ts";
import type { Polymorphic } from "@/helpers/polymorphic";

export type ButtonElement = (typeof BUTTON_ELEMENT)[number];

export type ButtonVariant = (typeof BUTTON_VARIANT)[number];

export type ButtonColor = Exclude<Color, "none" | "inherit" | "mist">;

export type ButtonOwnProps = {
    ref?: Ref<HTMLButtonElement>;
    display?: Display;
    smDisplay?: Display;
    mdDisplay?: Display;
    lgDisplay?: Display;
    xlDisplay?: Display;
    xxlDisplay?: Display;
    variant?: ButtonVariant;
    color?: ButtonColor;
    size?: ControlSize;
    square?: boolean;
    flexGrow?: FlexGrow;
    smFlexGrow?: FlexGrow;
    mdFlexGrow?: FlexGrow;
    lgFlexGrow?: FlexGrow;
    xlFlexGrow?: FlexGrow;
    xxlFlexGrow?: FlexGrow;
    justifyContent?: JustifyContent;
    gradient?: boolean;
    shadow?: boolean;
    borderRadius?: Extract<BorderRadius, "lg" | "xl" | "2xl" | "full">;
    disabled?: boolean;
    className?: string;
    children?: ReactNode;
};

export type ButtonProps<
    E extends ButtonElement = typeof BUTTON_DEFAULT_ELEMENT,
> = Polymorphic<E, ButtonOwnProps>;
