import { Link } from "react-router";
import { Button } from "@/components/ui/Button/Button";
import { ROUTES } from "@/config/routes";

export const HomePageButton = () => {
    return (
        <Button
            to={ROUTES.game}
            as={Link}
            className="w-54 [&:hover~.home-image_.home-logo]:-translate-y-4 [&:hover~.home-image_.home-sword-left]:-rotate-[10deg] [&:hover~.home-image_.home-sword-right]:rotate-[10deg]"
        >
            Начать игру
        </Button>
    );
};
