import { Container } from "../Container/Container";
import type { BodyProps } from "./types";

export const Body = ({ children }: BodyProps) => {
    return (
        <main className="flex flex-col grow w-full min-h-0 justify-center py-12">
            <Container justifyContent="center">{children}</Container>
        </main>
    );
};
