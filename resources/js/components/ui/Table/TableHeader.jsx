import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, CardHeader } from "@material-tailwind/react";

export const TableHeader = ({ floated = false, shadow = false, children }) => {
    return (
        <CardHeader
            floated={floated}
            shadow={shadow}
            className=" m-0 rounded-none"
            color="transparent"
        >
            {children}
        </CardHeader>
    );
};
