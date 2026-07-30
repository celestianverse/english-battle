import { cn } from "@/helpers/cn.ts";
import type { AvatarProps } from "./types";

export const Avatar = ({ value, className }: AvatarProps) => {
    return (
        <div
            className={cn(
                "flex items-center justify-center text-center",
                "w-11 h-11 bg-purple rounded-full",
                className,
            )}
        >
            {value}
        </div>
    );
};
