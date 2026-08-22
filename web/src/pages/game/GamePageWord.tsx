import { Button } from "@/components/ui/Button/Button";
import { Icon } from "@/components/ui/Icon/Icon";
import type { GamePageWordProps } from "./types";

export const GamePageWord = ({
    words,
    isClicked,
    isSuccess,
    isFail,
    buttonHandler,
}: GamePageWordProps) => {
    return words.map((word) => (
        <Button
            key={word.ID}
            color={isClicked(word.ID) ? "purple" : "light"}
            className={
                isClicked(word.ID)
                    ? "lowercase pointer-events-none"
                    : "lowercase"
            }
            onClick={() => buttonHandler(word.ID)}
        >
            {isSuccess(word.ID) && (
                <Icon
                    name="check"
                    size="lg"
                />
            )}
            {isFail(word.ID) && (
                <Icon
                    name="close"
                    size="lg"
                />
            )}
            {!isClicked(word.ID) && word.English}
        </Button>
    ));
};
