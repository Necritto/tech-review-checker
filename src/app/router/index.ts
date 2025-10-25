import {
    createRootRoute,
    createRoute,
    createRouter,
} from "@tanstack/react-router";

import { QuestionsPage } from "@pages/questions";
import { ExercisesPage } from "@pages/exercises";

import { DefaultLayout } from "@app/layouts/default";
import { MENU_ROUTES } from "@shared/lib/constants/routes";

const rootRoute = createRootRoute({
    component: DefaultLayout,
});

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: MENU_ROUTES.QUESTIONS.path,
    component: QuestionsPage,
});

const aboutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: MENU_ROUTES.EXERCISES.path,
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
