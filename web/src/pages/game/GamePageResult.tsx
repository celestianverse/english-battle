import { Title } from "@/components/ui/Title/Title";
import type { GamePageResultProps } from "./types";

export const GamePageResult = ({ result }: GamePageResultProps) => {
    return (
        <Title
            as="h1"
            fontSize="5xl"
            textAlign="center"
        >
            {result()}
        </Title>
    );
};
