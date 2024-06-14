import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../../../services/api/api";
import VCGLogo from "../../../assets/VCGLogo";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    IconButton,
    Input,
    Typography,
} from "@material-tailwind/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import toast from "react-hot-toast";
import { useUserInfoStore } from "../../../services/state/store";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
    email: z.string().email(),
    password: z.string(),
});

const SignInPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const navigate = useNavigate();
    const { addEmail, addToken } = useUserInfoStore();

    const onSubmit = async (params) => {
        const { ok, data } = await login(params);

        if (ok) {
            addEmail(data.email);
            addToken(data.token);

            navigate("/admin");
            toast.success(data.message);
        } else {
            setError("root", {
                message: data.error,
            });
        }
    };

    return (
        <div className=" flex h-screen flex-col items-center justify-center bg-main-bg-admin p-24 lg:mx-auto">
            <div className="flex flex-col items-center gap-24 md:gap-32 xl:gap-48 3xl:gap-20">
                <VCGLogo
                    className={
                        "w-[180px] md:w-[230px] xl:w-[264.85px] 3xl:w-[430px]"
                    }
                />
                <div className=" flex flex-col items-center gap-24 3xl:gap-48">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Card className="gap flex flex-col gap-24 p-24 md:min-w-[436px] md:gap-32 md:p-32">
                            <div className="flex flex-col gap-4">
                                <Typography variant="h5" color="black">
                                    Sign In to Savings Calculator
                                </Typography>
                                <Typography variant="paragraph" color="black">
                                    Enter your email and password to sign in.
                                </Typography>
                            </div>

                            <CardBody className="flex w-full flex-col gap-16 p-0">
                                <div className="flex w-full flex-col gap-6">
                                    <Typography
                                        variant="small"
                                        className="text-[12px] font-bold 3xl:text-[20px]"
                                        color="black"
                                    >
                                        Email Address
                                    </Typography>
                                    <Input
                                        {...register("email")}
                                        label="Email"
                                        size="lg"
                                        containerProps={{
                                            className: "3xl:h-14",
                                        }}
                                        labelProps={{ className: "hidden" }}
                                        className=" !w-full !border-[#CFD8DC] bg-white text-[#404252] placeholder:text-[12px] placeholder:text-[#404252] placeholder:opacity-100 3xl:h-14 3xl:text-[20px] 3xl:placeholder:text-[18px]"
                                    />
                                    {errors.email && (
                                        <Typography
                                            variant="small"
                                            className="text-[12px] font-normal text-danger-500"
                                            color="red"
                                        >
                                            {errors.email.message}
                                        </Typography>
                                    )}
                                </div>

                                <div className="flex w-full flex-col gap-6">
                                    <Typography
                                        variant="small"
                                        className="text-[12px] font-bold 3xl:text-[20px]"
                                        color="black"
                                    >
                                        Password
                                    </Typography>
                                    <Input
                                        {...register("password")}
                                        label="Password"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        labelProps={{ className: "hidden" }}
                                        className="!w-full !border-[#CFD8DC] bg-white text-[#404252] placeholder:text-[12px] placeholder:text-[#404252] placeholder:opacity-100 "
                                        icon={
                                            <IconButton
                                                className="h-[20px] w-[20px] p-0 hover:!bg-transparent focus:!bg-transparent 3xl:h-[32px] 3xl:w-[32px]"
                                                variant="text"
                                                onClick={() =>
                                                    setShowPassword(
                                                        (prev) => !prev,
                                                    )
                                                }
                                            >
                                                {showPassword ? (
                                                    <Icon
                                                        icon="solar:eye-bold-duotone"
                                                        className="w-5h-5 3xl:h-[24px] 3xl:w-[24px]"
                                                        style={{
                                                            color: "#404252",
                                                        }}
                                                    />
                                                ) : (
                                                    <Icon
                                                        icon="solar:eye-closed-bold"
                                                        className="w-5h-5 3xl:h-[24px] 3xl:w-[24px]"
                                                        style={{
                                                            color: "#404252",
                                                        }}
                                                    />
                                                )}
                                            </IconButton>
                                        }
                                        size="lg"
                                    />
                                    {errors.password && (
                                        <Typography
                                            variant="small"
                                            className="text-[12px] font-normal text-danger-500"
                                            color="red"
                                        >
                                            {errors.password.message}
                                        </Typography>
                                    )}
                                </div>
                            </CardBody>
                            <CardFooter className="p-0">
                                <Button
                                    variant="filled"
                                    type="submit"
                                    className="!w-full  3xl:!h-[56px] 3xl:text-[20px]"
                                >
                                    {isSubmitting ? "Signing In..." : "Sign In"}
                                </Button>
                                {errors.root && (
                                    <div className="text-red">
                                        {errors.root.message}
                                    </div>
                                )}
                            </CardFooter>
                        </Card>
                    </form>

                    {/* Go back to calculator page */}
                    <NavLink to="/" replace>
                        <Button
                            variant="text"
                            className="flex w-fit 3xl:!h-[56px]  3xl:text-[22px]"
                        >
                            <Icon
                                icon="solar:round-arrow-left-bold-duotone"
                                className="h-5 w-5 text-primary-500 3xl:h-8 3xl:w-8"
                            />
                            Go to Calculator
                        </Button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;
