import type { Color } from "@/config/design-tokens.ts";
import type { ICON_SIZE, ICONS } from "./constants.ts";

export type IconKey = keyof typeof ICONS;

export type IconSize = keyof typeof ICON_SIZE;

export type IconProps = {
    name: IconKey;
    color?: Color;
    stroke?: Color;
    size?: IconSize;
    className?: string;
};
