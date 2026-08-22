import {
    BORDER_RADIUS,
    CONTROL_SIZE,
    SURFACE_COLOR,
    TRANSITION,
} from "@/config/design-tokens.ts";
import { cn } from "@/helpers/cn.ts";
import type { InputProps } from "./types";

export const Input = ({
    size = "xl",
    borderRadius = "xl",
    disabled,
    className,
    ...props
}: InputProps) => {
    return (
        <input
            className={cn(
                CONTROL_SIZE[size],
                SURFACE_COLOR.light,
                BORDER_RADIUS[borderRadius],
                TRANSITION,
                "w-full py-0 px-4",
                "text-gray outline-none",
                disabled && "pointer-events-none opacity-50",
                className,
            )}
            {...props}
        />
    );
};
