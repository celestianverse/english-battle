import { BrowserRouter, Route, Routes } from "react-router";
import { ROUTES } from "@/config/routes";
import { AccountPage } from "@/pages/account/AccountPage";
import { GamePage } from "@/pages/game/GamePage";
import { HomePage } from "@/pages/home/HomePage";
import { LoginPage } from "@/pages/login/LoginPage";
import { RequireAuthorization } from "./RequireAuthorization";

export const WebRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={ROUTES.home}
                    element={<HomePage />}
                />
                <Route
                    path={ROUTES.game}
                    element={<GamePage />}
                />
                <Route
                    path={ROUTES.login}
                    element={<LoginPage />}
                />
                <Route element={<RequireAuthorization />}>
                    <Route
                        path={ROUTES.account}
                        element={<AccountPage />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
