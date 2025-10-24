import { Link, Outlet } from "@tanstack/react-router";

import styles from "./styles.module.scss";

export function DefaultLayout() {
    return (
        <section>
            <header>
                <Link to="/" activeProps={{ className: styles.active }}>
                    Вопросы
                </Link>
                <Link
                    to="/exercises"
                    activeProps={{ className: styles.active }}
                >
                    Задачи
                </Link>
            </header>
            <Outlet />
        </section>
    );
}
