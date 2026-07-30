import { Box } from "@/components/ui/Box/Box";
import { Column } from "@/components/ui/Column/Column";
import { Icon } from "@/components/ui/Icon/Icon";
import type { GamePageAnswerProps } from "./types";

export const GamePageAnswer = ({ words, color, icon }: GamePageAnswerProps) => {
    return words.map((word) => {
        if (word) {
            return (
                <Box
                    key={word.ID}
                    alignItems="center"
                    gap={4}
                    padding={5}
                    color={color}
                    className="min-h-34 text-center lowercase"
                >
                    <Icon
                        name={icon}
                        size="lg"
                    />
                    <Column gap={2}>
                        <div>{word.English}</div>
                        <div>{word.Russian}</div>
                    </Column>
                </Box>
            );
        } else {
            return null;
        }
    });
};
