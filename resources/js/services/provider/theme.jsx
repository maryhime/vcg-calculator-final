import { IconButton, input, typography } from "@material-tailwind/react";
import gradient from "@material-tailwind/react/theme/components/timeline/timelineIconColors/gradient";

export const theme = {
    button: {
        defaultProps: {
            variant: "filled",
            size: "md",
            color: "blue",
            fullWidth: false,
            ripple: true,
            className:
                "flex flex-row gap-10 items-center justify-center capitalize ",
        },
        valid: {
            colors: ["blue", "red"],
        },
        styles: {
            base: {},
            sizes: {
                sm: {},
                md: {
                    height: "h-[46px] 3xl:!h-[64px] ",
                    py: "py-10",
                    px: "px-20",
                    fontSize: "3xl:text-[20px] text-[14px]",
                },
                lg: {
                    height: "56px",
                    width: "w-fit",
                    py: "py-10",
                    px: "px-20",
                    fontSize: "",
                },
            },
            variants: {
                filled: {
                    blue: {
                        backgroud: "bg-primary-500",
                        color: "text-white uppercase",
                        shadow: "none",
                        border: "border-primary-500 border-solid border-[1px]  ",
                        hover: "hover:bg-primary-700 hover:text-white",
                        className: "!uppercase",
                        width: "w-full md:w-fit",
                    },
                    red: {
                        backgroud: "bg-danger-500",
                        color: "text-white uppercase",
                        shadow: "none",
                        border: "border-danger-500 border-solid border-[1px]  ",
                        hover: "hover:bg-danger-700 hover:text-white",
                        className: "!uppercase",
                        width: "!w-full",
                    },
                },
                outlined: {
                    red: {
                        color: "text-danger-500",
                        border: "border-danger-500",
                        hover: "hover:bg-danger-100 ",
                        className: "!uppercase focus:!ring-0",
                    },
                },
                text: {
                    red: {
                        color: "text-red",
                        hover: "hover:bg-[#ffa8a948]",
                    },
                },
                gradient: {
                    blue: {
                        borderRadius: "rounded-full",
                        backgroundColor: "!bg-gradient-button",
                        color: "text-white",
                        shadow: "none",
                        border: "border-primary-500 border-solid border-[1px]  ",
                        hover: "hover:!bg-gradient-to-r from-[#41a7f533] hover:text-primary-100",
                    },
                },
            },
        },
    },
    card: {
        defaultProps: {
            variant: "gradient",
            color: "transparent",
            shadow: false,
            className: "",
        },
        styles: {
            variants: {
                gradient: {
                    transparent: {
                        backgroud: "bg-white",
                        borderRadius: "rounded-10",
                        color: "text-gray-700",
                        shadow: "shadow-none",
                        border: "",
                    },
                },
            },
        },
    },

    input: {
        defaultProps: {
            variant: "outlined",
            size: "md",
            color: "black",
            label: "",
            error: false,
            success: false,
            icon: undefined,
            labelProps: undefined,
            containerProps: undefined,
            shrink: false,
            className: " ",
        },
        valid: {
            variants: ["standard", "outlined", "static"],
            sizes: ["md", "lg"],
            colors: [
                "black",
                "white",
                "blue-gray",
                "gray",
                "brown",
                "deep-orange",
                "orange",
                "amber",
                "yellow",
                "lime",
                "light-green",
                "green",
                "teal",
                "cyan",
                "light-blue",
                "blue",
                "indigo",
                "deep-purple",
                "purple",
                "pink",
                "red",
            ],
        },
        styles: {
            base: {
                container: {
                    position: "relative",
                    width: "",
                    height: "3xl:h-14",
                    minWidth: "min-w-0",
                },
            },

            input: {
                peer: "peer",
                width: "w-full",
                height: "h-full 3xl:h-14",
                bg: "bg-transparent",
                color: "text-blue-gray-700",
                fontSize: "3xl:text-[20px] 3xl:placeholder:text-[18px]",
                fontFamily: "font-sans",
                fontWeight: "font-normal",
                outline: "outline outline-0 focus:outline-0",
                disabled: "disabled:bg-blue-gray-50 disabled:border-0",
                transition: "transition-all",
            },
            active: {
                peer: "peer",
                bg: "bg-white",
                color: "text-text-body",
                border: "border-primary-500",
            },
        },
    },
    IconButton: {
        defaultProps: {
            variant: "text",
            size: "md",
            color: "blue",
            fullWidth: false,
            ripple: true,
            className: "",
        },
        styles: {},
    },
    typography: {
        styles: {
            variants: {
                h1: {
                    display: "block",
                    fontSmoothing: "antialiased",
                    letterSpacing: "tracking-normal",
                    fontFamily: "font-sans",
                    fontSize: "text-[64px]",
                    fontWeight: "font-black",
                    lineHeight: "leading-tight",
                },
                h2: {
                    display: "block",
                    fontSmoothing: "antialiased",
                    letterSpacing: "tracking-normal",
                    fontFamily: "font-sans",
                    fontSize: " text-[32px] lg:text-[55px] 3xl:text-[65px]",
                    fontWeight: "font-black",
                    lineHeight: "leading-[1.3]",
                },
                h3: {
                    display: "block",
                    fontSmoothing: "antialiased",
                    letterSpacing: "tracking-normal",
                    fontFamily: "font-sans",
                    fontSize:
                        "text-[32px] md:text-[36px] lg:text-[40px] 3xl:text-[55px]",
                    fontWeight: "font-bold",
                    lineHeight: "leading-snug",
                },
                h4: {
                    display: "block",
                    fontSmoothing: "antialiased",
                    letterSpacing: "tracking-normal",
                    fontFamily: "font-sans",
                    fontSize: "text-[24px] lg:text-[36px]  3xl:text-[50px]",
                    fontWeight: "font-bold",
                    lineHeight: "leading-snug",
                },
                h5: {
                    display: "block",
                    fontSmoothing: "antialiased",
                    letterSpacing: "tracking-normal",
                    fontFamily: "font-sans",
                    fontSize: "text-[20px] md:text-[24px] 3xl:text-[32px]",
                    fontWeight: "font-semibold",
                    lineHeight: "leading-snug",
                },
                h6: {
                    display: "block",
                    fontSmoothing: "antialiased",
                    letterSpacing: "tracking-normal",
                    fontFamily: "font-sans",
                    fontSize: "text-[14px] lg:text-base 3xl:text-[24px]",
                    fontWeight: "font-semibold",
                    lineHeight: "leading-relaxed",
                },
                lead: {
                    display: "block",
                    fontSmoothing: "antialiased",
                    fontFamily: "font-sans",
                    fontSize: "text-xl",
                    fontWeight: "font-normal",
                    lineHeight: "leading-relaxed",
                },
                paragraph: {
                    display: "block",
                    fontSmoothing: "antialiased",
                    fontFamily: "font-sans",
                    fontSize: "text-[14px] md:text-[16px]  3xl:text-[24px]",
                    fontWeight: "font-light",
                    lineHeight: "leading-relaxed",
                },
                small: {
                    display: "block",
                    fontSmoothing: "antialiased",
                    fontFamily: "font-sans",
                    fontSize: "text-sm  3xl:text-[16px]",
                    fontWeight: "font-light",
                    lineHeight: "leading-normal",
                },
            },
            colors: {
                black: {
                    color: "text-headings-admin",
                },
                white: {
                    color: "text-white",
                },
                red: {
                    color: "text-red",
                },
                "blue-gray": {
                    color: "text-body-text",
                },
                blue: {
                    color: "text-primary-500",
                },
                gray: {
                    color: "text-body-text-admin",
                },
            },
        },
    },

    dialog: {
        defaultProps: {
            size: "sm",
            dismiss: {
                enabled: false,
            },
            animate: {
                unmount: {},
                mount: {},
            },
            className: " flex flex-col gap-24",
        },
        valid: {
            sizes: ["xs", "sm", "md", "lg", "xl", "xxl"],
        },
        styles: {
            base: {
                backdrop: {
                    display: "grid",
                    placeItems: "place-items-center",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "w-screen",
                    height: "h-screen",
                    backgroundColor: "bg-black",
                    backgroundOpacity: "bg-opacity-50",
                    backdropFilter: "backdrop-blur-md",
                },
                container: {
                    position: "relative",
                    bg: "",
                    m: "m-0",
                    borderRadius: "rounded-lg 3xl:rounded-xl",
                    boxShadow: "shadow-2xl",
                    color: "text-text-body",
                    fontSmoothing: "antialiased",
                    fontFamily: "font-sans",
                    fontSize: "text-base",
                    fontWeight: "font-light",
                    lineHeight: "leading-relaxed",
                },
            },
        },
    },
    dialogHeader: {
        defaultProps: {
            className: "",
        },
        styles: {
            base: {
                display: "flex",
                alignItems: "items-center",
                flexShrink: "shrink-0",
                p: "px-24 pt-24 md:px-48 md:pt-48",
            },
        },
    },
    dialogBody: {
        defaultProps: {
            className: "flex flex-col gap-24",
            divider: false,
        },
        styles: {
            base: {
                initial: {
                    position: "relative",
                    p: "px-24 md:px-48",
                    color: "text-blue-gray-500",
                    fontSmoothing: "antialiased",
                    fontFamily: "font-sans",
                    fontSize: "text-base",
                    fontWeight: "font-light",
                    lineHeight: "leading-relaxed",
                },
                divider: {
                    borderTop: "border-t",
                    borderTopColor: "border-t-blue-gray-100",
                    borderBottom: "border-b",
                    borderBottomColor: "border-b-blue-gray-100",
                },
            },
        },
    },
    dialogFooter: {
        defaultProps: {
            className: "",
        },
        styles: {
            base: {
                display: "flex",
                alignItems: "items-center",
                justifyContent: "justify-end",
                flexShrink: "shrink-0",
                flexWrap: "flex-wrap",
                p: "px-24 pb-24 md:px-48 md:pb-48",
                color: "text-blue-gray-500",
            },
        },
    },
    list: {
        defaultProps: {
            ripple: true,
            className: "",
        },
        styles: {
            base: {
                list: {
                    display: "flex",
                    flexDirection: "flex-col",
                    gap: "gap-1",
                    minWidth: "min-w-[240px]",
                    p: "p-2",
                    fontFamily: "font-sans",
                    fontSize: "text-base",
                    fontWeight: "font-normal",
                    color: "text-blue-gray-700",
                },
                item: {
                    initial: {
                        display: "flex",
                        alignItems: "items-center",
                        width: "w-full",
                        padding: "p-8 3xl:p-16",
                        borderRadius: "rounded-8 ",
                        textAlign: "font-medium text-start",
                        lightHeight: "leading-tight",
                        transition: "transition-all",
                        bg: "",
                        color: "hover:text-primary-500 focus:text-primary-500 active:text-primary-500",
                        outline: "outline-none",
                    },
                    selected: {
                        bg: "bg-primary-100",
                        color: "text-primary-500",
                    },
                },
            },
        },
    },
};
