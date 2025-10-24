import { QueryClient, type DefaultOptions } from "@tanstack/react-query";

const defaultQueryOptions: DefaultOptions = {
    queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
        refetchOnMount: false,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 30,
        retry: false,
        throwOnError: false,
    },
    mutations: {
        retry: false,
    },
};

export const queryClient = new QueryClient({
    defaultOptions: defaultQueryOptions,
});
