import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useMemo } from "react";
import {
    CardBody,
    IconButton,
    Input,
    Tooltip,
    Typography,
} from "@material-tailwind/react";
import { calculateSavings, formatMoney } from "../../../utils/helpers";
import ArrowDoodle from "../../../assets/ArrowDoodle";

export const TableBody = ({ tableHeader, tableRows, setTableRows, result }) => {
    const savings = useMemo(() => {
        return tableRows.reduce((acc, row) => {
            const rowSavings =
                (row.americaSalary - row.phSalary) * row.quantity;
            return acc + rowSavings;
        }, 0);
    }, [tableRows]);

    const totals = useMemo(() => {
        return tableRows.reduce(
            (acc, row) => ({
                totalUsCost:
                    acc.totalUsCost +
                    parseFloat(row.americaSalary) * row.quantity,
                totalVcgCost:
                    acc.totalVcgCost + parseFloat(row.phSalary) * row.quantity,
                totalSavings:
                    acc.totalSavings + parseFloat(savings) * row.quantity,
            }),
            { totalUsCost: 0, totalVcgCost: 0, totalSavings: 0 },
        );
    }, [tableRows, savings]);

    const handleDeleteRow = (rowIndex) => {
        setTableRows((prevRows) =>
            prevRows.filter((_, index) => index !== rowIndex),
        );
    };

    const handleQuantityChange = (rowIndex, newQuantity) => {
        setTableRows((prevRows) =>
            prevRows.map((row, index) =>
                index === rowIndex ? { ...row, quantity: newQuantity } : row,
            ),
        );
    };

    useEffect(() => {
        result(totals);
    }, [totals, result]);

    return (
        <CardBody className="3xl:!h-[650px] !h-[465px] w-full overflow-scroll rounded-10 p-0 lg:overflow-auto lg:px-20">
            <table className=" w-full table-auto rounded-10 text-left xl:w-full">
                {/* show table if the roles are not empty */}
                {tableRows.length > 0 ? (
                    <thead className="sticky top-0 z-10 rounded-10 bg-[#0e172c]">
                        {tableHeader?.map((row, index) => (
                            <tr
                                key={index}
                                className=" rounded-10 bg-gradient-card"
                            >
                                <th className="cursor-pointer p-3 xl:p-4">
                                    <Typography
                                        variant="h6"
                                        color="white"
                                        className="leading-none"
                                    >
                                        {row?.number}
                                    </Typography>
                                </th>
                                <th className="cursor-pointer p-3 xl:p-4">
                                    <Typography
                                        variant="h6"
                                        color="white"
                                        className="leading-none"
                                    >
                                        {row?.jobTitle}
                                    </Typography>
                                </th>
                                <th className="cursor-pointer p-3 xl:p-4">
                                    <div className=" flex flex-col items-start justify-between gap-2">
                                        <Typography
                                            variant="h6"
                                            color="white"
                                            className="w-fit leading-none"
                                        >
                                            {row?.americaSalary}
                                        </Typography>
                                        <Typography
                                            variant="small"
                                            color="white"
                                            className="text-[12px] leading-none"
                                        >
                                            {row?.americaSubTxt}
                                        </Typography>
                                    </div>
                                </th>
                                <th className="cursor-pointer p-3 xl:p-4">
                                    <div className=" flex flex-col items-start justify-between gap-2">
                                        <Typography
                                            variant="h6"
                                            color="white"
                                            className="leading-none"
                                        >
                                            {row?.phSalary}
                                        </Typography>
                                        <Typography
                                            variant="small"
                                            color="white"
                                            className="text-[12px] leading-none"
                                        >
                                            {row?.phSubTxt}
                                        </Typography>
                                    </div>
                                </th>
                                <th className="cursor-pointer p-3 xl:p-4">
                                    <Typography
                                        variant="h6"
                                        color="white"
                                        className="leading-none"
                                    >
                                        {row?.savings}
                                    </Typography>
                                </th>
                                <th className="cursor-pointer p-3 xl:p-4">
                                    <Typography
                                        variant="h6"
                                        color="white"
                                        className="leading-none"
                                    >
                                        {row?.action}
                                    </Typography>
                                </th>
                            </tr>
                        ))}
                    </thead>
                ) : (
                    // show if the table is empty
                    <div className="relative flex w-full justify-center">
                        <div className="flex w-full flex-col items-center justify-center gap-16 py-[29px] xl:py-[63px]">
                            <Typography
                                variant="h3"
                                color="white"
                                className="text-center xl:text-left"
                            >
                                Build your{" "}
                                <span className="text-primary-500">Team</span>{" "}
                                now
                            </Typography>
                            <Typography
                                variant="paragraph"
                                className="text-center xl:text-left"
                                color="blue-gray"
                            >
                                Choose and add various of roles for your team
                            </Typography>
                        </div>
                        <div className="absolute -top-[12px] right-[1.25rem] -z-[25] xl:right-[6.5rem]">
                            <ArrowDoodle
                                className={
                                    "h-20 w-20 md:h-24 md:w-24 xl:h-[124px] xl:w-[160px]"
                                }
                            />
                        </div>
                    </div>
                )}
                <tbody>
                    {/* table rows */}
                    {tableRows.map((row, index) => {
                        const classes = "p-4 xl:p-24";
                        return (
                            <tr key={index} className="">
                                <td>
                                    <div className="flex w-fit flex-row items-center gap-0 rounded-5 border-[1px] border-solid border-[#10a7e84a]">
                                        <IconButton
                                            variant="outlined"
                                            color="white"
                                            size="sm 3xl:lg"
                                            className="rounded-r-none border-b-0 border-l-0 border-t-0 border-[#10a7e84a] focus:ring-0"
                                            onClick={() =>
                                                handleQuantityChange(
                                                    index,
                                                    Math.max(
                                                        row.quantity - 1,
                                                        0,
                                                    ),
                                                )
                                            }
                                            disabled={row.quantity === 1}
                                        >
                                            <Icon
                                                icon="ph:minus"
                                                className="3xl:w-5 3xl:h-5"
                                            />
                                        </IconButton>
                                        <Input
                                            type="text"
                                            value={row.quantity}
                                            onChange={(e) => {
                                                handleQuantityChange(
                                                    index,
                                                    parseInt(
                                                        e.target.value,
                                                        10,
                                                    ) || 1,
                                                );
                                            }}
                                            labelProps={{
                                                className: "hidden",
                                            }}
                                            containerProps={{
                                                className: "!h-[32px]",
                                            }}
                                            className="3xl:text-[18px] !w-[40px] rounded-none  !border-none bg-transparent !p-0 text-center text-white focus:!border-none"
                                            min={1}
                                        />
                                        <IconButton
                                            variant="outlined"
                                            color="white"
                                            size="sm 3xl:lg"
                                            className="rounded-l-none border-b-0 border-r-0 border-t-0 border-[#10a7e84a] focus:ring-0"
                                            onClick={() =>
                                                handleQuantityChange(
                                                    index,
                                                    row.quantity + 1,
                                                    setTableRows,
                                                )
                                            }
                                        >
                                            <Icon
                                                icon="ph:plus"
                                                className="3xl:w-5 3xl:h-5"
                                            />
                                        </IconButton>
                                    </div>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="paragraph"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {row.jobTitle}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="paragraph"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {formatMoney(
                                            row.americaSalary * row.quantity,
                                        )}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="paragraph"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {formatMoney(
                                            row.phSalary * row.quantity,
                                        )}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="paragraph"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {formatMoney(calculateSavings(row))}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Tooltip
                                        content="Delete"
                                        placement="right-end"
                                    >
                                        <IconButton
                                            variant="outlined"
                                            color="white"
                                            size="sm"
                                            className="border-none focus:ring-0"
                                            onClick={() =>
                                                handleDeleteRow(index)
                                            }
                                        >
                                            <Icon
                                                icon="solar:trash-bin-minimalistic-bold-duotone"
                                                className="3xl:w-8 3xl:h-8 h-6 w-6"
                                                color="#FFA8AA"
                                            />
                                        </IconButton>
                                    </Tooltip>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </CardBody>
    );
};
