import type { LOADER_SIZE } from "./constants";

type LoaderSize = keyof typeof LOADER_SIZE;

export type LoaderProps = {
    size?: LoaderSize;
    className?: string;
};
