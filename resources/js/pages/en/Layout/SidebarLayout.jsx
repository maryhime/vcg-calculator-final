import {
    Card,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemPrefix,
    Typography,
} from "@material-tailwind/react";
import { logout } from "../../../services/api/api";
import { NavLink, useNavigate } from "react-router-dom";
import VCGLogo from "../../../assets/VCGLogo";
import { Icon } from "@iconify/react/dist/iconify.js";
import { LeftNavRoutes } from "../../../routes/routes";
import toast from "react-hot-toast";
import React, { useState } from "react";
import { useUserInfoStore } from "../../../services/state/store";
import { handleApiErrors } from "../../../utils/helpers";

const SidebarLayout = () => {
    const [open, setOpen] = useState(0);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const navigate = useNavigate();
    const { clearToken, token } = useUserInfoStore();

    const handleLogout = async () => {
        const { data, ok } = await logout(token);

        if (ok) {
            toast.success(data.message ?? "Success");
            navigate("/login");
            clearToken();
        } else {
            handleApiErrors(data);
        }
    };
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);

    return (
        <>
            {/* MOBILE MENU */}
            <div
                className={`${isDrawerOpen ? "overflow-hidden" : "overflow-auto"} flex  w-full items-center justify-between px-24 py-24 md:px-48 md:py-24 lg:hidden`}
            >
                <VCGLogo className={"h-auto w-[75px] md:w-[100px]"} />
                <IconButton variant="text" size="sm" onClick={openDrawer}>
                    {isDrawerOpen ? (
                        <Icon
                            icon="solar:close-circle-bold-duotone"
                            className="h-8 w-8 text-primary-500"
                        />
                    ) : (
                        <Icon
                            icon="solar:hamburger-menu-line-duotone"
                            className="h-8 w-8 text-primary-500"
                        />
                    )}
                </IconButton>

                <Drawer
                    open={isDrawerOpen}
                    placement="right"
                    onClose={closeDrawer}
                    overlayProps={{
                        className: "!overflow-hidden",
                    }}
                >
                    <Card className="flex h-screen w-full border-spacing-5 flex-col items-center gap-14 rounded-none border-r border-dashed border-[#E4DEDE] px-16 pb-24 pt-48 ">
                        <VCGLogo className={"w-full"} />
                        <List className="flex h-full w-full flex-col justify-between">
                            <div className="flex flex-col gap-16">
                                {LeftNavRoutes.map((item, index) => (
                                    <NavLink
                                        to={item.path}
                                        key={index}
                                        end
                                        className={({ isActive }) =>
                                            isActive
                                                ? " rounded bg-primary-100 text-primary-500"
                                                : "text-body"
                                        }
                                    >
                                        <ListItem className="group" key={index}>
                                            <ListItemPrefix>
                                                {item.icon}
                                            </ListItemPrefix>
                                            {item.pathName}
                                        </ListItem>
                                    </NavLink>
                                ))}
                            </div>

                            <ListItem className="group" onClick={handleLogout}>
                                <ListItemPrefix>
                                    <Icon
                                        className="h-6 w-6 text-body-text-admin group-hover:text-primary-500 group-focus:text-primary-500 group-active:text-primary-500"
                                        icon="solar:logout-3-bold-duotone"
                                    />
                                </ListItemPrefix>
                                Log Out
                            </ListItem>
                        </List>
                    </Card>
                </Drawer>
            </div>

            {/* SIDEBAR DESKTOP */}
            <Card className="hidden h-screen w-full max-w-[254px] border-spacing-5 flex-col items-center gap-14 rounded-none border-r border-dashed border-[#E4DEDE] px-24 pb-24 pt-48 lg:flex 3xl:max-w-[450px] 3xl:gap-20 3xl:py-[56px] ">
                <VCGLogo className={"w-[110px] md:w-[185px] 3xl:w-[350px]"} />
                <List className="flex h-full flex-col justify-between 3xl:w-full">
                    <div className="flex flex-col gap-16">
                        {LeftNavRoutes.map((item, index) => (
                            <NavLink
                                to={item.path}
                                key={index}
                                end
                                className={({ isActive }) =>
                                    isActive
                                        ? " rounded-8 bg-primary-100 text-primary-500 3xl:rounded-[12px]"
                                        : "text-body"
                                }
                            >
                                <ListItem
                                    className="hover:bg-primary-100"
                                    key={index}
                                >
                                    <ListItemPrefix>{item.icon}</ListItemPrefix>
                                    <Typography variant="h6">
                                        {item.pathName}
                                    </Typography>
                                </ListItem>
                            </NavLink>
                        ))}
                    </div>

                    <ListItem
                        className="group hover:bg-primary-100"
                        onClick={handleLogout}
                    >
                        <ListItemPrefix>
                            <Icon
                                className="h-6 w-6 text-body-text-admin group-hover:text-primary-500 group-focus:text-primary-500 group-active:text-primary-500 3xl:h-10 3xl:w-10"
                                icon="solar:logout-3-bold-duotone"
                            />
                        </ListItemPrefix>
                        <Typography variant="h6">Log Out</Typography>
                    </ListItem>
                </List>
            </Card>
        </>
    );
};

export default SidebarLayout;
