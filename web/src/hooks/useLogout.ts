import { useState } from "react";
import { API_URL } from "@/config/env";

type UseLogoutOptions = {
    onSuccess?: () => void;
};

type UseLogoutReturn = {
    logout: () => Promise<void>;
    isLoading: boolean;
    error: string | null;
};

export const useLogout = (options?: UseLogoutOptions): UseLogoutReturn => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const logout = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`${API_URL}/api/logout`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText || "Ошибка при выходе из системы");
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

    return { logout, isLoading, error };
};
