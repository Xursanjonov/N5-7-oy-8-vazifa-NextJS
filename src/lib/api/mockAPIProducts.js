import { mockAPI } from "./mockApi";

export const mockAPIproduct = mockAPI.injectEndpoints({
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

export const { useGetMockAPIProductsQuery,useGetMockAPIProductByIdQuery, useCreateMockAPIProductMutation, useDeleteMockAPIProductMutation, useUpdateMockAPIProductMutation } = mockAPIproduct;
