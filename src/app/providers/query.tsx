import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@shared/api/query-client";

export function QueryProvider({ children }: Readonly<React.PropsWithChildren>) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}
