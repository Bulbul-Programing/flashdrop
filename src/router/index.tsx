import App from "@/App";
import SenderDashboardLayout from "@/components/layout/SenderDashboardLayout";
import HomePage from "@/pages/Home/HomePage";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import { generateRoutes } from "@/utils/generateRoutes";
import { withAuth } from "@/utils/withAuth";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { senderSidebarItems } from "./senderSidebarItems";
import { receiverSidebarItems } from "./receiverSidebarItems";
import ReceiverDashboardLayout from "@/components/layout/ReceiverDashboardLayout";
import { adminSidebarItems } from "./adminSidebarItems";
import AdminDashboardLayout from "@/components/layout/AdminDashboardLayout";
import ParcelStatus from "@/pages/ParcelStatus/ParcelStatus";
import AboutUs from "@/pages/About Us/AboutUs";
import ContactUs from "@/pages/Contact Us/ContactUs";
import TrackingPage from "@/pages/Tracking/TrackingPage";
import PrivacyAndPolicy from "@/pages/Privacy/PrivacyAndPolicy";


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
                path: '/tracking',
                Component: TrackingPage
            },
            {
                path: '/aboutUs',
                Component: AboutUs
            },
            {
                path: '/contactUs',
                Component: ContactUs
            },
            {
                path: '/privacy',
                Component: PrivacyAndPolicy
            },
            {
                path: '/parcelStatus/:parcelId',
                Component: withAuth(ParcelStatus)
            }
        ]
    },
    {
        path: '/admin',
        Component: withAuth(AdminDashboardLayout),
        children: [
            { index: true, element: <Navigate to="/admin/analytics" /> },
            ...generateRoutes(adminSidebarItems),
        ],

    },
    {
        path: '/sender',
        Component: withAuth(SenderDashboardLayout),
        children: [
            { index: true, element: <Navigate to="/sender/analytics" /> },
            ...generateRoutes(senderSidebarItems),
        ],

    },
    {
        path: '/receiver',
        Component: withAuth(ReceiverDashboardLayout),
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