import { Icon } from "@iconify/react/dist/iconify.js";
import { IconButton, Tooltip, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { DeleteRoleDialog } from "./../../../../components/Dialog/DeleteRoleDialog";
import { useModifyRolesStore } from "../../../../services/state/store";
import { EditRoleDialog } from "./../../../../components/Dialog/EditRoleDialog";
import { formatMoney } from "../../../../utils/helpers";

export const ModifyRolesTableBody = ({ tableRows, setTableRows }) => {
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const { setId, setEditInfo } = useModifyRolesStore();

    return (
        <tbody className="px-24">
            {tableRows.map((row, index) => (
                <tr
                    key={index}
                    className="flex items-center gap-16 border-b-[1px] border-b-primary-200 py-[12px] 3xl:p-[24px]"
                >
                    <td className="w-full py-8 3xl:py-5">
                        <Typography
                            variant="paragraph"
                            color="gray"
                            className="font-normal"
                        >
                            {row?.job_title}
                        </Typography>
                    </td>
                    <td className="hidden w-full py-8 md:block 3xl:py-5">
                        <Typography
                            variant="paragraph"
                            color="gray"
                            className="font-normal"
                        >
                            {formatMoney(row?.north_america_price)}
                        </Typography>
                    </td>
                    <td className="hidden w-full py-8 md:block 3xl:py-5">
                        <Typography
                            variant="paragraph"
                            color="gray"
                            className="font-normal"
                        >
                            {formatMoney(row?.philippines_price)}
                        </Typography>
                    </td>
                    <td className="hidden w-full py-8 md:block 3xl:py-5">
                        <Typography
                            variant="paragraph"
                            color="gray"
                            className="font-normal"
                        >
                            {formatMoney(row?.savings)}
                        </Typography>
                    </td>
                    <td className="flex w-20 items-center py-8 3xl:h-9 3xl:w-auto 3xl:gap-16 3xl:py-5">
                        <Tooltip content="Delete" placement="left-end">
                            <IconButton
                                variant="outlined"
                                color="white"
                                size="md"
                                className="border-none p-8 focus:ring-0"
                                onClick={() => (
                                    setId(row.id),
                                    setOpenDeleteDialog(!openDeleteDialog)
                                )}
                            >
                                <Icon
                                    icon="solar:trash-bin-minimalistic-bold-duotone"
                                    className="h-5 w-5 text-danger-500 lg:h-6 lg:w-6 3xl:h-9 3xl:w-9"
                                />
                            </IconButton>
                        </Tooltip>
                        <Tooltip content="Edit" placement="right-end">
                            <IconButton
                                variant="outlined"
                                color="white"
                                size="md"
                                className="border-none p-8 focus:ring-0"
                                onClick={() => (
                                    setOpenEditDialog(!openEditDialog),
                                    setEditInfo(row)
                                )}
                            >
                                <Icon
                                    icon="solar:pen-new-square-bold-duotone"
                                    className="h-5 w-5 text-primary-500 lg:h-6 lg:w-6 3xl:h-9 3xl:w-9"
                                />
                            </IconButton>
                        </Tooltip>
                    </td>
                </tr>
            ))}

            <DeleteRoleDialog
                open={openDeleteDialog}
                handleOpen={setOpenDeleteDialog}
                setTableRows={setTableRows}
                tableRows={tableRows}
            />
            <EditRoleDialog
                open={openEditDialog}
                handleOpen={setOpenEditDialog}
                setTableRows={setTableRows}
                tableRows={tableRows}
            />
        </tbody>
    );
};
