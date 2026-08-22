import { useNavigate } from "react-router";
import { Button } from "@/components/ui/Button/Button";
import { Column } from "@/components/ui/Column/Column";
import { Text } from "@/components/ui/Text/Text";
import { Title } from "@/components/ui/Title/Title";
import { ROUTES } from "@/config/routes";
import { useLogout } from "@/hooks/useLogout";
import { useMe } from "@/hooks/useMe";

export const AccountPageBlock = () => {
    const navigate = useNavigate();

    const { user, isLoading: isMeLoading } = useMe();
    const { logout, isLoading: isLogoutLoading } = useLogout({
        onSuccess: () => {
            navigate(ROUTES.login);
        },
    });

    return (
        <Column
            alignItems="center"
            justifyContent="center"
            gap={6}
            className="max-w-100 w-full"
        >
            <Title fontSize="5xl">Аккаунт</Title>
            {user && user.email && <Text>{user.email}</Text>}
            <Button
                as="button"
                type="button"
                fullwidth
                onClick={logout}
                disabled={isMeLoading || isLogoutLoading}
            >
                Выйти
            </Button>
        </Column>
    );
};
