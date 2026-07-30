import type { ElementType } from "react";
import { TITLE_DEFAULT_ELEMENT } from "@/components/ui/Title/constants.ts";
import {
    CONTENT_COLOR,
    FONT_SIZE,
    FONT_WEIGHT,
    TEXT_ALIGN,
} from "@/config/design-tokens.ts";
import { cn } from "@/helpers/cn.ts";
import type { TitleElement, TitleProps } from "./types";

export const Title = <E extends TitleElement = typeof TITLE_DEFAULT_ELEMENT>({
    as,
    color = "inherit",
    textAlign,
    fontSize = "xl",
    fontWeight = "bold",
    truncate = false,
    className,
    children,
    ...rest
}: TitleProps<E>) => {
    const Component = (as || TITLE_DEFAULT_ELEMENT) as ElementType;

    return (
        <Component
            className={cn(
                CONTENT_COLOR[color],
                textAlign && TEXT_ALIGN[textAlign],
                FONT_SIZE[fontSize],
                FONT_WEIGHT[fontWeight],
                "font-title",
                truncate && "truncate",
                className,
            )}
            {...rest}
        >
            {children}
        </Component>
    );
};
