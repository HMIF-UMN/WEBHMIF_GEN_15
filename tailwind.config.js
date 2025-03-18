const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                kanit: "Kanit",
                "kanit-light": '"Kanit Light"',
                "kanit-medium": '"Kanit Medium"',
                "kanit-bold": '"Kanit Bold"',
                "kanit-semibold": '"Kanit SemiBold"',
                "kanit-extrabold": '"Kanit ExtraBold"',
                "kanit-black": '"Kanit Black"',
                "montserrat-bold": '"Montserrat Bold"',
                worksans: "WorkSans",
                tomorrow: "Tomorrow",
                "tungsten-rounded": "TungstenRounded",
                robotoMono: ["RobotoMono", "monospace"],
            },
            colors: {
                "if-black": "#0a0c0f",
                "if-light-black": "#0B0B0B",
                "if-lighter-black": "#171717",
                "if-white": "#f0f2f5",
                "if-gray": "#a3afc2",
                "if-neutral": {
                    100: "#e0e4eb",
                    200: "#c2cad6",
                    300: "#a3afc2",
                    400: "#8494ae",
                    500: "#667a9a",
                    600: "#51617b",
                    700: "#3d495c",
                    800: "#29313d",
                    900: "#14181f",
                },
                "umn-blue": {
                    50: "#e7f3fe",
                    100: "#cfe8fc",
                    200: "#9fd1f9",
                    300: "#6fb9f6",
                    400: "#3ea2f4",
                    500: "#0b6fc1",
                    600: "#095797",
                    700: "#095390",
                    800: "#063860",
                    900: "#031c30",
                },
                "if-blue": {
                    50: "#e8f6fc",
                    100: "#d1eefa",
                    200: "#a3dcf5",
                    300: "#75cbf0",
                    400: "#47baeb",
                    500: "#189fd9",
                    600: "#1487b8",
                    700: "#0f658a",
                    800: "#0a435c",
                    900: "#05222e",
                },
                "if-red": {
                    50: "#fce9eb",
                    100: "#f8d3d7",
                    200: "#f1a7ae",
                    300: "#ea7b86",
                    400: "#e34f5e",
                    500: "#bf1e2e",
                    600: "#b01c2b",
                    700: "#841520",
                    800: "#580e15",
                    900: "#2c070b",
                },
                "if-orange": {
                    50: "#fcefe8",
                    100: "#faded1",
                    200: "#f4bda4",
                    300: "#ef9c76",
                    400: "#ea7b48",
                    500: "#e66225",
                    600: "#b74815",
                    700: "#893610",
                    800: "#5b240b",
                    900: "#2e1205",
                },
                ppif: {
                    white: "#E0E4EB",
                    pink: {
                        100: "#ED006C",
                        200: "#6A085B",
                        300: "#3D103B",
                    },
                    blue: {
                        100: "#01CFFE",
                        200: "#0B48F8",
                        300: "#001D7F",
                    },
                },
            },
        },
        dropShadow: {
            dropShadowHMIF: "0px 4px 12px rgba(9, 83, 144, 0.6)",
        },

        //Marquee for running icon
        animation: {
            marquee: "marquee 25s linear infinite",
            marquee2: "marquee2 25s linear infinite",
            spin: "spin 3s linear infinite",
        },
        keyframes: {
            marquee: {
                "0%": { transform: "translateX(0%)" },
                "100%": { transform: "translateX(-100%)" },
            },
            marquee2: {
                "0%": { transform: "translateX(100%)" },
                "100%": { transform: "translateX(0%)" },
            },
            spin: {
                "0%": { transform: "rotate(0deg)" },
                "100%": { transform: "rotate(360deg)" },
            },
        },
    },

    plugins: [
        require("@tailwindcss/forms"),
        require("tailwind-gradient-mask-image"),
        require("daisyui"),
    ],
};
