import {
    createRootRoute,
    createRoute,
    createRouter,
} from "@tanstack/react-router";

import { QuestionsPage } from "@pages/questions";
import { ExercisesPage } from "@pages/exercises";

import { DefaultLayout } from "@app/layouts/default";

const rootRoute = createRootRoute({
    component: DefaultLayout,
});

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: QuestionsPage,
});

const aboutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: "/exercises",
    component: ExercisesPage,
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

export const router = createRouter({
    routeTree,
    defaultPreload: "intent",
    scrollRestoration: true,
});

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}
