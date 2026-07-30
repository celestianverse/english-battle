import { CONTENT_COLOR } from "@/config/design-tokens.ts";
import { cn } from "@/helpers/cn.ts";
import { ICON_SIZE, ICONS } from "./constants.ts";
import type { IconProps } from "./types.ts";

export const Icon = ({
    name = "none",
    color = "inherit",
    stroke,
    size = "md",
    className,
}: IconProps) => {
    const Component = ICONS[name];

    return (
        <span
            aria-hidden="true"
            data-icon
            className={cn(
                ICON_SIZE[size],
                "inline-flex shrink-0",
                color !== "none" &&
                    color !== "inherit" &&
                    "[&_svg_*]:fill-current",
                CONTENT_COLOR[color],
                stroke && "[&_svg_*]:stroke-current",
                stroke && CONTENT_COLOR[stroke],
                className,
            )}
        >
            <Component />
        </span>
    );
};
