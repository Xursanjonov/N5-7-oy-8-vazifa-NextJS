import { mockAPI } from "./mockApi";

export const categoryApi = mockAPI.injectEndpoints({
    endpoints: (build) => ({
        getMockAPICategory: build.query({
            query: (params) => ({
                url: "/category",
                params,
            }),
            providesTags: ["category"],
        }),
        getMockAPICategoryById: build.query({
            query: (id) => ({
                url: `/products/${id}`,
            }),
            providesTags: ["category"],
        }),
        createMockAPICategory: build.mutation({
            query: (body) => ({
                url: "/category",
                method: "POST",
                body,
            }),
            invalidatesTags: ["category"],
        }),
        deleteMockAPICategory: build.mutation({
            query: (id) => ({
                url: `/category/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["category"],
        }),
        updateMockAPICategory: build.mutation({
            query: ({ id, body }) => ({
                url: `/category/${id}`,
                method: "PUT",
                body,
            }),
            invalidatesTags: ["category"],
        }),
    }),
});

export const { useGetMockAPICategoryQuery,
    useGetMockAPICategoryByIdQuery,
    useCreateMockAPICategoryMutation,
    useDeleteMockAPICategoryMutation,
    useUpdateMockAPICategoryMutation
} = categoryApi;
