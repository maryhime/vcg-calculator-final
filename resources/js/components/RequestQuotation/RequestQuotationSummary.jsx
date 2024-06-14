import { Button, Typography } from "@material-tailwind/react";
import { formatMoney } from "../../utils/helpers";
import { useRequestQuotation } from "../../services/state/store";
import { useForm } from "react-hook-form";
import { requestQuotation } from "../../services/api/api";

export const RequestQuotationSummary = ({
    handlePrevious,
    setEmailSent,
    tableRows,
    total,
}) => {
    const firstName = useRequestQuotation((state) => state.firstName);
    const lastName = useRequestQuotation((state) => state.lastName);
    const email = useRequestQuotation((state) => state.email);
    const companyName = useRequestQuotation((state) => state.companyName);
    const mobileNumber = useRequestQuotation((state) => state.mobileNumber);
    const concern = useRequestQuotation((state) => state.concern);

    const {
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async () => {
        const { data, ok } = await requestQuotation({
            first_name: firstName,
            last_name: lastName,
            email: email,
            company_name: companyName,
            company_number: mobileNumber,
            concern: concern,
            table_rows: tableRows,
            summary: {
                totalUsCost: formatMoney(total.totalUsCost),
                totalVcgCost: formatMoney(total.totalVcgCost),
                totalSavings: formatMoney(total.totalSavings),
            },
        });

        if (ok) {
            setEmailSent(true);
        } else {
            setError("root", {
                message: data.error,
            });
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-24">
                    <div className="h-52 flex flex-col gap-16 pr-16 overflow-auto">
                        {tableRows.map((row, index) => (
                            <div
                                key={index}
                                className="flex flex-row justify-between"
                            >
                                <Typography
                                    variant="paragraph"
                                    className="font-bold"
                                    color="white"
                                >
                                    {row.jobTitle}
                                </Typography>
                                <Typography
                                    variant="paragraph"
                                    className="font-bold"
                                    color="white"
                                >
                                    {row.quantity}x
                                </Typography>
                            </div>
                        ))}
                    </div>

                    <div className="flex !flex-col items-end gap-8 border-t border-[#10a7e84d] pt-24">
                        <SummaryRow
                            label="In House (US) Cost:"
                            value={formatMoney(total.totalUsCost)}
                            valueColor="red"
                            variant={"h5"}
                        />
                        <SummaryRow
                            label="VCG Cost:"
                            value={formatMoney(total.totalVcgCost)}
                            variant={"h4"}
                        />
                        <SummaryRow
                            label="Estimated Savings:"
                            value={formatMoney(total.totalSavings)}
                            valueColor="blue"
                            variant={"h2"}
                        />
                    </div>
                </div>

                <div className="lg:flex-row flex flex-col justify-between w-full gap-16 capitalize">
                    <Button
                        variant="outlined"
                        className="flex w-fit !justify-center  rounded-full 3xl:!h-[70px] 3xl:text-[24px]"
                        onClick={handlePrevious}
                    >
                        Previous
                    </Button>
                    <Button
                        disabled={isSubmitting}
                        variant="gradient"
                        className="flex w-fit !justify-center  capitalize 3xl:!h-[70px] 3xl:text-[24px]"
                        type="submit"
                    >
                        {isSubmitting
                            ? "Sending Quotation..."
                            : "Request Full Quotation"}
                    </Button>
                </div>
                {errors.root && (
                    <div className="text-red">{errors.root.message}</div>
                )}
            </form>
        </>
    );
};

const SummaryRow = ({ label, value, variant, valueColor = "white" }) => (
    <div className="flex flex-row items-center justify-between gap-24">
        <Typography variant="paragraph" color="white" className="font-bold">
            {label}
        </Typography>
        <Typography variant={variant} color={valueColor} className="font-bold">
            {value}
        </Typography>
    </div>
);
