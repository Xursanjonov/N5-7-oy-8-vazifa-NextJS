import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
// import { logout } from '../slices/authSlice';

const baseQueryAPI = async (args, mockAPI, extraOptions) => {
    // const { dispatch } = api;
    const rawBaseQuery = fetchBaseQuery({
        baseUrl: "https://669124ae26c2a69f6e8ea36d.mockapi.io/newproject",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("mockAPI-token");
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    });

    const result = await rawBaseQuery(args, mockAPI, extraOptions);

    if (result.error) {
        const { status } = result.error;
        if (status === 401 || status === 403) {
            console.error("Unauthorized access - Redirecting to login...");
            // dispatch(logout())
        }
    }
    return result;
};

const baseQueryWithRetryApi = retry(baseQueryAPI, { maxRetries: 0 });

export const mockAPI = createApi({
    reducerPath: "mockApi",
    baseQuery: baseQueryWithRetryApi,
    tagTypes: ["products", "category"],
    endpoints: (build) => ({
        getMockAPIProducts: build.query({
            query: (params) => ({
                url: "/products",
                params,
            }),
            providesTags: ["products"],
        }),
        getMockAPIProductById: build.query({
            query: (id) => ({
                url: `/products/${id}`,
            }),
            providesTags: ["products"],
        }),
        createMockAPIProduct: build.mutation({
            query: (body) => ({
                url: "/products",
                method: "POST",
                body,
            }),
            invalidatesTags: ["products"],
        }),
        deleteMockAPIProduct: build.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["products"],
        }),
        updateMockAPIProduct: build.mutation({
            query: ({ id, body }) => ({
                url: `/products/${id}`,
                method: "PUT",
                body,
            }),
            invalidatesTags: ["products"],
        }),
    }),
});

export const {} = mockAPI