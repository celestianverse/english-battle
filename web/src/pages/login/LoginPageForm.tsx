import type { SubmitEvent } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/Button/Button";
import { Column } from "@/components/ui/Column/Column";
import { Input } from "@/components/ui/Input/Input";
import { Title } from "@/components/ui/Title/Title";
import { ROUTES } from "@/config/routes";
import { useLogin } from "@/hooks/useLogin";
import { useMe } from "@/hooks/useMe";

export const LoginPageForm = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { user } = useMe();
    const { login, isLoading, error } = useLogin({
        onSuccess: () => {
            navigate(ROUTES.account);
        },
    });

    const handleSubmit = async (e: SubmitEvent) => {
        e.preventDefault();
        await login({ email, password });
    };

    useEffect(() => {
        if (user) {
            navigate(ROUTES.account, { replace: true });
        }
    }, [user, navigate]);

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full flex justify-center"
        >
            <Column
                alignItems="center"
                justifyContent="center"
                gap={6}
                className="max-w-100 w-full"
            >
                <Title fontSize="5xl">Вход</Title>

                <Input
                    id="login-email"
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <Input
                    id="login-password"
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                {error && <span className="text-red-500 text-sm">{error}</span>}

                <Button
                    as="button"
                    type="submit"
                    fullwidth
                    disabled={isLoading}
                >
                    Войти
                </Button>
            </Column>
        </form>
    );
};
