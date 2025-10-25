import React from "react";
import cn from "classnames";

import { type DetailedProps } from "@shared/types";

import styles from "./styles.module.scss";

export interface ListItem {
    id: string;
    slot: React.ReactNode;
}

export interface ListProps
    extends Omit<DetailedProps<HTMLUListElement>, "children"> {
    children: ListItem[];
}

export function List({
    children,
    className,
    ...props
}: Readonly<ListProps>): React.JSX.Element {
    return (
        <ul {...props} className={cn(className, styles.component)}>
            {children.map(({ id, slot }) => (
                <li key={id} className={styles.content}>
                    {slot}
                </li>
            ))}
        </ul>
    );
}
