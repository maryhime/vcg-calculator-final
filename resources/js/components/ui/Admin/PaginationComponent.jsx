import { Icon } from "@iconify/react/dist/iconify.js";
import { IconButton, Typography } from "@material-tailwind/react";
import React from "react";

const PaginationComponent = ({ lastPage, setPage, page }) => {
    const next = () => {
        if (page === lastPage) return;

        setPage(page + 1);
    };

    const prev = () => {
        if (page === 1) return;

        setPage(page - 1);
    };
    return (
        <div className="flex items-center gap-8">
            <IconButton
                size="sm"
                variant="outlined"
                onClick={prev}
                disabled={page === 1}
            >
                <Icon
                    icon="solar:alt-arrow-left-linear"
                    className="h-4 w-4 text-headings-admin"
                />
            </IconButton>
            <Typography color="gray" className="font-normal">
                Page <strong className="text-gray-900">{page}</strong> of{" "}
                <strong className="text-gray-900">{lastPage}</strong>
            </Typography>
            <IconButton
                size="sm"
                variant="outlined"
                onClick={next}
                disabled={page === 10}
            >
                <Icon
                    icon="solar:alt-arrow-right-line-duotone"
                    className="h-4 w-4 text-headings-admin"
                />
            </IconButton>
        </div>
    );
};

export default PaginationComponent;
