import type { ReactNode } from "react";
import type {
    TITLE_DEFAULT_ELEMENT,
    TITLE_ELEMENT,
} from "@/components/ui/Title/constants.ts";
import type {
    Color,
    FontSize,
    FontWeight,
    TextAlign,
} from "@/config/design-tokens.ts";
import type { Polymorphic } from "@/helpers/polymorphic";

export type TitleElement = (typeof TITLE_ELEMENT)[number];

export type TitleOwnProps = {
    color?: Exclude<Color, "none">;
    textAlign?: TextAlign;
    fontSize?: Extract<FontSize, "xl" | "5xl">;
    fontWeight?: FontWeight;
    truncate?: boolean;
    className?: string;
    children?: ReactNode;
};

export type TitleProps<E extends TitleElement = typeof TITLE_DEFAULT_ELEMENT> =
    Polymorphic<E, TitleOwnProps>;
