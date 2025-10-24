import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { QueryProvider } from "@app/providers/query";
import { RouterProvider } from "@app/providers/router";

const root = createRoot(document.getElementById("app")!);

root.render(
    <StrictMode>
        <QueryProvider>
            <RouterProvider />
        </QueryProvider>
    </StrictMode>
);
