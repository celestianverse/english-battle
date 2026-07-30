import { UserAvatar } from "@/components/composed/UserAvatar/UserAvatar";
import { Container } from "@/components/ui/Container/Container";
import { Logo } from "@/components/ui/Logo/Logo";
import { Row } from "@/components/ui/Row/Row";
import { Text } from "@/components/ui/Text/Text";
import type { HeaderProps } from "./types";

export const Header = ({ word, score }: HeaderProps) => {
    return (
        <Row
            as="header"
            alignItems="center"
            fullWidth
            className="z-100 fixed top-0 left-0 right-0 w-full h-20 bg-light backdrop-blur-md"
        >
            <Container
                alignItems="center"
                justifyContent="between"
                gap={4}
            >
                <Row smFullWidth>
                    <Logo />
                </Row>
                <Row
                    fullWidth
                    className="justify-end sm:justify-center text-right sm:text-center"
                >
                    <Text>{word}</Text>
                </Row>
                <Row
                    display="hidden"
                    smDisplay="flex"
                    justifyContent="end"
                    fullWidth
                >
                    <UserAvatar score={score} />
                </Row>
            </Container>
        </Row>
    );
};
