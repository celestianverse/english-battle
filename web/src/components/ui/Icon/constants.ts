import Check from "@/components/ui/Icon/icons/check.svg";
import Close from "@/components/ui/Icon/icons/close.svg";
import Copy from "@/components/ui/Icon/icons/copy.svg";
import None from "@/components/ui/Icon/icons/none.svg";

export const ICONS = {
    none: None,
    copy: Copy,
    check: Check,
    close: Close,
} as const;

export const ICON_SIZE = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
} as const;
