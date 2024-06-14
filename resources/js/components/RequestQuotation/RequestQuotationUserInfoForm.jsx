import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import { useRequestQuotation } from "../../services/state/store";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const classNameInput =
    "!w-full !border-none bg-white text-[#404252] placeholder:text-[12px] placeholder:text-[#404252] placeholder:opacity-100";

const schema = z.object({
    first_name: z.string().min(1, "First name is required"),
    last_name: z.string().min(1, "Last name is required"),
    email: z.string().email({ message: "Invalid email address" }),
    company_name: z.string().min(1, "Company name is required"),
    mobile_number: z
        .string()
        .regex(/^\d+$/, { message: "Mobile number must contain only digits" }),
    concern: z
        .string()
        .max(255, { message: "Concern must be less than 255 character/s" }),
});

export const RequestQuotationUserInfoForm = ({ handleNext }) => {
    const {
        register,
        handleSubmit,
        setError,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(schema),
    });
    const [concernValue, setConcernValue] = useState("");
    const setFirstName = useRequestQuotation((state) => state.setFirstName);
    const setLastName = useRequestQuotation((state) => state.setLastName);
    const setEmail = useRequestQuotation((state) => state.setEmail);
    const setCompanyName = useRequestQuotation((state) => state.setCompanyName);
    const setMobileNumber = useRequestQuotation(
        (state) => state.setMobileNumber,
    );
    const setConcern = useRequestQuotation((state) => state.setConcern);

    const handleConcernChange = (event) => {
        setConcernValue(event.target.value);
        setValue("concern", event.target.value); // Update form value
    };

    const onSubmit = async (params) => {
        setFirstName(params.first_name);
        setLastName(params.last_name);
        setEmail(params.email);
        setCompanyName(params.company_name);
        setMobileNumber(params.mobile_number);
        setConcern(params.concern);

        handleNext();
    };

    return (
        <form
            className="flex flex-col gap-16"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="flex flex-col gap-24 md:flex-row md:justify-between">
                <div className="flex w-full flex-col gap-6">
                    <Typography
                        variant="small"
                        className="text-[12px] font-bold"
                        color="white"
                    >
                        First Name
                    </Typography>
                    <Input
                        {...register("first_name")}
                        type="text"
                        placeholder="First Name"
                        className={classNameInput}
                        labelProps={{ className: "hidden" }}
                    />
                    {errors.first_name && (
                        <Typography
                            variant="small"
                            className="text-[12px] font-normal text-danger-500"
                            color="red"
                        >
                            {errors.first_name.message}
                        </Typography>
                    )}
                </div>
                <div className="flex w-full flex-col gap-6">
                    <Typography
                        variant="small"
                        className="text-[12px] font-bold"
                        color="white"
                    >
                        Last Name
                    </Typography>
                    <Input
                        {...register("last_name")}
                        type="text"
                        placeholder="Last Name"
                        className={classNameInput}
                        labelProps={{ className: "hidden" }}
                    />
                    {errors.last_name && (
                        <Typography
                            variant="small"
                            className="text-[12px] font-normal text-danger-500"
                            color="red"
                        >
                            {errors.last_name.message}
                        </Typography>
                    )}
                </div>
            </div>
            <div className="flex w-full flex-col gap-6">
                <Typography
                    variant="small"
                    className="text-[12px] font-bold"
                    color="white"
                >
                    Email Address
                </Typography>
                <Input
                    {...register("email")}
                    type="email"
                    placeholder="Email Address"
                    className={classNameInput}
                    labelProps={{ className: "hidden" }}
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
                    className="text-[12px] font-bold"
                    color="white"
                >
                    Company Name
                </Typography>
                <Input
                    {...register("company_name")}
                    type="text"
                    placeholder="Company Name"
                    className={classNameInput}
                    labelProps={{ className: "hidden" }}
                />
                {errors.company_name && (
                    <Typography
                        variant="small"
                        className="text-[12px] font-normal text-danger-500"
                        color="red"
                    >
                        {errors.company_name.message}
                    </Typography>
                )}
            </div>
            <div className="flex w-full flex-col gap-6">
                <Typography
                    variant="small"
                    className="text-[12px] font-bold"
                    color="white"
                >
                    Mobile Number
                </Typography>
                <Input
                    {...register("mobile_number")}
                    type="text"
                    placeholder="Mobile Number"
                    className={classNameInput}
                    labelProps={{ className: "hidden" }}
                />
                {errors.mobile_number && (
                    <Typography
                        variant="small"
                        className="text-[12px] font-normal text-danger-500"
                        color="red"
                    >
                        {errors.mobile_number.message}
                    </Typography>
                )}
            </div>
            <div className="flex w-full flex-col gap-6">
                <Typography
                    variant="small"
                    className="text-[12px] font-bold"
                    color="white"
                >
                    How Can We Help You?
                </Typography>
                <Textarea
                    value={concernValue}
                    onChange={handleConcernChange}
                    label="How Can We Help You?"
                    placeholder="How Can We Help You?"
                    name="message"
                    containerProps={{
                        className: "3xl:h-14",
                    }}
                    className="!w-full !border-none bg-white text-[#404252] placeholder:text-[12px] placeholder:text-[#404252] placeholder:opacity-100 3xl:h-14 3xl:text-[18px] 3xl:placeholder:text-[18px]"
                    labelProps={{ className: "hidden" }}
                />
                {errors.mobile_number && (
                    <Typography
                        variant="small"
                        className="text-[12px] font-normal text-danger-500"
                        color="red"
                    >
                        {errors.mobile_number.message}
                    </Typography>
                )}
            </div>
            <Button
                variant="gradient"
                className="flex !w-full !justify-center !capitalize  3xl:!h-[70px] 3xl:text-[24px]"
                type="submit"
            >
                {isSubmitting ? "Validating..." : "Next"}
            </Button>
        </form>
    );
};
