import type { ElementType } from "react";
import { TEXT_DEFAULT_ELEMENT } from "@/components/ui/Text/constants.ts";
import {
    CONTENT_COLOR,
    FONT_SIZE,
    FONT_WEIGHT,
    TEXT_ALIGN,
} from "@/config/design-tokens.ts";
import { cn } from "@/helpers/cn.ts";
import type { TextElement, TextProps } from "./types";

export const Text = <E extends TextElement = typeof TEXT_DEFAULT_ELEMENT>({
    as,
    color = "inherit",
    textAlign,
    fontSize,
    fontWeight,
    fullWidth,
    uppercase = false,
    truncate = false,
    className,
    children,
    ...rest
}: TextProps<E>) => {
    const Component = (as || TEXT_DEFAULT_ELEMENT) as ElementType;

    return (
        <Component
            className={cn(
                fullWidth && "w-full",
                color && CONTENT_COLOR[color],
                textAlign && TEXT_ALIGN[textAlign],
                fontSize && FONT_SIZE[fontSize],
                fontWeight && FONT_WEIGHT[fontWeight],
                uppercase && "uppercase",
                truncate && "truncate",
                className,
            )}
            {...rest}
        >
            {children}
        </Component>
    );
};
