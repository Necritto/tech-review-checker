import React from "react";
import { X } from "lucide-react";
import cn from "classnames";
import { motion } from "motion/react";

import { type Nullable } from "@shared/types";

import { drawerService, drawerStore } from "../model/drawer-service";
import styles from "./styles.module.scss";

export function Drawer(): Nullable<React.JSX.Element> {
    const { subscribe, getSnapshot } = React.useRef(drawerStore).current;

    const { isOpen, template } = React.useSyncExternalStore(
        subscribe,
        getSnapshot
    );

    if (!(isOpen && template)) {
        return null;
    }

    return (
        <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
                type: "spring",
                damping: 30,
                stiffness: 300,
            }}
            className={styles.component}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1, delay: 0.3 }}
                className={styles.backdrop}
                onClick={drawerService.close}
            />

            <header className={styles.header}>
                <button
                    data-autofocus
                    className={styles.close}
                    onClick={drawerService.close}
                >
                    <X />
                </button>
            </header>
            <section className={cn(styles.template, "invisible-scroll")}>
                {template}
            </section>
        </motion.aside>
    );
}
