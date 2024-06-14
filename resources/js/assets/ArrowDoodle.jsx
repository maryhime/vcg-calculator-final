import React from "react";

const ArrowDoodle = ({ className }) => {
    return (
        <svg
            className={className}
            viewBox="0 0 160 124"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_877_7503)">
                <path
                    d="M4.22216 85.6779C42.0464 89.8526 82.2012 83.2126 111.906 57.5176C120.604 49.9937 128.365 38.5568 133.868 28.3267C135.031 26.1648 135.815 23.8283 136.652 21.5221C137.416 19.4159 143.568 33.9921 144.373 35.6485C152.985 53.3573 143.289 34.5076 140.89 27.3572C139.028 21.8079 138.694 15.159 135.956 9.93613C133.751 5.73052 126.708 11.9342 123.918 13.5365C121.049 15.184 100.638 23.1917 107.2 27.5202C118.973 35.2866 132.224 36.6767 145.432 39.9354"
                    stroke="url(#paint0_linear_877_7503)"
                    strokeWidth="5"
                    strokeLinecap="round"
                />
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_877_7503"
                    x1="127.623"
                    y1="-1.86328"
                    x2="149.362"
                    y2="100.108"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#41A7F5" />
                    <stop offset="1" stopColor="#105CE8" />
                </linearGradient>
                <clipPath id="clip0_877_7503">
                    <rect
                        width="154.092"
                        height="52.6983"
                        fill="white"
                        transform="matrix(-0.864096 0.503327 0.503327 0.864096 133.15 0.269531)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};

export default ArrowDoodle;
