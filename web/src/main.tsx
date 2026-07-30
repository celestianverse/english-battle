import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { WebRouter } from "@/routing/WebRouter.tsx";
import "@/styles/global.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <WebRouter />
    </StrictMode>,
);
