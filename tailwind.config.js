// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
    purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: [
                'Work Sans',
                'system-ui',
                '-apple-system',
                'Segoe UI',
                'Roboto',
                'Helvetica',
                'Arial',
                'sans-serif',
                'Apple Color Emoji',
                'Segoe UI Emoji'
            ],
            serif: [
                'Charter',
                'system-ui',
                '-apple-system',
                'Segoe UI',
                'Roboto',
                'Helvetica',
                'Arial',
                'sans-serif',
                'Apple Color Emoji',
                'Segoe UI Emoji'
            ]
        },
        extend: {
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
