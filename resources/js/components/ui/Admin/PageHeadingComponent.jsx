import React from "react";
import { Typography } from "@material-tailwind/react";

const PageHeadingComponent = ({ heading, pageDescription }) => {
    return (
        <div className=" flex w-full flex-col gap-8">
            <Typography variant="h3" color="black">
                {heading}
            </Typography>
            <Typography variant="paragraph" color="gray">
                {pageDescription}
            </Typography>
        </div>
    );
};

export default PageHeadingComponent;
