import breakpoints from './breakpoints';
import fonts from './fonts';
import fontSizes from './fontSizes';
import fontWeights from './fontWeights';
import sizes from './sizes';
import styles from './styles';
import text from './text';
import variants from './variants';

const colors = {
    transparent: 'transparent',
    current: 'currentColor',
    black: '#212121',
    white: '#fff',
    text: '#212121',
    background: '#fff',
    primary: '#f08c00',

    linkedin: '#0077b5',
    github: '#333',
    instagram: '#e1306c',
    facebook: '#3b5998',
    twitter: '#1da1f2',
    gray: {
        50: '#f8f9fa',
        100: '#f1f3f5',
        200: '#e9ecef',
        300: '#dee2e6',
        400: '#ced4da',
        500: '#adb5bd',
        600: '#868e96',
        700: '#495057',
        800: '#343a40',
        900: '#212529'
    }
};

const theme = {
    breakpoints,
    sizes,
    fonts,
    fontWeights,
    fontSizes,
    text,
    variants,
    styles,
    colors
};

export default theme;
