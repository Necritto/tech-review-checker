import React from "react";
import cn from "classnames";

import { type DetailedProps } from "@shared/types";

import styles from "./styles.module.scss";

export type ParagraphProps = DetailedProps<HTMLParagraphElement>;

export function Paragraph({
    children,
    className,
    ...props
}: Readonly<ParagraphProps>): React.JSX.Element {
    return (
        <p {...props} className={cn(styles.component, className)}>
            {children}
        </p>
    );
}
