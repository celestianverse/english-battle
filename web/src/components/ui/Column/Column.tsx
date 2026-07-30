import { Flex } from "@/components/ui/Flex/Flex.tsx";
import type { ColumnProps } from "./types";

export const Column = (props: ColumnProps) => {
    return (
        <Flex
            flexDirection="col"
            {...props}
        />
    );
};
