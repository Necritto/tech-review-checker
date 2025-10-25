import { Outlet } from "@tanstack/react-router";
import { ToastContainer, Bounce } from "react-toastify";

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
            <ToastContainer
                position="top-right"
                autoClose={2000}
                theme="dark"
                pauseOnHover={false}
                transition={Bounce}
            />
        </section>
    );
}
