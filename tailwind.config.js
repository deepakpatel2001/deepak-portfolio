/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}', './node_modules/flowbite/**/*.js'],
    theme: {
        extend: {
            fontFamily: {
                gilroyregular: ['Gilroy-Regular'],
                gilroymedium: ['Gilroy-Medium'],
                gilroysemibold: ['Gilroy-Semibold'],
                gilroybold: ['Gilroy-Bold'],
            },
        },
    },
    plugins: [require('flowbite/plugin')],
};

