import { Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import styles from "./styles.module.scss";

export function DefaultLayout() {
    return (
        <section>
            <header>
                <Link
                    to="/"
                    activeProps={{ className: styles.active }}
                    activeOptions={{ exact: true }}
                >
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
            <ReactQueryDevtools buttonPosition="bottom-left" />
            <TanStackRouterDevtools position="bottom-right" />
        </section>
    );
}
