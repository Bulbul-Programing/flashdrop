import { useGetUserInfoQuery } from "@/redux/features/Auth/authApi";
import type { TRole } from "@/types/TRole";
import type { ComponentType } from "react";
import { Navigate } from "react-router-dom";

export const withAuth = (Component: ComponentType, requiredRole?: TRole) => {
    return function AuthWrapper() {
        const { data, isLoading } = useGetUserInfoQuery(undefined)

        if (!isLoading && !data?.data?.email) {
            return <Navigate to='/login' />
        }

        if (requiredRole && !isLoading && requiredRole !== data?.data?.role) {
            return <Navigate to='/unauthorize' />
        }
        return <Component />
    }
}