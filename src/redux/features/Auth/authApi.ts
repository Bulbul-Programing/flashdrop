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
        })
    })
})

export const { useRegisterUserMutation, useLoginUserMutation, useLogOutUserMutation, useGetUserInfoQuery } = authApi