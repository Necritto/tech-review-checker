import { Outlet } from "@tanstack/react-router";

import { Sidebar } from "@widgets/sidebar";

export function DefaultLayout() {
    return (
        <section className="trc-app">
            <Sidebar />
            <main className="trc-main">
                <Outlet />
            </main>
        </section>
    );
}
