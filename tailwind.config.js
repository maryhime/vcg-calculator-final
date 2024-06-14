/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: [
        "./index.html",
        "./resources/**/*.{vue,js,ts,jsx,tsx}",
        "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                sm: "640px",
                // => @media (min-width: 640px) { ... }

                md: "768px",
                // => @media (min-width: 768px) { ... }

                lg: "1024px",
                // => @media (min-width: 1024px) { ... }

                xl: "1280px",
                // => @media (min-width: 1280px) { ... }

                "2xl": "1536px",
                // => @media (min-width: 1536px) { ... }
                "3xl": "2560px",
                // => @media (min-width: 2560px) { ... }
            },
            colors: {
                "primary-100": "#D3EDFB",
                "primary-200": "#A9D8F8",
                "primary-500": "#286CBF",
                "primary-700": "#143E89",

                "success-100": "#EAFBD3",
                "success-700": "#3B991C",

                "warning-100": "#FDF6CC",
                "warning-700": "#9F7303",

                "danger-100": "#FCE1D4",
                "danger-500": "#D62A2D",
                "danger-700": "#9A152E",

                "body-text": "#BEC4E3",
                "body-text-admin": "#404252",
                "headings-admin": "#282A3A",

                container: "#FFFFFF",
                "main-bg-admin": "#F7F7F7",

                red: "#FFA8AA",
            },
            borderRadius: {
                5: "5px",
                8: "8px",
                10: "10px",
            },
            gap: {
                4: "4px",
                6: "6px",
                8: "8px",
                10: "10px",
                16: "16px",
                24: "24px",
                32: "32px",
                48: "48px",
            },
            padding: {
                8: "8px",
                10: "10px",
                16: "16px",
                20: "20px",
                24: "24px",
                32: "32px",
                48: "48px",
            },
            backgroundImage: {
                "gradient-button":
                    "linear-gradient(167deg, rgba(65,167,245,1) 0%, rgba(16,92,232,1) 100%)",
                "gradient-card":
                    "linear-gradient(146deg, rgba(65, 167, 245, 0.050) 0%, rgba(16, 92, 232, 0.050) 100%)",
                "gradient-dialog":
                    "linear-gradient(146deg, rgba(65, 167, 245, 0.50) 0%, rgba(16, 92, 232, 0.50) 100%)",
            },
        },
    },
    plugins: [],
});
