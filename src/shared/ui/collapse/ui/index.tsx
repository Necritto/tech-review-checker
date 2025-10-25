import React from "react";
import cn from "classnames";

import { type DetailedProps } from "@shared/types";

import styles from "./styles.module.scss";

export interface CollapseProps extends DetailedProps<HTMLDivElement> {
    open?: boolean;
}

export function Collapse(
    props: Readonly<React.PropsWithChildren<CollapseProps>>
): React.JSX.Element {
    const { open = false, children, className, ...rest } = props;

    return (
        <div
            {...rest}
            className={cn(styles.component, {
                [styles["component--open"]]: open,
            })}
        >
            <div className={cn(className, styles.content)}>{children}</div>
        </div>
    );
}
