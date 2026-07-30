import type { Word } from "../../types/Word";

export const getWords = async (): Promise<Word[]> => {
    const controller = new AbortController();

    const timeout = setTimeout(() => {
        controller.abort();
    }, 5000);

    try {
        const response = await fetch("http://localhost:8080/api/words", {
            signal: controller.signal,
        });

        if (!response.ok) {
            throw new Error(`Ошибка загрузки слов: ${response.status}`);
        }

        return response.json();
    } finally {
        clearTimeout(timeout);
    }
};
