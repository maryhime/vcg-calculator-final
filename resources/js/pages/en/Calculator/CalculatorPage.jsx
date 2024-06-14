import { Button, Card } from "@material-tailwind/react";
import { TableHeader } from "../../../components/ui/Table/TableHeader";
import { Icon } from "@iconify/react/dist/iconify.js";
import { TableBody } from "../../../components/ui/Table/TableBody";
import AddRolesDialog from "../../../components/ui/Dialog/AddRolesDialog";

import { useState } from "react";
import { TABLE_HEAD } from "../../../utils/calculatorTable";
import { CalculatorTableFooter } from "./CalculatorTableFooter";
import { RequestQuotation } from "../../../components/RequestQuotation/RequestQuotation";

const CalculatorPage = () => {
    const [result, setResult] = useState({});
    const [tableRows, setTableRows] = useState([]);
    const [openRolesDialog, setOpenRolesDialog] = useState(false);
    const [openQuotationDialog, setOpenQuotationDialog] = useState(false);

    const handleAddRoles = (newRole) => {
        setTableRows((prevRows) => {
            const updatedRows = [...prevRows];
            newRole.forEach((newRole) => {
                const existingRoleIndex = updatedRows.findIndex(
                    (row) => row.jobTitle === newRole.jobTitle,
                );
                if (existingRoleIndex !== -1) {
                    updatedRows[existingRoleIndex].quantity += newRole.quantity;
                } else {
                    updatedRows.push(newRole);
                }
            });
            return updatedRows;
        });
    };

    return (
        <div className=" 3xl:h-screen 3xl:justify-center flex w-full flex-col items-center bg-[#0C0C18] px-24 py-24 xl:py-[100px]">
            <div className="3xl:w-full flex w-full flex-col items-center justify-center gap-48 xl:w-[1120px]">
                <Card className="card-border 3xl:w-[1600px]  flex w-full flex-col gap-16 rounded-10 bg-gradient-card p-24 backdrop-blur-[10px] xl:w-[1120px] xl:gap-24 xl:p-48">
                    <TableHeader tableRows={tableRows}>
                        <div className="flex items-center justify-between gap-8 sm:flex-row">
                            <Button
                                variant="text"
                                color="red"
                                size="md"
                                className="flex items-center rounded-full capitalize"
                                disabled={tableRows?.length == 0 ? true : false}
                                onClick={() => setTableRows([])}
                            >
                                <Icon
                                    icon="solar:trash-bin-minimalistic-bold-duotone"
                                    className="3xl:w-9 3xl:h-9 h-6 w-6"
                                />
                                <span className="3xl:text-[24px] m-0 hidden h-fit p-0 leading-none md:block">
                                    Clear Table
                                </span>
                            </Button>
                            <Button
                                className="3xl:!h-[66px] 3xl:!min-w-[230px] flex items-center gap-3 capitalize"
                                size="md"
                                color="blue"
                                variant="gradient"
                                data-dialog-target="dialog"
                                onClick={() =>
                                    setOpenRolesDialog(!openRolesDialog)
                                }
                            >
                                <Icon
                                    icon="solar:user-plus-rounded-bold-duotone"
                                    className="3xl:w-9 3xl:h-9 h-6 w-6"
                                />
                                <span className="3xl:text-[24px] m-0 hidden h-fit p-0 leading-none md:block">
                                    Add Roles
                                </span>
                            </Button>
                        </div>
                    </TableHeader>
                    <TableBody
                        tableHeader={TABLE_HEAD}
                        tableRows={tableRows}
                        setTableRows={setTableRows}
                        result={setResult}
                    />

                    <CalculatorTableFooter result={result} />
                </Card>
                <Button
                    className="3xl:!h-[70px] 3xl:!w-[320px] 3xl:text-[24px]"
                    size="lg"
                    variant="gradient"
                    onClick={() => setOpenQuotationDialog(!openQuotationDialog)}
                    disabled={tableRows.length > 0 ? false : true}
                >
                    Request Full Quotation
                </Button>
            </div>

            <AddRolesDialog
                open={openRolesDialog}
                handleOpen={setOpenRolesDialog}
                setValues={handleAddRoles}
                tableRows={tableRows}
            />

            <RequestQuotation
                open={openQuotationDialog}
                handleOpen={setOpenQuotationDialog}
                tableRows={tableRows}
                total={result}
            />
        </div>
    );
};

export default CalculatorPage;