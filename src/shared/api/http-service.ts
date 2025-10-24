import axios, { type Options } from "redaxios";

const _instance = axios.create({
    withCredentials: true,
});

export const httpService = {
    get instance() {
        return _instance;
    },
    async get<Response>(url: string, config?: Options) {
        const { data } = await _instance.get<Response>(url, config);

        return data;
    },
};
