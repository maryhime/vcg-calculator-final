import { Icon } from "@iconify/react/dist/iconify.js";
import {
    Button,
    Input,
    Dialog,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { debounce } from "lodash";
import { useCallback, useState } from "react";
import { addService } from "../../../../services/api/api";
import { useUserInfoStore } from "../../../../services/state/store";
import {
    handleApiErrors,
    handleApiErrorsWithMessage,
} from "../../../../utils/helpers";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
    job_title: z
        .string()
        .min(3, { message: "Job title must be at least 3 characters long" }),
    north_america_price: z
        .string() // Receive input as a string
        .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {
            message: "North America price must be a positive number or zero",
        })
        .transform(parseFloat), // Convert valid string to a number
    philippines_price: z
        .string()
        .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {
            message: "Philippines price must be a positive number or zero",
        })
        .transform(parseFloat),
});

export const ModifyRolesTableActions = ({
    setSearchQuery,
    onAddNewTableRow,
}) => {
    const [openAddDialog, setOpenAddDialog] = useState(false);

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const { token } = useUserInfoStore();

    const handleSearchChange = useCallback(
        debounce((event) => {
            setSearchQuery(event.target.value);
        }, 300),
        [],
    );

    const onSubmit = async (params) => {
        const { data, ok } = await addService(params, token);

        if (ok) {
            onAddNewTableRow(data);
            setOpenAddDialog(!openAddDialog);
        } else {
            setError("root", {
                message: data.error,
            });
        }
    };

    return (
        <div className="md:flex-row md:items-center md:justify-between flex flex-col w-full gap-24">
            <Input
                placeholder="Search Roles"
                icon={
                    <Icon
                        icon="solar:magnifer-bold-duotone"
                        className=" text-primary-500 3xl:hidden w-6 h-6"
                    />
                }
                className="!w-full border-[1px] border-primary-100  bg-white text-[#404252] placeholder:text-[12px] placeholder:text-[#404252] placeholder:opacity-100 focus:border-[1px] focus:!border-primary-500 3xl:h-16 3xl:text-[18px] 3xl:placeholder:text-[20px] "
                containerProps={{
                    className:
                        "3xl:h-16 3xl:flex 3xl:justify-center 3xl:!w-[415px]",
                }}
                labelProps={{
                    className: "hidden",
                }}
                onChange={handleSearchChange}
            />
            <Button
                variant="filled"
                className="flex items-center lg:w-fit 3xl:!h-[60px] 3xl:text-[22px]"
                onClick={() => setOpenAddDialog(!openAddDialog)}
            >
                <Icon icon="ph:plus-bold" className="3xl:h-8 3xl:w-8 w-6 h-6" />
                Add Role
            </Button>

            {/* ADD DIALOG */}

            <Dialog
                open={openAddDialog}
                handler={() => setOpenAddDialog(!openAddDialog)}
                size="xs"
                className=" p-24 bg-white"
            >
                <form
                    className="flex flex-col items-center gap-24"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="flex justify-between w-full">
                        <div className=" flex flex-col w-full gap-8">
                            <Typography variant="h5" color="black">
                                Add New Role
                            </Typography>
                            <Typography variant="paragraph" color="gray">
                                Add new role that can be displayed in the
                                calculator.
                            </Typography>
                        </div>
                        <IconButton
                            variant="text"
                            size="sm"
                            onClick={() => setOpenAddDialog(!openAddDialog)}
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
                                className="!w-full !border-[#CFD8DC] bg-white text-[#404252] placeholder:text-[12px] placeholder:text-[#404252] placeholder:opacity-100"
                                labelProps={{ className: "hidden" }}
                                {...register("job_title")}
                            />
                            {errors.job_title && (
                                <Typography
                                    variant="small"
                                    className="text-[12px] font-normal text-danger-500"
                                    color="red"
                                >
                                    {errors.job_title.message}
                                </Typography>
                            )}
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
                                className="!w-full !border-[#CFD8DC] bg-white text-[#404252] placeholder:text-[12px] placeholder:text-[#404252] placeholder:opacity-100"
                                labelProps={{ className: "hidden" }}
                                {...register("north_america_price")}
                            />
                            {errors.north_america_price && (
                                <Typography
                                    variant="small"
                                    className="text-[12px] font-normal text-danger-500"
                                    color="red"
                                >
                                    {errors.north_america_price.message}
                                </Typography>
                            )}
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
                                className="!w-full !border-[#CFD8DC] bg-white text-[#404252] placeholder:text-[12px] placeholder:text-[#404252] placeholder:opacity-100"
                                labelProps={{ className: "hidden" }}
                                {...register("philippines_price")}
                            />
                            {errors.philippines_price && (
                                <Typography
                                    variant="small"
                                    className="text-[12px] font-normal text-danger-500"
                                    color="red"
                                >
                                    {errors.philippines_price.message}
                                </Typography>
                            )}
                        </div>
                    </div>
                    <Button
                        variant="filled"
                        color="blue"
                        className="!w-full"
                        type="submit"
                    >
                        {isSubmitting ? "Adding New Role..." : "Add New Role"}
                    </Button>
                    {errors.root && (
                        <div className="text-red">{errors.root.message}</div>
                    )}
                </form>
            </Dialog>
        </div>
    );
};
