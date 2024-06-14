import { Button, DialogFooter } from "@material-tailwind/react";

export const RequestQuotationFooter = () => {
    return (
        <DialogFooter>
            {!emailSent && (
                <>
                    {!next ? (
                        <Button
                            variant="gradient"
                            className="flex !w-full !justify-center !capitalize"
                            onClick={handleNext}
                        >
                            Next
                        </Button>
                    ) : (
                        <div className="flex !w-full flex-col justify-between gap-16 capitalize lg:flex-row">
                            <Button
                                variant="outlined"
                                className="!w-full !justify-center rounded-full md:w-fit"
                                onClick={handlePrevious}
                            >
                                Previous
                            </Button>
                            <Button
                                variant="gradient"
                                className="!w-full !justify-center capitalize md:w-fit"
                                onClick={handleEmailConfirmation}
                            >
                                Request Quotation
                            </Button>
                        </div>
                    )}
                </>
            )}
            {emailSent && (
                <div className=" flex justify-center w-full">
                    <Button onClick={handleClose} className="min-w-[250px]">
                        Got it!
                    </Button>
                </div>
            )}
        </DialogFooter>
    );
};
