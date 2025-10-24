import React from "react";
import { RouterProvider as BaseProvider } from "@tanstack/react-router";

import { router } from "@app/router";

export function RouterProvider(): React.JSX.Element {
    return <BaseProvider router={router} />;
}
