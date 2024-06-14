import { Icon } from "@iconify/react/dist/iconify.js";
import {
    Dialog,
    DialogBody,
    DialogHeader,
    IconButton,
    Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { RequestQuotationUserInfoForm } from "./RequestQuotationUserInfoForm";
import { RequestQuotationSummary } from "./RequestQuotationSummary";
import { RequestQuotationEmail } from "./RequestQuotationEmail";

export const RequestQuotation = ({ open, handleOpen, tableRows, total }) => {
    // 0 for UserInfoForm, 1 for Summary, 2 for Email
    const [step, setStep] = useState(0);
    const [emailSent, setEmailSent] = useState(false);

    const handleNext = () => setStep(step + 1);
    const handlePrevious = () => setStep(step - 1);

    return (
        <Dialog
            open={open}
            handler={handleOpen}
            size="sm"
            className="!bg-gradient-card pb-48 3xl:!gap-48"
        >
            <DialogHeader
                className={`${emailSent ? "hidden" : "flex"} flex-row justify-between`}
            >
                <Typography variant="h4" color="white">
                    Request Full Quotation
                </Typography>
                <IconButton
                    variant="text"
                    className="hover:!bg-none"
                    onClick={() => handleOpen(false)}
                >
                    <Icon
                        width="32px"
                        icon="solar:close-circle-bold-duotone"
                        style={{ color: "#286cbf" }}
                    />
                </IconButton>
            </DialogHeader>
            <DialogBody className="flex flex-col gap-16">
                {!emailSent && (
                    <>
                        {step === 0 && (
                            <RequestQuotationUserInfoForm
                                handleNext={handleNext}
                            />
                        )}
                        {step === 1 && (
                            <RequestQuotationSummary
                                handlePrevious={handlePrevious}
                                setEmailSent={setEmailSent}
                                tableRows={tableRows}
                                total={total}
                            />
                        )}
                    </>
                )}
                {emailSent && <RequestQuotationEmail handleOpen={handleOpen} />}
            </DialogBody>
        </Dialog>
    );
};
