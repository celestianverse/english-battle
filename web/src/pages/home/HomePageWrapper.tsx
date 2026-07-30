import { Column } from "@/components/ui/Column/Column";
import type { HomePageWrapperProps } from "./types";

export const HomePageWrapper = ({ children }: HomePageWrapperProps) => {
    return (
        <Column
            alignItems="center"
            justifyContent="center"
            flexDirection="col-reverse"
            gap={9}
        >
            {children}
        </Column>
    );
};
