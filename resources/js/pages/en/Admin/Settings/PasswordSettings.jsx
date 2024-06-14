import { Icon } from "@iconify/react/dist/iconify.js";
import {
    Button,
    Card,
    IconButton,
    Input,
    Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { updatePassword } from "../../../../services/api/api";
import toast from "react-hot-toast";
import { useUserInfoStore } from "../../../../services/state/store";
import { handleApiErrors } from "../../../../utils/helpers";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    old_password: z
        .string()
        .min(8, { message: "Old password must be at least 8 characters long" }),
    new_password: z
        .string()
        .min(8, { message: "New password must be at least 8 characters long" }),
    new_password_confirmation: z.string().min(8, {
        message: "Password confirmation must be at least 8 characters long",
    }),
});

export const PasswordSettings = () => {
    const [disableFieldsPassword, setDisabledFieldsPassword] = useState(true);
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showRetypePassword, setShowRetypePassword] = useState(false);

    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const [password, setPassword] = useState({
        old_password: "",
        new_password: "",
        new_password_confirmation: "",
    });

    const { token } = useUserInfoStore();

    const onSubmit = async (params) => {
        const { data, ok } = await updatePassword(params, token);

        if (ok) {
            toast.success(data?.message ?? "Updated Successfully");
            reset(); // Clear the form after successful update
            handleDisabledFieldsPassword(); // Disable fields again
        } else {
            handleApiErrors(data);
        }
    };

    const handleDisabledFieldsPassword = () => {
        setDisabledFieldsPassword(!disableFieldsPassword);

        if (!disableFieldsPassword) {
            reset({
                old_password: "",
                new_password: "",
                new_password_confirmation: "",
            });
        }
    };

    return (
        <Card className="flex flex-col w-full gap-24 p-32">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col w-full gap-24"
            >
                <div className="flex flex-col gap-8">
                    <Typography variant="h5" color="black">
                        Password
                    </Typography>
                    <Typography variant="paragraph" color="gray">
                        Update your existing password.
                    </Typography>
                </div>
                {/* OLD PASSWORD */}
                <div className="flex flex-col gap-16">
                    <div className="flex flex-col w-full gap-6">
                        <Typography
                            variant="small"
                            className="text-[14px] font-bold"
                            color="black"
                        >
                            Old Password
                        </Typography>
                        <Input
                            {...register("old_password")}
                            label="Old Password"
                            disabled={disableFieldsPassword}
                            labelProps={{ className: "hidden" }}
                            className="!w-full !border-[#CFD8DC] bg-white text-[#404252] placeholder:text-[12px] placeholder:text-[#404252] placeholder:opacity-100"
                            type={showOldPassword ? "text" : "password"}
                            icon={
                                <IconButton
                                    className="h-[20px] w-[20px] p-0 hover:!bg-transparent focus:!bg-transparent"
                                    variant="text"
                                    disabled={disableFieldsPassword}
                                    onClick={() =>
                                        setShowOldPassword((prev) => !prev)
                                    }
                                >
                                    {showOldPassword ? (
                                        <Icon
                                            icon="solar:eye-bold-duotone"
                                            width={"20px"}
                                            style={{ color: "#404252" }}
                                        />
                                    ) : (
                                        <Icon
                                            icon="solar:eye-closed-bold"
                                            width={"20px"}
                                            style={{ color: "#404252" }}
                                        />
                                    )}
                                </IconButton>
                            }
                            size="lg"
                        />
                        {errors.old_password && (
                            <Typography
                                variant="small"
                                className="text-[12px] font-normal text-danger-500"
                                color="red"
                            >
                                {errors.old_password.message}
                            </Typography>
                        )}
                    </div>

                    {/* NEW PASSWORD */}
                    <div className="lg:flex-row flex flex-col gap-16">
                        <div className="flex flex-col w-full gap-6">
                            <Typography
                                variant="small"
                                className="text-[14px] font-bold"
                                color="black"
                            >
                                New Password
                            </Typography>
                            <Input
                                {...register("new_password")}
                                label="Old Password"
                                disabled={disableFieldsPassword}
                                labelProps={{ className: "hidden" }}
                                className="!w-full !border-[#CFD8DC] bg-white text-[#404252] placeholder:text-[12px] placeholder:text-[#404252] placeholder:opacity-100"
                                type={showNewPassword ? "text" : "password"}
                                icon={
                                    <IconButton
                                        className="h-[20px] w-[20px] p-0 hover:!bg-transparent focus:!bg-transparent"
                                        variant="text"
                                        disabled={disableFieldsPassword}
                                        onClick={() =>
                                            setShowNewPassword((prev) => !prev)
                                        }
                                    >
                                        {showNewPassword ? (
                                            <Icon
                                                icon="solar:eye-bold-duotone"
                                                width={"20px"}
                                                style={{ color: "#404252" }}
                                            />
                                        ) : (
                                            <Icon
                                                icon="solar:eye-closed-bold"
                                                width={"20px"}
                                                style={{ color: "#404252" }}
                                            />
                                        )}
                                    </IconButton>
                                }
                                size="lg"
                            />
                            {errors.new_password && (
                                <Typography
                                    variant="small"
                                    className="text-[12px] font-normal text-danger-500"
                                    color="red"
                                >
                                    {errors.new_password.message}
                                </Typography>
                            )}
                        </div>
                        {/* Re-Type New Password */}
                        <div className="flex flex-col w-full gap-6">
                            <Typography
                                variant="small"
                                className="text-[14px] font-bold"
                                color="black"
                            >
                                Re-Type New Password
                            </Typography>
                            <Input
                                {...register("new_password_confirmation")}
                                label="Old Password"
                                disabled={disableFieldsPassword}
                                labelProps={{ className: "hidden" }}
                                className="!w-full !border-[#CFD8DC] bg-white text-[#404252] placeholder:text-[12px] placeholder:text-[#404252] placeholder:opacity-100"
                                type={showRetypePassword ? "text" : "password"}
                                icon={
                                    <IconButton
                                        className="h-[20px] w-[20px] p-0 hover:!bg-transparent focus:!bg-transparent"
                                        variant="text"
                                        disabled={disableFieldsPassword}
                                        onClick={() =>
                                            setShowRetypePassword(
                                                (prev) => !prev,
                                            )
                                        }
                                    >
                                        {showRetypePassword ? (
                                            <Icon
                                                icon="solar:eye-bold-duotone"
                                                width={"20px"}
                                                style={{ color: "#404252" }}
                                            />
                                        ) : (
                                            <Icon
                                                icon="solar:eye-closed-bold"
                                                width={"20px"}
                                                style={{ color: "#404252" }}
                                            />
                                        )}
                                    </IconButton>
                                }
                                size="lg"
                            />
                            {errors.new_password_confirmation && (
                                <Typography
                                    variant="small"
                                    className="text-[12px] font-normal text-danger-500"
                                    color="red"
                                >
                                    {errors.new_password_confirmation.message}
                                </Typography>
                            )}
                        </div>
                    </div>
                </div>

                {disableFieldsPassword ? (
                    <Button
                        variant="filled"
                        onClick={() => handleDisabledFieldsPassword()}
                    >
                        Update Password
                    </Button>
                ) : (
                    <>
                        <div className="flex justify-between">
                            <Button
                                variant="outlined"
                                onClick={() => handleDisabledFieldsPassword()}
                            >
                                Cancel
                            </Button>
                            <Button variant="filled" type="submit">
                                {isSubmitting
                                    ? "Updating Password..."
                                    : "Update Password"}
                            </Button>
                        </div>
                    </>
                )}
            </form>
        </Card>
    );
};
