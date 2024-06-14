import { useState, useCallback, useEffect } from "react";
import { servicesList } from "../../../../services/api/api";
import PageHeadingComponent from "../../../../components/ui/Admin/PageHeadingComponent";
import { Card } from "@material-tailwind/react";
import PaginationComponent from "../../../../components/ui/Admin/PaginationComponent";
import { ModifyRolesTableHead } from "./ModifyRolesTableHead";
import { ModifyRolesTableBody } from "./ModifyRolesTableBody";
import { ModifyRolesTableActions } from "./ModifyRolesTableActions";

const ModifyRolesPage = () => {
    const [tableRows, setTableRows] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState("desc");
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(0);

    const fetchTableData = useCallback(
        async (query = "") => {
            const { data, ok } = await servicesList(
                `sort_by=${sortOrder}&search=${query}&per_page=5&page=${page}`,
            );

            if (ok) {
                setTableRows(data?.data);
                setLastPage(data.last_page);
            }
        },
        [sortOrder, page],
    );

    const handleAddNewTableRow = (newRow) => {
        setTableRows((prevRows) => [newRow, ...prevRows]);
    };

    useEffect(() => {
        fetchTableData(searchQuery);
    }, [fetchTableData, searchQuery]);

    return (
        <div className="3xl:py-[64px] 3xl:gap-[64px] 3xl:px-[64px] flex w-full  flex-col gap-24 overflow-y-auto  p-24 md:px-48 md:py-16 lg:gap-48 lg:py-48">
            {/* HEADING */}
            <PageHeadingComponent
                heading={"Modify Roles"}
                pageDescription={
                    "Use this page to add and modify user roles, set specific permissions, and assign corresponding salaries for each role."
                }
            />

            {/* White Container */}
            <Card className="3xl:p-12 3xl:rounded-2xl  3xl:gap-48 3xl:min-h-[1120px] flex flex-col gap-24 p-24 align-top lg:p-32 2xl:min-h-[718px]">
                <ModifyRolesTableActions
                    setSearchQuery={setSearchQuery}
                    onAddNewTableRow={handleAddNewTableRow}
                />
                <div className="flex h-[100%] flex-col items-end justify-between gap-24">
                    <Card className="w-full overflow-scroll lg:overflow-auto">
                        <table className=" flex w-full table-auto flex-col text-left lg:w-full">
                            <ModifyRolesTableHead setSortOrder={setSortOrder} />
                            <ModifyRolesTableBody
                                tableRows={tableRows}
                                setTableRows={setTableRows}
                            />
                        </table>
                    </Card>
                    <PaginationComponent
                        lastPage={lastPage}
                        setPage={setPage}
                        page={page}
                    />
                </div>
            </Card>
        </div>
    );
};

export default ModifyRolesPage;
