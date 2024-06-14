import { Icon } from "@iconify/react/dist/iconify.js";
import {
    Button,
    Checkbox,
    Dialog,
    DialogBody,
    DialogFooter,
    DialogHeader,
    IconButton,
    Input,
    Typography,
} from "@material-tailwind/react";
import React, { useState, useEffect } from "react";
import { servicesList } from "../../../services/api/api";

const AddRolesDialog = ({ open, handleOpen, setValues }) => {
    const [selectedRoles, setSelectedRoles] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [services, setServices] = useState([]);

    const handleCheckboxChange = (role) => {
        setSelectedRoles((prevRoles) =>
            prevRoles.includes(role)
                ? prevRoles.filter((r) => r !== role)
                : [...prevRoles, role],
        );
    };

    const handleAddRoles = () => {
        const res = selectedRoles.map((item, index) => ({
            id: index,
            jobTitle: item.job_title,
            americaSalary: item.north_america_price,
            phSalary: item.philippines_price,
            quantity: 1,
        }));

        setValues(res);
        handleOpen(false);
        setSelectedRoles([]);
    };

    const filteredRoles = services?.filter((role) =>
        role.job_title.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    const getServiceList = async () => {
        const { data, ok } = await servicesList("sort_by=asc");

        if (ok) {
            setServices(data?.data);
        }
    };

    useEffect(() => {
        if (open) getServiceList();
    }, [open]);

    return (
        <Dialog
            open={open}
            handler={handleOpen}
            size="sm"
            className="3xl:flex 3xl:flex-col 3xl:gap-12 !bg-gradient-card"
        >
            <DialogHeader className="flex flex-row justify-between">
                <Typography variant="h4" color="white">
                    Add New Role
                </Typography>
                <IconButton
                    variant="text"
                    className="hover:!bg-none"
                    onClick={() => handleOpen(false)}
                >
                    <Icon
                        className=" 3xl:h-10 3xl:w-10 h-8 w-9  text-primary-500"
                        icon="solar:close-circle-bold-duotone"
                        style={{ color: "#286cbf" }}
                    />
                </IconButton>
            </DialogHeader>
            <DialogBody className="">
                <Input
                    placeholder="Search Roles"
                    icon={
                        <Icon
                            icon="solar:magnifer-bold-duotone"
                            className=" h-6 w-6  text-primary-500"
                        />
                    }
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className=" 3xl:h-14 3xl:placeholder:text-[18px] 3xl:text-[18px] !w-full !border-none bg-white text-[#404252]  placeholder:text-[12px] placeholder:text-[#404252] placeholder:opacity-100"
                    containerProps={{
                        className: "3xl:h-14 3xl:flex 3xl:justify-center",
                    }}
                    labelProps={{
                        className: "hidden",
                    }}
                />
                <ul className=" 3xl:h-[400px]  h-[300px] overflow-y-auto overflow-x-hidden">
                    {filteredRoles.map((role, index) => (
                        <li
                            key={index}
                            className="flex items-center justify-between text-white"
                        >
                            <Typography variant="paragraph">
                                {role.job_title}
                            </Typography>
                            <Checkbox
                                className="3xl:h-[28px] 3xl:w-[28px]"
                                color="blue"
                                checked={selectedRoles.includes(role)} // Control checked state
                                onChange={() => handleCheckboxChange(role)} // Pass the role object
                            />
                        </li>
                    ))}
                </ul>
            </DialogBody>
            <DialogFooter>
                <Button
                    variant="gradient"
                    onClick={handleAddRoles}
                    className="3xl:!h-[70px] 3xl:text-[24px] flex !w-full !justify-center"
                    // className="flex w-full !justify-center"
                    disabled={selectedRoles.length > 0 ? false : true}
                >
                    Add Selected Roles
                </Button>
            </DialogFooter>
        </Dialog>
    );
};

export default AddRolesDialog;
