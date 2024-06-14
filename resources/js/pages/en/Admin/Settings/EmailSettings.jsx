import { useEffect } from "react";
import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { updateEmail } from "../../../../services/api/api";
import toast from "react-hot-toast";
import { useUserInfoStore } from "../../../../services/state/store";
import { handleApiErrors } from "../../../../utils/helpers";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    new_email: z.string().email(),
});

export const EmailSettings = () => {
    const [disableFieldsEmail, setDisabledFieldsEmail] = useState(true);
    const { token, email, addEmail } = useUserInfoStore();

    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(schema),
    });

    const handleDisabledFieldsEmail = () => {
        setDisabledFieldsEmail(!disableFieldsEmail);
    };

    const onSubmit = async (params) => {
        const { data, ok } = await updateEmail(
            {
                current_email: email,
                new_email: params.new_email,
            },
            token,
        );

        if (ok) {
            toast.success(data?.message ?? "Updated Successfully");
            addEmail(data.email); // Update the email in the store
            reset({ new_email: "" }); // Reset the form with the new email
            handleDisabledFieldsEmail(); // Disable the input field
        } else {
            handleApiErrors(data);
        }
    };

    useEffect(() => {
        reset({ current_email: email });
    }, [email, reset]);

    return (
        <Card className="flex w-full flex-col gap-24 p-32">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex w-full flex-col gap-24"
            >
                <div className="flex flex-col gap-4">
                    <Typography variant="h5" color="black">
                        Email Address
                    </Typography>
                    <Typography variant="paragraph" color="gray">
                        Update your existing email address.
                    </Typography>
                </div>
                <div className="flex flex-col gap-16">
                    <div className="flex flex-col gap-16">
                        {/* OLD EMAIL ADDRESS */}
                        <div className="flex w-full flex-col gap-6">
                            <Typography
                                variant="small"
                                className="text-[14px] font-bold"
                                color="black"
                            >
                                Current Email Address
                            </Typography>
                            <Input
                                type="text"
                                name="email_address"
                                value={email ?? "example@example.com"}
                                disabled
                                containerProps={{
                                    className: "3xl:h-14",
                                }}
                                className="!w-full !border-[#CFD8DC] bg-white text-[#404252] placeholder:text-[12px] placeholder:text-[#404252] placeholder:opacity-100 3xl:h-14 3xl:text-[18px] 3xl:placeholder:text-[18px]"
                                labelProps={{ className: "hidden" }}
                            />
                        </div>

                        {/* NEW EMAIL ADDRESS */}
                        <div className="flex w-full flex-col gap-6">
                            <Typography
                                variant="small"
                                className="text-[14px] font-bold"
                                color="black"
                            >
                                New Email Address
                            </Typography>
                            <Input
                                {...register("new_email")}
                                containerProps={{
                                    className: "3xl:h-14",
                                }}
                                disabled={disableFieldsEmail}
                                className="!w-full !border-[#CFD8DC] bg-white text-[#404252] placeholder:text-[12px] placeholder:text-[#404252] placeholder:opacity-100 3xl:h-14 3xl:text-[18px] 3xl:placeholder:text-[18px]"
                                labelProps={{ className: "hidden" }}
                            />
                            {errors.new_email && (
                                <Typography
                                    variant="small"
                                    className={`${disableFieldsEmail ? "hidden" : "block"} text-[12px] font-normal text-danger-500`}
                                    color="red"
                                >
                                    {errors.new_email.message}
                                </Typography>
                            )}
                        </div>
                    </div>
                </div>
                {disableFieldsEmail ? (
                    <Button
                        variant="filled"
                        onClick={() => handleDisabledFieldsEmail()}
                    >
                        Update Email
                    </Button>
                ) : (
                    <>
                        <div className="flex flex-col-reverse gap-16 md:flex-row md:justify-between">
                            <Button
                                variant="outlined"
                                onClick={() => handleDisabledFieldsEmail()}
                            >
                                Cancel
                            </Button>
                            <Button variant="filled" type="submit">
                                {isSubmitting
                                    ? "Updating Email..."
                                    : "Update Email"}
                            </Button>
                        </div>
                    </>
                )}
            </form>
        </Card>
    );
};
