import { Theme } from 'styled-system';

import COMMON from './common';

const colors = {
    transparent: 'transparent',
    current: 'currentColor',
    black: '#212121',
    white: '#f8f8f8',
    text: '#212121',
    background: '#f8f8f8',

    linkedin: '#0077b5',
    github: '#333',
    instagram: '#e1306c',
    facebook: '#3b5998',
    twitter: '#1da1f2',
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
