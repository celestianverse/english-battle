import { Link } from "react-router";
import { Button } from "@/components/ui/Button/Button";
import { Column } from "@/components/ui/Column/Column";
import { ROUTES } from "@/config/routes";

export const HomePageButtons = () => {
    return (
        <Column smFlexDirection="row" gap={6} className="[&:hover~.home-image_.home-logo]:-translate-y-4 [&:hover~.home-image_.home-sword-left]:-rotate-12 [&:hover~.home-image_.home-sword-right]:rotate-12">
            <Button
                href={ROUTES.celestian}
                as="a"
                color="cyan"
                className="w-54"
            >
                celestian.cc
            </Button>
            <Button
                to={ROUTES.game}
                as={Link}
                className="w-54"
            >
                Начать игру
            </Button>
        </Column>
    );
};
