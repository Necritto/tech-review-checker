
```js
// api/usersApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => ({
                url: "users",
                method: "POST",
            }),
        }),
        createUser: builder.mutation({
            query: (newUser) => ({
                url: "users",
                method: "POST",
                body: newUser,
            }),
        }),
    }),
});

export const { useGetUsersQuery, useCreateUserMutation } = usersApi;
```

---

| №   | Ошибка                               | Почему это критично                                                                          | Как исправить                                         |
| --- | ------------------------------------ | -------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 1   | `method: POST` в query               | query-запросы должны быть **GET**; RTK Query кеширует их, а POST нельзя кешировать корректно | Сделать `method: 'GET'` или вынести POST в `mutation` |
| 2   | Нет `providesTags` в `getUsers`      | Кэш не будет помечен, и мутация `createUser` не сможет его сбросить                          | Добавить `providesTags: ['Users']`                    |
| 3   | Нет `invalidatesTags` в `createUser` | После создания пользователь не появится без ручного обновления                               | Добавить `invalidatesTags: ['Users']`                 |

```js
export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
    tagTypes: ["Users"],
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => "users",
            providesTags: ["Users"],
        }),
        createUser: builder.mutation({
            query: (newUser) => ({
                url: "users",
                method: "POST",
                body: newUser,
            }),
            invalidatesTags: ["Users"],
        }),
    }),
});
```
