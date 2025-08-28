import App from "@/App";
import SenderDashboardLayout from "@/components/layout/SenderDashboardLayout";
import HomePage from "@/pages/Home/HomePage";
import Login from "@/pages/Login/Login";
import Prices from "@/pages/Prices/Prices";
import Register from "@/pages/Register/Register";
import { generateRoutes } from "@/utils/generateRoutes";
import { withAuth } from "@/utils/withAuth";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { senderSidebarItems } from "./senderSidebarItems";
import { receiverSidebarItems } from "./receiverSidebarItems";
import ReceiverDashboardLayout from "@/components/layout/ReceiverDashboardLayout";


export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                path: '/',
                Component: HomePage
            },
            {
                path: '/prices',
                Component: withAuth(Prices)
            }
        ]
    },
    {
        path: '/sender',
        Component: SenderDashboardLayout,
        children: [
            { index: true, element: <Navigate to="/sender/analytics" /> },
            ...generateRoutes(senderSidebarItems),
        ],

    },
    {
        path: '/receiver',
        Component: ReceiverDashboardLayout,
        children: [
            { index: true, element: <Navigate to="/receiver/analytics" /> },
            ...generateRoutes(receiverSidebarItems),
        ],

    },
    {
        path: '/register',
        Component: Register
    },
    {
        path: '/login',
        Component: Login
    }
])