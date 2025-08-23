import { baseApi } from "../baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (userInfo) => {
                return {
                    url: '/user/register',
                    method: "POST",
                    data: userInfo
                }
            }
        })
    })
})

export const { useRegisterUserMutation } = authApi