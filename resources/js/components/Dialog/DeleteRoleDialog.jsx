import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Dialog, Typography } from "@material-tailwind/react";
import { useCallback } from "react";
import toast from "react-hot-toast";
import { deleteService } from "../../services/api/api";
import {
    useModifyRolesStore,
    useUserInfoStore,
} from "../../services/state/store";
import { handleApiErrors } from "../../utils/helpers";

export const DeleteRoleDialog = ({
    open,
    handleOpen,
    setTableRows,
    tableRows,
}) => {
    const { token } = useUserInfoStore();
    const { clearId, id } = useModifyRolesStore();

    const handleDeleteRow = useCallback(async () => {
        const { data, ok } = await deleteService(id, token);

        handleOpen();
        if (ok) {
            toast.success("Successfully Deleted");
            setTableRows((prevRows) =>
                prevRows.filter((item) => item.id !== id),
            );

            clearId();
        } else {
            handleApiErrors(data);
        }
    }, [id, handleOpen, tableRows, setTableRows, clearId]);

    return (
        <Dialog
            open={open}
            handler={handleOpen}
            size="xs"
            className="3xl:p-48 flex flex-col items-center gap-24 bg-white p-24"
        >
            <Icon
                icon="solar:trash-bin-minimalistic-bold-duotone"
                className="3xl:w-60 3xl:h-60 h-[100px] w-[100px] text-danger-500 "
            />
            <div className=" flex w-full flex-col items-center gap-8">
                <Typography variant="h5" color="black">
                    Delete Role?
                </Typography>
                <Typography
                    variant="paragraph"
                    color="gray"
                    className="text-center"
                >
                    Are you sure you want to delete this role and all associated
                    data?
                </Typography>
            </div>
            <div className="flex w-full flex-col gap-24">
                <Button
                    variant="filled"
                    color="red"
                    className="3xl:!h-[64px] 3xl:text-[20px]"
                    onClick={() => handleDeleteRow()}
                >
                    yes, Delete the role
                </Button>
                <Button
                    variant="outlined"
                    color="red"
                    className="3xl:!h-[64px] 3xl:text-[20px]"
                    onClick={() => handleOpen()}
                >
                    No, don’t delete
                </Button>
            </div>
        </Dialog>
    );
};
