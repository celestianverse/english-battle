import { Header } from "@/components/composed/Header/Header";
import { Body } from "@/components/ui/Body/Body";
import { Page } from "@/components/ui/Page/Page";
import { useGame } from "@/hooks/useGame";
import { GamePageAgain } from "./GamePageAgain";
import { GamePageAnswer } from "./GamePageAnswer";
import { GamePageResult } from "./GamePageResult";
import { GamePageWord } from "./GamePageWord";
import { GamePageWords } from "./GamePageWords";
import { GamePageWrapper } from "./GamePageWrapper";

export const GamePage = () => {
    const {
        score,
        checkWord,
        words,
        isClicked,
        isSuccess,
        isFail,
        isEnd,
        buttonHandler,
        successWords,
        failWords,
        result,
    } = useGame();

    return (
        <Page withHeader>
            <Header
                word={checkWord?.Russian}
                score={score}
            />
            <Body>
                <GamePageWrapper>
                    {isEnd && <GamePageResult result={result} />}
                    <GamePageWords>
                        {!isEnd && (
                            <GamePageWord
                                words={words}
                                isClicked={isClicked}
                                isSuccess={isSuccess}
                                isFail={isFail}
                                buttonHandler={buttonHandler}
                            />
                        )}
                        {isEnd && (
                            <GamePageAnswer
                                words={successWords}
                                color="green"
                                icon="check"
                            />
                        )}
                        {isEnd && (
                            <GamePageAnswer
                                words={failWords}
                                color="light"
                                icon="close"
                            />
                        )}
                    </GamePageWords>
                    {isEnd && <GamePageAgain />}
                </GamePageWrapper>
            </Body>
        </Page>
    );
};
