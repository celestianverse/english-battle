import { Navigate, Outlet } from "react-router";
import { ROUTES } from "@/config/routes";
import { useMe } from "@/hooks/useMe";

export const RequireAuthorization = () => {
    const { user, isLoading } = useMe();

    if (isLoading) return null;

    if (!user) {
        return (
            <Navigate
                to={ROUTES.login}
                replace
            />
        );
    }

    return <Outlet />;
};
