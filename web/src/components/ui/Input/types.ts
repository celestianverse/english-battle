import type { InputHTMLAttributes } from "react";
import type { BorderRadius, ControlSize } from "@/config/design-tokens";

export type InputProps = {
    size?: ControlSize;
    borderRadius?: Extract<BorderRadius, "lg" | "xl" | "2xl" | "full">;
    className?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
