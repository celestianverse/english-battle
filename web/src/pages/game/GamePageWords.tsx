import type { GamePageWordsProps } from "./types";

export const GamePageWords = ({ children }: GamePageWordsProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full max-w-250">
            {children}
        </div>
    );
};
