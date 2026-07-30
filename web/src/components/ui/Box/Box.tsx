import type { BoxProps } from "@/components/ui/Box/types.ts";
import { Flex } from "@/components/ui/Flex/Flex.tsx";
import {
    BORDER_BOTTOM_LEFT_RADIUS,
    BORDER_BOTTOM_RADIUS,
    BORDER_BOTTOM_RIGHT_RADIUS,
    BORDER_LEFT_RADIUS,
    BORDER_RADIUS,
    BORDER_RIGHT_RADIUS,
    BORDER_TOP_LEFT_RADIUS,
    BORDER_TOP_RADIUS,
    BORDER_TOP_RIGHT_RADIUS,
    FOREGROUND_COLOR,
    SHADOW_COLOR,
    SURFACE_COLOR,
} from "@/config/design-tokens.ts";
import { cn } from "@/helpers/cn.ts";

export const Box = ({
    color = "mist",
    shadow,
    borderRadius = "xl",
    borderTopRadius,
    borderRightRadius,
    borderBottomRadius,
    borderLeftRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomRightRadius,
    borderBottomLeftRadius,
    className,
    children,
    ...rest
}: BoxProps) => {
    return (
        <Flex
            flexDirection="col"
            padding={4}
            className={cn(
                SURFACE_COLOR[color],
                FOREGROUND_COLOR[color],
                shadow && SHADOW_COLOR[color],
                borderRadius && BORDER_RADIUS[borderRadius],
                borderTopRadius && BORDER_TOP_RADIUS[borderTopRadius],
                borderRightRadius && BORDER_RIGHT_RADIUS[borderRightRadius],
                borderBottomRadius && BORDER_BOTTOM_RADIUS[borderBottomRadius],
                borderLeftRadius && BORDER_LEFT_RADIUS[borderLeftRadius],
                borderTopLeftRadius &&
                    BORDER_TOP_LEFT_RADIUS[borderTopLeftRadius],
                borderTopRightRadius &&
                    BORDER_TOP_RIGHT_RADIUS[borderTopRightRadius],
                borderBottomRightRadius &&
                    BORDER_BOTTOM_RIGHT_RADIUS[borderBottomRightRadius],
                borderBottomLeftRadius &&
                    BORDER_BOTTOM_LEFT_RADIUS[borderBottomLeftRadius],
                className,
            )}
            {...rest}
        >
            {children}
        </Flex>
    );
};
