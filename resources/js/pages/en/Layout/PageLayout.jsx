import { Navigate, Outlet, useNavigate } from "react-router-dom";
import SidebarLayout from "./SidebarLayout";
import { useEffect } from "react";
import { useUserInfoStore } from "../../../services/state/store";

const PageLayout = () => {
    const navigate = useNavigate();
    const { token } = useUserInfoStore();

    useEffect(() => {
        if (token) {
            navigate("/admin");
        }
    }, [token, navigate]);

    return !token ? (
        <Navigate to="/login" replace />
    ) : (
        <div className="bg-main-bg-admin lg:flex-row flex flex-col w-full h-screen overflow-hidden">
            <SidebarLayout />
            <Outlet />
        </div>
    );
};

export default PageLayout;
