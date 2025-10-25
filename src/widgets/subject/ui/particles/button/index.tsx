import React from "react";
import cn from "classnames";

import { type DetailedProps } from "@shared/types";

import styles from "./styles.module.scss";

export type ButtonProps = DetailedProps<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement>
>;

export function Button({
    children,
    className,
    ...props
}: Readonly<ButtonProps>): React.JSX.Element {
    return (
        <button {...props} className={cn(className, styles.component)}>
            {children}
        </button>
    );
}
