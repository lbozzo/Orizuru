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
    background: '#171923',
    primary: '#f08c00',

    linkedin: '#0077b5',
    github: '#333',
    instagram: '#e1306c',
    facebook: '#3b5998',
    twitter: '#1da1f2',
    gray: {
        50: 'rgba(255,255,255,0)',
        100: 'rgba(255,255,255,0.05)',
        200: 'rgba(255,255,255,0.1)',
        300: 'rgba(255,255,255,0.2)',
        400: 'rgba(255,255,255,0.3)',
        500: 'rgba(255,255,255,0.4)',
        600: 'rgba(255,255,255,0.5)',
        700: 'rgba(255,255,255,0.6)',
        800: 'rgba(255,255,255,0.9)',
        900: 'rgba(255,255,255,0.95)'
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
