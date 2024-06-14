import React, { useEffect } from "react";
import PageHeadingComponent from "../../../../components/ui/Admin/PageHeadingComponent";
import { EmailSettings } from "./EmailSettings";
import { PasswordSettings } from "./PasswordSettings";
import { userDetails } from "../../../../services/api/api";
import toast from "react-hot-toast";
import { useUserInfoStore } from "../../../../services/state/store";

const SettingsPage = () => {
    const { token, addEmail } = useUserInfoStore();

    const handleFetchInfo = async () => {
        const { data, ok } = await userDetails(token);

        if (ok) {
            addEmail(data?.data?.email);
        } else {
            if (data && data.errors) {
                for (const field in data.errors) {
                    data.errors[field].forEach((errorMessage) => {
                        toast.error(errorMessage);
                    });
                }
            } else {
                toast.error("An error occurred while updating your email.");
            }
        }
    };

    useEffect(() => {
        handleFetchInfo();
    }, []);

    return (
        <div className="flex w-full flex-col gap-24 overflow-y-auto  p-24 md:px-48 md:py-16  lg:gap-48 lg:py-48 3xl:gap-[64px] 3xl:px-[64px] 3xl:py-[64px]">
            <PageHeadingComponent
                heading={"Settings"}
                pageDescription={
                    "Use this page to add and modify user roles, set specific permissions, and assign corresponding salaries for each role."
                }
            />
            <div className="flex flex-col gap-24 lg:flex-row lg:gap-48">
                {/* Email Component */}
                <EmailSettings />

                {/* Password Component */}
                <PasswordSettings />
            </div>
        </div>
    );
};

export default SettingsPage;
