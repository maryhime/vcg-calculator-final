import { CardFooter, Typography } from "@material-tailwind/react";

export const TableFooter = ({ children }) => {
    return (
        <CardFooter className="flex w-full flex-col items-end justify-end gap-[8px] border-t border-[#10a7e84d] px-0 lg:px-[20px]">
            {children}
        </CardFooter>
    );
};
