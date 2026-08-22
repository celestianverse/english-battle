import { useState } from "react";
import { API_URL } from "@/config/env";

type LoginCredentials = {
    email: string;
    password: string;
};

type UseLoginOptions = {
    onSuccess?: () => void;
};

type UseLoginReturn = {
    login: (credentials: LoginCredentials) => Promise<void>;
    isLoading: boolean;
    error: string | null;
};

export const useLogin = (options?: UseLoginOptions): UseLoginReturn => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const login = async (credentials: LoginCredentials) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`${API_URL}/api/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || "Неудачная попытка входа");
            }

            options?.onSuccess?.();
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Произошла неизвестная ошибка");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return { login, isLoading, error };
};
