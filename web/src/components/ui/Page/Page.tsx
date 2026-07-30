import { cn } from "@/helpers/cn";
import type { PageProps } from "./types";

export const Page = ({ withHeader, children }: PageProps) => {
    return (
        <div
            className={cn(
                withHeader && "pt-20",
                "flex flex-col items-center grow min-h-screen",
            )}
        >
            {children}
        </div>
    );
};
