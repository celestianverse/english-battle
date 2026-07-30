import { Flex } from "@/components/ui/Flex/Flex.tsx";
import type { ContainerProps } from "./types";

export const Container = (props: ContainerProps) => {
    return (
        <Flex
            className="container max-w-[1600px] mx-auto px-5 sm:px-8"
            {...props}
        />
    );
};
