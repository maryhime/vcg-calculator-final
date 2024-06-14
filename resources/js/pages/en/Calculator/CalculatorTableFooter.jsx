import { Typography } from "@material-tailwind/react";
import { TableFooter } from "../../../components/ui/Table/TableFooter";
import { formatMoney } from "../../../utils/helpers";

export const CalculatorTableFooter = ({ result }) => {
    return (
        <TableFooter>
            <div className=" flex flex-col items-end gap-16">
                <div className="flex flex-row items-center justify-between gap-24">
                    <Typography
                        variant="paragraph"
                        color="white"
                        className="font-bold"
                    >
                        In House (US) Cost:
                    </Typography>

                    <Typography variant="h5" color="red">
                        {formatMoney(result.totalUsCost)}
                    </Typography>
                </div>
                <div className="flex flex-row items-center gap-24">
                    <Typography
                        variant="paragraph"
                        color="white"
                        className="font-bold"
                    >
                        VCG Cost:
                    </Typography>

                    <Typography
                        variant="h4"
                        color="white"
                        className="font-bold"
                    >
                        {formatMoney(result.totalVcgCost)}
                    </Typography>
                </div>
                <div className="flex flex-row items-center gap-8 lg:gap-24">
                    <Typography
                        variant="paragraph"
                        color="white"
                        className="font-bold"
                    >
                        Estimated Savings:
                    </Typography>

                    <Typography
                        variant="h2"
                        className="text-primary-500"
                        color="blue"
                    >
                        {formatMoney(result.totalSavings)}
                    </Typography>
                </div>
            </div>
            <Typography variant="small" color="white" className="text-[14px] ">
                This is only a rough estimation. Final figures may change
                depending on the arrangement
            </Typography>
        </TableFooter>
    );
};
