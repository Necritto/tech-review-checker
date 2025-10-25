import React from "react";
import cn from "classnames";

import { type DetailedProps } from "@shared/types";

import styles from "./styles.module.scss";

export interface PlateProps extends DetailedProps<HTMLDivElement> {
    headerSlot?: React.ReactNode;
}

export function Plate(props: Readonly<PlateProps>): React.JSX.Element {
    const { headerSlot, children, className, ...rest } = props;

    return (
        <article {...rest} className={cn(styles.component, className)}>
            <div className={styles.header}>{headerSlot}</div>
            <div className={styles.content}>{children}</div>
        </article>
    );
}
