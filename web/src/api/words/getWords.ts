import type { Word } from "../../types/Word";

export const getWords = async (): Promise<Word[]> => {
    const response = await fetch("http://localhost:8080/api/words");

    if (!response.ok) {
        throw new Error("Ошибка загрузки слов");
    }

    const words: Word[] = await response.json();

    console.log(words);

    return words;
};