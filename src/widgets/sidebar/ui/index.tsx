import React from "react";
import { Link } from "@tanstack/react-router";
import cn from "classnames";

import { MENU_ROUTES } from "@shared/lib/constants/routes";

import styles from "./styles.module.scss";

export function Sidebar(): React.JSX.Element {
    return (
        <aside className={styles.sidebar}>
            <header className={styles.header}>
                <h2 className={styles.title}>Interview Dashboard</h2>
                <p className={cn(styles.subtitle, "paragraph-secondary")}>
                    Technical Assessment Tool
                </p>
            </header>
            <nav className={cn(styles.nav, "invisible-scroll")}>
                {Object.values(MENU_ROUTES).map(({ path, title, Icon }) => (
                    <React.Fragment key={path}>
                        <Link
                            to={path}
                            activeProps={{ className: styles.active }}
                            className={styles.link}
                            activeOptions={{ exact: true }}
                        >
                            <Icon className={styles.icon} />
                            {title}
                        </Link>
                    </React.Fragment>
                ))}
            </nav>
            <footer className={styles.footer}>
                {new Date().getFullYear()}
                &#127920; &#64;necritto
            </footer>
        </aside>
    );
}
