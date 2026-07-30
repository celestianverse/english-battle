import type { ElementType } from "react";
import { BUTTON_DEFAULT_ELEMENT } from "@/components/ui/Button/constants.ts";
import {
    BORDER_RADIUS,
    CONTENT_COLOR,
    CONTROL_SIZE,
    DISPLAY,
    FLEX_GROW,
    FOREGROUND_COLOR,
    GHOST_COLOR_HOVER,
    JUSTIFY_CONTENT,
    LG_DISPLAY,
    LG_FLEX_GROW,
    MD_DISPLAY,
    MD_FLEX_GROW,
    OUTLINE_COLOR,
    SM_DISPLAY,
    SM_FLEX_GROW,
    SURFACE_COLOR,
    SURFACE_COLOR_HOVER,
    TRANSITION,
    XL_DISPLAY,
    XL_FLEX_GROW,
    XXL_DISPLAY,
    XXL_FLEX_GROW,
} from "@/config/design-tokens.ts";
import { cn } from "@/helpers/cn.ts";
import type { ButtonElement, ButtonProps } from "./types";

export const Button = <
    E extends ButtonElement = typeof BUTTON_DEFAULT_ELEMENT,
>({
    as,
    display,
    smDisplay,
    mdDisplay,
    lgDisplay,
    xlDisplay,
    xxlDisplay,
    variant = "fill",
    color = "purple",
    size = "xl",
    square,
    flexGrow,
    smFlexGrow,
    mdFlexGrow,
    lgFlexGrow,
    xlFlexGrow,
    xxlFlexGrow,
    justifyContent = "center",
    gradient,
    shadow,
    borderRadius = "xl",
    disabled,
    className,
    children,
    ...rest
}: ButtonProps<E>) => {
    const Component = (as || BUTTON_DEFAULT_ELEMENT) as ElementType;

    return (
        <Component
            disabled={disabled}
            className={cn(
                display && DISPLAY[display],
                smDisplay && SM_DISPLAY[smDisplay],
                mdDisplay && MD_DISPLAY[mdDisplay],
                lgDisplay && LG_DISPLAY[lgDisplay],
                xlDisplay && XL_DISPLAY[xlDisplay],
                xxlDisplay && XXL_DISPLAY[xxlDisplay],
                variant === "fill" && SURFACE_COLOR[color],
                variant === "fill" && SURFACE_COLOR_HOVER[color],
                variant === "fill" && FOREGROUND_COLOR[color],
                variant === "outline" && CONTENT_COLOR[color],
                variant === "outline" && OUTLINE_COLOR[color],
                variant === "outline" && GHOST_COLOR_HOVER[color],
                variant === "ghost" && CONTENT_COLOR[color],
                variant === "ghost" && GHOST_COLOR_HOVER[color],
                CONTROL_SIZE[size],
                flexGrow && FLEX_GROW[flexGrow],
                smFlexGrow && SM_FLEX_GROW[smFlexGrow],
                mdFlexGrow && MD_FLEX_GROW[mdFlexGrow],
                lgFlexGrow && LG_FLEX_GROW[lgFlexGrow],
                xlFlexGrow && XL_FLEX_GROW[xlFlexGrow],
                xxlFlexGrow && XXL_FLEX_GROW[xxlFlexGrow],
                JUSTIFY_CONTENT[justifyContent],
                BORDER_RADIUS[borderRadius],
                disabled && "disabled:pointer-events-none disabled:opacity-50",
                TRANSITION,
                square && "p-0!",
                "relative flex items-center gap-2.5",
                "*:data-icon:-mx-0.5 select-none cursor-pointer",
                className,
            )}
            {...rest}
        >
            {children}
        </Component>
    );
};
