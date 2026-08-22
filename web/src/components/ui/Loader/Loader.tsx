import { cn } from "@/helpers/cn";
import { LOADER_SIZE } from "./constants";
import type { LoaderProps } from "./types";

export const Loader = ({ size = "md", className }: LoaderProps) => {
    return (
        <output
            className={cn(
                LOADER_SIZE[size],
                "shrink-0 inline-block mx-auto border-2 border-current border-t-transparent text-white rounded-full animate-spin",
                className,
            )}
        >
            <span className="sr-only">Загрузка</span>
        </output>
    );
};
