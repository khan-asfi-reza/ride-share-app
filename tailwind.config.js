const plugin = require('tailwindcss/plugin');

module.exports = {
    plugins: [
        plugin(({ addUtilities }) => {
            addUtilities({
                'text-base': {
                    fontFamily: "poppins",
                },
                'text-regular': {
                    fontFamily: "poppins",
                },
                'text-medium': {
                    fontFamily: "poppins-medium",

                },
                'text-semibold': {
                    fontFamily: "poppins-semibold",

                },
                'text-bold': {
                    fontFamily: "poppins-bold",
                },
            });
        }),
    ],
};