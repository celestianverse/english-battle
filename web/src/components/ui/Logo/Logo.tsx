import { Link } from "react-router";
import { ROUTES } from "@/config/routes.ts";
import { Row } from "../Row/Row";
import { Title } from "../Title/Title";

export const Logo = () => {
    return (
        <Link to={ROUTES.home}>
            <Row
                alignItems="center"
                gap={4}
            >
                <img
                    src="/images/english.svg"
                    alt="English Battle"
                    className="w-10 h-10"
                />
                <Title
                    as="h2"
                    fontSize="xl"
                    className="hidden lg:flex"
                >
                    English Battle
                </Title>
            </Row>
        </Link>
    );
};
