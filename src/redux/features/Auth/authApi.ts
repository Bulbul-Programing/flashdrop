import { baseApi } from "@/redux/baseApi"

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (userInfo) => {
                return {
                    url: '/user/register',
                    method: "POST",
                    data: userInfo
                }
            }
        }),
        loginUser: builder.mutation({
            query: (userData) => {
                return {
                    url: '/auth/login',
                    method: "POST",
                    data: userData
                }
            }
        }),
        LogOutUser: builder.mutation({
            query: () => {
                return {
                    url: '/auth/logout',
                    method: "POST"
                }
            }
        }),
        getUserInfo: builder.query({
            query: () => {
                return {
                    url: '/auth/me',
                    method: "GET"
                }
            }
        }),
        getReceivers: builder.query({
            query: () => {
                return {
                    url: '/user/receiver',
                    method: "GET"
                }
            }
        }),
        getAllUser: builder.query({
            query: () => {
                return {
                    url: "/user/all-users",
                    method: "GET"
                }
            },
            providesTags: ['user']
        }),
        updateUserStatus: builder.mutation({
            query: (payload) => {
                return {
                    url: `/user/update/${payload.userId}`,
                    method: "PUT",
                    data: payload.data
                }
            },
            invalidatesTags: ['user']
        }),
        deleteUser: builder.mutation({
            query: (userId) => {
                return {
                    url: `/user/${userId}`,
                    method: "DELETE"
                }
            },
            invalidatesTags: ['user']
        }),
        googleLogin: builder.mutation({
            query: () => {
                return {
                    url: '/auth/google',
                    method: "GET"
                }
            }
        }),
    })
})

export const {
    useRegisterUserMutation,
    useLoginUserMutation,
    useLogOutUserMutation,
    useGetUserInfoQuery,
    useGetReceiversQuery,
    useGetAllUserQuery,
    useUpdateUserStatusMutation,
    useDeleteUserMutation,
    useGoogleLoginMutation
} = authApi