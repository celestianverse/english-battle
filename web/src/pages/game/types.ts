import type { ReactNode } from "react";
import type { IconKey } from "@/components/ui/Icon/types";
import type { Color } from "@/config/design-tokens";
import type { Word } from "@/types/Word";

export type GamePageWrapperProps = {
    children: ReactNode;
};

export type GamePageWordsProps = {
    children: ReactNode;
};

export type GamePageResultProps = {
    result: () => string;
};

export type GamePageWordProps = {
    words: Word[];
    isClicked: (id: number) => boolean;
    isSuccess: (id: number) => boolean;
    isFail: (id: number) => boolean;
    buttonHandler: (id: number) => void;
};

export type GamePageAnswerProps = {
    words: Word[];
    color: Exclude<Color, "inherit">;
    icon: IconKey;
};
