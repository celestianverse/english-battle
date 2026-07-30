import { Avatar } from "@/components/ui/Avatar/Avatar";
import type { UserAvatarProps } from "./types";

export const UserAvatar = ({ score }: UserAvatarProps) => {
    const getScore = (score: number): string | number => {
        if (score > 0) {
            return `+${score}`;
        }

        return score;
    };

    return <Avatar value={getScore(score)} />;
};
