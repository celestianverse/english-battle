import type { ReactNode } from "react";
import type {
    TEXT_DEFAULT_ELEMENT,
    TEXT_ELEMENT,
} from "@/components/ui/Text/constants.ts";
import type {
    Color,
    FontSize,
    FontWeight,
    TextAlign,
} from "@/config/design-tokens.ts";
import type { Polymorphic } from "@/helpers/polymorphic";

export type TextElement = (typeof TEXT_ELEMENT)[number];

export type TextColor = Exclude<Color, "none">;

export type TextOwnProps = {
    color?: TextColor;
    textAlign?: TextAlign;
    fontSize?: Extract<FontSize, "2xs" | "xs" | "sm" | "base">;
    fontWeight?: FontWeight;
    fullWidth?: boolean;
    uppercase?: boolean;
    truncate?: boolean;
    className?: string;
    children?: ReactNode;
};

export type TextProps<E extends TextElement = typeof TEXT_DEFAULT_ELEMENT> =
    Polymorphic<E, TextOwnProps>;
