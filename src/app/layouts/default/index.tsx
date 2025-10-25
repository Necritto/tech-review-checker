import { Outlet } from "@tanstack/react-router";

import { Sidebar } from "@widgets/sidebar";
import { Drawer } from "@shared/ui/drawer";

export function DefaultLayout() {
    return (
        <section className="trc-app">
            <Sidebar />
            <main className="trc-main">
                <Outlet />
            </main>
            <Drawer />
        </section>
    );
}
