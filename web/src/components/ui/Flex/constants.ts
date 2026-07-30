import { Link, NavLink } from "react-router";

export const FLEX_ELEMENT = [
    "div",
    "span",
    "section",
    "article",
    "header",
    "footer",
    "aside",
    "form",
    "nav",
    "ul",
    "ol",
    "button",
    "a",
    "label",
    Link,
    NavLink,
] as const;

export const FLEX_DEFAULT_ELEMENT = "div";
