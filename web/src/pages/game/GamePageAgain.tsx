import { Button } from "@/components/ui/Button/Button";
import { ROUTES } from "@/config/routes";

export const GamePageAgain = () => {
    return (
        <Button
            href={ROUTES.game}
            as="a"
            className="w-54"
        >
            Играть ещё
        </Button>
    );
};
