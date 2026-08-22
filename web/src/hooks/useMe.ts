import { useCallback, useEffect, useState } from "react";
import { API_URL } from "@/config/env";

export type User = {
    id: string;
    email: string;
    role: string;
    user_name: string;
};

type UseMeOptions = {
    autoFetch?: boolean;
};

type UseMeReturn = {
    user: User | null;
    isLoading: boolean;
    error: string | null;
    fetchUser: () => Promise<void>;
};

export const useMe = (
    options: UseMeOptions = { autoFetch: true },
): UseMeReturn => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(options.autoFetch ?? true);
    const [error, setError] = useState<string | null>(null);

    const fetchUser = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`${API_URL}/api/me`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                },
                credentials: "include",
            });

            if (!response.ok) {
                if (response.status === 401) {
                    setUser(null);
                    throw new Error("Неавторизован");
                }
                const errorText = await response.text();
                throw new Error(
                    errorText || "Не удалось загрузить данные пользователя",
                );
            }

            const data: User = await response.json();
            setUser(data);
        } catch (err: unknown) {
            setUser(null);
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Произошла неизвестная ошибка");
            }
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        if (options.autoFetch) {
            fetchUser();
        }
    }, [fetchUser, options.autoFetch]);

    return { user, isLoading, error, fetchUser };
};
