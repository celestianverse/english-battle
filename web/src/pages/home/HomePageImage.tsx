import { TRANSITION } from "@/config/design-tokens";
import { cn } from "@/helpers/cn";

export const HomePageImage = () => {
    return (
        <div className="home-image relative mb-3">
            <img
                src="/images/english.svg"
                alt="English Battle"
                className={cn(
                    "home-logo w-36 h-36 sm:w-64 sm:h-64",
                    TRANSITION,
                )}
            />
            <img
                src="/images/sword-left.svg"
                alt="Меч"
                className={cn(
                    "home-sword-left absolute w-16 h-16 sm:w-24 sm:h-24 bottom-0 -left-17 sm:-left-24",
                    TRANSITION,
                )}
            />
            <img
                src="/images/sword-right.svg"
                alt="Меч"
                className={cn(
                    "home-sword-right absolute w-16 h-16 sm:w-24 sm:h-24 bottom-0 -right-17 sm:-right-24",
                    TRANSITION,
                )}
            />
        </div>
    );
};
