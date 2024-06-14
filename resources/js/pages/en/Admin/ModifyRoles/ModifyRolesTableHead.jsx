import { Typography } from "@material-tailwind/react";
import { TABLE_HEAD } from "../../../../utils/calculatorTable";
import { useCallback } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

export const ModifyRolesTableHead = ({ setSortOrder }) => {
    const toggleSortOrder = useCallback(() => {
        setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    }, []);

    return (
        <thead className=" 3xl:py-[24px] 3xl:px-[48px]  gap-16 rounded-t-10 bg-primary-100 px-24 py-[12px] ">
            {TABLE_HEAD.map((row, index) => (
                <tr
                    key={index}
                    className=" flex items-center justify-between gap-16"
                >
                    <th
                        className="3xl:py-3 w-full cursor-pointer py-1"
                        onClick={toggleSortOrder}
                    >
                        <div className="flex items-center justify-between">
                            <Typography
                                variant="h6"
                                color="black"
                                className="3xl:text-[26px] leading-none"
                            >
                                {row?.jobTitle}
                            </Typography>
                            <Icon
                                icon="solar:transfer-vertical-bold-duotone"
                                className="3xl:w-8 3xl:h-8 h-4 w-4 text-primary-500"
                            />
                        </div>
                    </th>
                    <th
                        className="3xl:py-3 hidden w-full cursor-pointer items-center justify-between py-1 md:flex"
                        onClick={toggleSortOrder}
                    >
                        <div className=" flex flex-col items-start justify-between gap-2">
                            <Typography
                                variant="h6"
                                color="black"
                                className="3xl:text-[26px] w-fit leading-none"
                            >
                                {row?.americaSalary}
                            </Typography>
                            <Typography
                                variant="small"
                                color="gray"
                                className="text-[12px] leading-none"
                            >
                                {row?.americaSubTxt}
                            </Typography>
                        </div>
                        <Icon
                            icon="solar:transfer-vertical-bold-duotone"
                            className="3xl:w-8 3xl:h-8 h-4 w-4 text-primary-500"
                        />
                    </th>
                    <th
                        className="3xl:py-3 hidden w-full cursor-pointer items-center justify-between py-1 md:flex"
                        onClick={toggleSortOrder}
                    >
                        <div className=" flex flex-col items-start justify-between gap-2">
                            <Typography
                                variant="h6"
                                color="black"
                                className="3xl:text-[26px] w-fit leading-none"
                            >
                                {row?.phSalary}
                            </Typography>
                            <Typography
                                variant="small"
                                color="gray"
                                className="text-[12px] leading-none"
                            >
                                {row?.phSubTxt}
                            </Typography>
                        </div>
                        <Icon
                            icon="solar:transfer-vertical-bold-duotone"
                            className="3xl:w-8 3xl:h-8 h-4 w-4 text-primary-500"
                        />
                    </th>
                    <th
                        className="3xl:py-3 hidden w-full cursor-pointer justify-between py-1 md:flex"
                        onClick={toggleSortOrder}
                    >
                        <div className="flex items-center justify-between">
                            <Typography
                                variant="h6"
                                color="black"
                                className="3xl:text-[26px] leading-none"
                            >
                                {row?.savings}
                            </Typography>
                        </div>
                        <Icon
                            icon="solar:transfer-vertical-bold-duotone"
                            className="3xl:w-8 3xl:h-8 h-4 w-4 text-primary-500"
                        />
                    </th>
                    <th
                        className="3xl:py-3 3xl:w-auto w-20 cursor-pointer py-1"
                        onClick={toggleSortOrder}
                    >
                        <div className="flex items-center justify-between px-[12px]">
                            <Typography
                                variant="h6"
                                color="black"
                                className="3xl:text-[26px] leading-none"
                            >
                                Actions
                            </Typography>
                        </div>
                    </th>
                </tr>
            ))}
        </thead>
    );
};
