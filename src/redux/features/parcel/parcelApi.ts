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
            }
        }),

        getMyAllParcel: builder.query({
            query: () => {
                return {
                    url: '/parcels/me',
                    method: "GET"
                }
            }
        })
    })
})

export const { useCreateParcelMutation, useGetMyAllParcelQuery } = parcelApi