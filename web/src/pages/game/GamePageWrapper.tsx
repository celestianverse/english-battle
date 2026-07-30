import { Column } from "@/components/ui/Column/Column";
import type { GamePageWrapperProps } from "./types";

export const GamePageWrapper = ({ children }: GamePageWrapperProps) => {
    return (
        <Column
            gap={12}
            alignItems="center"
            fullWidth
        >
            {children}
        </Column>
    );
};
