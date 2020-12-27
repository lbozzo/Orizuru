/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.sans],
                serif: ['IBM Plex Sans', ...defaultTheme.fontFamily.serif]
            },
            colors: {
                gray: colors.coolGray
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
