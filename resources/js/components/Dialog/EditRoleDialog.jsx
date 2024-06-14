import { useState, useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
    Button,
    Dialog,
    IconButton,
    Input,
    Typography,
} from "@material-tailwind/react";
import {
    useModifyRolesStore,
    useUserInfoStore,
} from "../../services/state/store";
import { editService } from "../../services/api/api";
import toast from "react-hot-toast";
import { handleApiErrors } from "../../utils/helpers";

export const EditRoleDialog = ({
    open,
    handleOpen,
    tableRows,
    setTableRows,
}) => {
    const [jobTitle, setJobTitle] = useState("");
    const [americaRate, setAmericaRate] = useState("");
    const [phRate, setPhRate] = useState("");

    const { token } = useUserInfoStore();
    const { info } = useModifyRolesStore();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { data, ok } = await editService(
            {
                job_title: jobTitle,
                north_america_price: americaRate,
                philippines_price: phRate,
            },
            info.id,
            token,
        );

        if (ok) {
            handleSaveEditedVal(data);
            handleOpen();
            toast.success("Edited");
        } else {
            handleApiErrors(data);
        }
    };

    const handleSaveEditedVal = (updatedRole) => {
        const updatedRoles = tableRows.map((role) =>
            role.id === updatedRole.id ? updatedRole : role,
        );
        setTableRows(updatedRoles);
        handleClose();
    };

    useEffect(() => {
        if (open) {
            setJobTitle(info.job_title || "");
            setAmericaRate(info.north_america_price || "");
            setPhRate(info.philippines_price || "");
        }
    }, [open, info]);

    return (
        <Dialog
            open={open}
            handler={handleOpen}
            size="xs"
            className="3xl:p-48 p-24 bg-white"
        >
            <form
                className="flex flex-col items-center w-full gap-24"
                onSubmit={handleSubmit}
            >
                <div className="flex justify-between w-full">
                    <div className=" flex flex-col w-full gap-8">
                        <Typography variant="h5" color="black">
                            Edit Role
                        </Typography>
                        <Typography variant="paragraph" color="gray">
                            Edit an existing Role.
                        </Typography>
                    </div>
                    <IconButton
                        variant="text"
                        size="sm"
                        onClick={() => handleOpen()}
                        className="hover:bg-transparent focus:ring-0 p-8 border-none"
                    >
                        <Icon
                            icon="solar:close-circle-bold-duotone"
                            className="text-primary-500 3xl:h-10 3xl:w-10 w-8 h-8"
                        />
                    </IconButton>
                </div>
                <div className="flex flex-col w-full gap-16">
                    <div className="flex flex-col w-full gap-6">
                        <Typography
                            variant="small"
                            className="text-[14px] font-bold 3xl:text-[20px]"
                            color="black"
                        >
                            Job Title
                        </Typography>
                        <Input
                            type="text"
                            containerProps={{
                                className: "3xl:h-14",
                            }}
                            placeholder={info.job_title}
                            value={jobTitle}
                            onChange={(e) => setJobTitle(e.target.value)}
                            className="!w-full !border-[#CFD8DC] bg-white text-[#404252] placeholder:text-[12px] placeholder:text-[#404252] placeholder:opacity-100 3xl:text-[24px]"
                            labelProps={{ className: "hidden" }}
                        />
                    </div>
                    <div className="flex flex-col w-full gap-6">
                        <Typography
                            variant="small"
                            className="text-[14px] font-bold 3xl:text-[20px]"
                            color="black"
                        >
                            North America Salary
                        </Typography>
                        <Input
                            type="text"
                            containerProps={{
                                className: "3xl:h-14",
                            }}
                            placeholder={info.north_america_price}
                            value={americaRate}
                            onChange={(e) => setAmericaRate(e.target.value)}
                            className="!w-full  !border-[#CFD8DC] bg-white text-[#404252] placeholder:text-[12px] placeholder:text-[#404252] placeholder:opacity-100 3xl:text-[24px]"
                            labelProps={{ className: "hidden" }}
                        />
                    </div>
                    <div className="flex flex-col w-full gap-6">
                        <Typography
                            variant="small"
                            className="text-[14px] font-bold 3xl:text-[20px]"
                            color="black"
                        >
                            Philippine Salary
                        </Typography>
                        <Input
                            type="text"
                            containerProps={{
                                className: "3xl:h-14",
                            }}
                            placeholder={info.philippines_price}
                            value={phRate}
                            onChange={(e) => setPhRate(e.target.value)}
                            className="!w-full  !border-[#CFD8DC] bg-white text-[#404252] placeholder:text-[12px] placeholder:text-[#404252] placeholder:opacity-100 3xl:text-[24px]"
                            labelProps={{ className: "hidden" }}
                        />
                    </div>
                </div>
                <Button
                    variant="filled"
                    color="blue"
                    type="submit"
                    className=" !w-full"
                    onClick={() => handleOpen()}
                >
                    Save Role
                </Button>
            </form>
        </Dialog>
    );
};
