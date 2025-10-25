import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { QueryProvider } from "@app/providers/query";
import { RouterProvider } from "@app/providers/router";

import "@shared/styles/index.scss";
import "highlight.js/styles/tokyo-night-dark.min.css";

const root = createRoot(document.getElementById("trc-app")!);

root.render(
    <StrictMode>
        <QueryProvider>
            <RouterProvider />
        </QueryProvider>
    </StrictMode>
);
