import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const PageLayout = lazy(() => import("./../pages/en/Layout/PageLayout"));
const ModifyRolesPage = lazy(
    () => import("../pages/en/Admin/ModifyRoles/ModifyRolesPage"),
);

const CalculatorPage = lazy(
    () => import("./../pages/en/Calculator/CalculatorPage"),
);
const SignInPage = lazy(() => import("../pages/en/Auth/SignInPage"));
const SettingsPage = lazy(
    () => import("../pages/en/Admin/Settings/SettingsPage"),
);

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <CalculatorPage />
            </Suspense>
        ),
        errorElement: (
            <Suspense fallback={<div>Loading...</div>}>
                <div>Page Not Found 404</div>
            </Suspense>
        ),
    },
    {
        path: "login",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <SignInPage />
            </Suspense>
        ),
    },
    {
        path: "/admin",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <PageLayout />
            </Suspense>
        ),
        children: [
            {
                path: "",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <ModifyRolesPage />
                    </Suspense>
                ),
                index: true,
            },
            {
                path: "settings",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <SettingsPage />
                    </Suspense>
                ),
                index: true,
            },
        ],
    },
]);

export const LeftNavRoutes = [
    {
        path: "/admin",
        pathName: "Modify Roles",
        icon: (
            <Icon
                className="3xl:w-10 3xl:h-10 h-6 w-6"
                icon="solar:user-plus-rounded-bold-duotone"
            />
        ),
    },
    {
        path: "/admin/settings",
        pathName: "Settings",
        icon: (
            <Icon
                className="3xl:w-10 3xl:h-10 h-6 w-6 "
                icon="solar:settings-bold-duotone"
            />
        ),
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <SettingsPage />
            </Suspense>
        ),
    },
];
