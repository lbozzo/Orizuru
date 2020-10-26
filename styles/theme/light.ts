import { Theme } from 'styled-system';

import COMMON from './common';

const colors = {
    transparent: 'transparent',
    current: 'currentColor',
    black: '#212121',
    white: '#fff',
    text: '#212121',
    background: '#fff',
    primary: '#1A365D',

    linkedin: '#0077b5',
    github: '#333',
    instagram: '#e1306c',
    facebook: '#3b5998',
    twitter: '#1da1f2',
    gray: {
        50: '#F7FAFC',
        100: '#EDF2F7',
        200: '#E2E8F0',
        300: '#CBD5E0',
        400: '#A0AEC0',
        500: '#718096',
        600: '#4A5568',
        700: '#2D3748',
        800: '#1A202C',
        900: '#171923'
    }
};

const shadows = {
    small: '0 1px 0 rgba(150, 150, 150, 0.3)',
    medium: '0 3px 6px rgba(150, 150, 150, 0.35)',
    large: '0 8px 24px rgba(150, 150, 150, 0.2)',
    'extra-large': '0 12px 48px rgba(150, 150, 150, 0.3)'
};

const theme: Theme = {
    ...COMMON,
    colors,
    shadows
};

export default theme;
