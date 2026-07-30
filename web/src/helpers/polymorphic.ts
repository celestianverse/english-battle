import type {
    ComponentPropsWithoutRef,
    ComponentPropsWithRef,
    ElementType,
    RefAttributes,
} from "react";

export type PropsWithRef<
    R extends HTMLElement,
    T extends Record<string, unknown> = Record<string, never>,
> = T & RefAttributes<R>;

export type PolymorphicRef<
    R extends boolean,
    E extends ElementType,
> = R extends true
    ? "ref" extends keyof ComponentPropsWithRef<E>
        ? { ref?: ComponentPropsWithRef<E>["ref"] }
        : object
    : object;

export type BaseProps<E extends ElementType> = {
    as?: E;
};

export type Polymorphic<
    E extends ElementType,
    T extends Record<string, unknown> = Record<string, never>,
    R extends boolean = false,
> = T &
    BaseProps<E> &
    PolymorphicRef<R, E> &
    Omit<ComponentPropsWithoutRef<E>, keyof T>;
