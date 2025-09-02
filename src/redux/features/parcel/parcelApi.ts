import { baseApi } from "@/redux/baseApi"

export const parcelApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createParcel: builder.mutation({
            query: (userInfo) => {
                return {
                    url: '/parcels',
                    method: "POST",
                    data: userInfo
                }
            },
            invalidatesTags: ['parcel']
        }),

        getMyAllParcel: builder.query({
            query: () => {
                return {
                    url: '/parcels/me',
                    method: "GET"
                }
            },
            providesTags: ['parcel']
        }),

        getAdminAllParcel: builder.query({
            query: () => {
                return {
                    url: '/parcels/admin',
                    method: "GET"
                }
            },
            providesTags: ['parcel']
        }),

        getParcelStatus: builder.query({
            query: (parcelId) => {
                return {
                    url: `/parcels/${parcelId}/statusLog`,
                    method: "GET"
                }
            },
            providesTags: ['parcel']
        }),

        deleteParcel: builder.mutation({
            query: (parcelId) => {
                return {
                    url: `/parcels/${parcelId}`,
                    method: "DELETE"
                }
            },
            invalidatesTags: ['parcel']
        }),
        updateParcelStatus: builder.mutation({
            query: (payload) => {
                console.log('payload', payload);
                return {
                    url: `/parcels/updateStatus/${payload.parcelId}`,
                    method: "PATCH",
                    data: payload.data
                }
            },
            invalidatesTags: ['parcel']
        })
    })
})

export const {
    useCreateParcelMutation,
    useGetMyAllParcelQuery,
    useGetAdminAllParcelQuery,
    useGetParcelStatusQuery,
    useDeleteParcelMutation,
    useUpdateParcelStatusMutation
} = parcelApi