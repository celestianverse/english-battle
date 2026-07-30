import { useEffect, useState } from "react";
import { getWords } from "@/api/words/getWords";
import { shuffle } from "@/helpers/shuffle";
import type { Word } from "@/types/Word";

export const useGame = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [score, setScore] = useState(0);
    const [checkWord, setCheckWord] = useState<Word>();
    const [words, setWords] = useState<Word[]>([]);
    const [askWords, setAskWords] = useState<Word[]>([]);
    const [successIds, setSuccessIds] = useState<number[]>([]);
    const [failIds, setFailIds] = useState<number[]>([]);
    const [successWords, setSuccessWords] = useState<Word[]>([]);
    const [failWords, setFailWords] = useState<Word[]>([]);

    const isClicked = (id: number): boolean =>
        successIds.includes(id) || failIds.includes(id);
    const isSuccess = (id: number): boolean => successIds.includes(id);
    const isFail = (id: number): boolean => failIds.includes(id);
    const isEnd = !isLoading && askWords.length === 0;
    const result = (): string => {
        if (score === 25) {
            return `👑 ${score} баллов!`;
        }
        if (score > 0) {
            return `🎉 ${score} баллов`;
        }
        return `👻 ${score} баллов`;
    };

    const buttonHandler = (id: number) => {
        if (id === checkWord?.ID) {
            setScore((prev) => prev + 1);
            setSuccessIds((prev) => [...prev, id]);
            setSuccessWords((prev) => [...prev, askWords[0]]);
            setAskWords(askWords.filter((_, index) => index !== 0));
            setCheckWord(askWords[1]);
        } else {
            setScore((prev) => prev - 1);
            setFailIds((prev) => [...prev, id]);
            setFailWords((prev) => [
                ...prev,
                askWords.find((item) => item.ID === id)!,
            ]);
            setAskWords(askWords.filter((item) => item.ID !== id));
            setCheckWord(askWords[0]);
        }
    };

    useEffect(() => {
        const loadWords = async () => {
            const data = await getWords();

            setWords(data);

            const shuffled = shuffle(data);

            setAskWords(shuffled);
            setCheckWord(shuffled[0]);
            setIsLoading(false);
        };

        loadWords();
    }, []);

    return {
        isLoading,
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
    };
};
