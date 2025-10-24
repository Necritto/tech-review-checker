import React from "react";
import cn from "classnames";

import { type DetailedProps } from "@shared/types";

import styles from "./styles.module.scss";

export type ParagraphProps = React.PropsWithChildren<
    DetailedProps<HTMLParagraphElement>
>;

export function Paragraph({
    children,
    className,
    ...props
}: ParagraphProps): React.JSX.Element {
    return (
        <p {...props} className={cn(styles.component, className)}>
            {children}
        </p>
    );
}
