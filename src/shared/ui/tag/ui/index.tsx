import React from "react";
import cn from "classnames";

import { type DetailedProps, type TagVariants } from "@shared/types";

import styles from "./styles.module.scss";

export interface TagProps
    extends DetailedProps<
        HTMLButtonElement,
        React.ButtonHTMLAttributes<HTMLButtonElement>
    > {
    variant?: TagVariants;
}

export function Tag(props: Readonly<TagProps>): React.JSX.Element {
    const { variant, children, className, onClick, ...rest } = props;

    return (
        <button
            {...rest}
            className={cn(
                styles.component,
                styles[`component--${variant}`],
                className
            )}
            type="button"
            inert={typeof onClick !== "function"}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
