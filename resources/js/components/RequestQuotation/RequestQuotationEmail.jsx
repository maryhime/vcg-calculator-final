import { Button, Typography } from "@material-tailwind/react";
import Lottie from "lottie-react";
import emailLottie from "../../assets/json/email.json";

export const RequestQuotationEmail = ({ handleOpen }) => {
    return (
        <>
            <div className="flex flex-col items-center gap-0">
                <div className="w-[348px] 3xl:w-[500px]">
                    <Lottie animationData={emailLottie} loop={true} />
                </div>
                <div className="flex flex-col justify-center">
                    <Typography
                        variant="h2"
                        color="white"
                        className="text-center"
                    >
                        Email Sent!
                    </Typography>
                    <Typography
                        variant="paragraph"
                        color="white"
                        className="text-center"
                    >
                        Your quotation request has been sent successfully.
                    </Typography>
                </div>
            </div>
            <div className="flex w-full justify-center">
                <Button
                    variant="gradient"
                    onClick={() => (
                        handleOpen(false), window.location.reload()
                    )}
                    className="min-w-[250px]"
                >
                    Got it!
                </Button>
            </div>
        </>
    );
};
