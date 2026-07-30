import type { ComponentProps } from "react";
import type { Flex } from "@/components/ui/Flex/Flex.tsx";
import type { BorderRadius, Color } from "@/config/design-tokens.ts";

type BoxBorderRadius = Extract<
    BorderRadius,
    "none" | "xl" | "2xl" | "3xl" | "4xl" | "full"
>;

type BoxOwnProps = {
    color?: Exclude<Color, "inherit">;
    shadow?: boolean;
    borderRadius?: BoxBorderRadius;
    borderTopRadius?: BoxBorderRadius;
    borderRightRadius?: BoxBorderRadius;
    borderBottomRadius?: BoxBorderRadius;
    borderLeftRadius?: BoxBorderRadius;
    borderTopLeftRadius?: BoxBorderRadius;
    borderTopRightRadius?: BoxBorderRadius;
    borderBottomRightRadius?: BoxBorderRadius;
    borderBottomLeftRadius?: BoxBorderRadius;
};

export type BoxProps = BoxOwnProps & ComponentProps<typeof Flex>;
