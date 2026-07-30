import { BrowserRouter, Route, Routes } from "react-router";
import { ROUTES } from "@/config/routes";
import { GamePage } from "@/pages/game/GamePage";
import { HomePage } from "@/pages/home/HomePage";

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
            </Routes>
        </BrowserRouter>
    );
};
