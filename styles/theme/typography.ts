import { fontStack } from './utils';

export const fonts = {
    'sans-serif': fontStack([
        'Rubik',
        'SFMono-Regular',
        'Consolas',
        'Liberation Mono',
        'Menlo',
        'Courier',
        'monospace'
    ])
};

export const fontSizes: FontSizes = [
    '12px',
    '14px',
    '16px',
    '20px',
    '24px',
    '32px',
    '40px',
    '48px'
];

fontSizes.caption = fontSizes[0];
fontSizes.body = fontSizes[2];
fontSizes.h1 = fontSizes[6];
fontSizes.h2 = fontSizes[5];
fontSizes.h3 = fontSizes[4];
fontSizes.h4 = fontSizes[3];

export const fontWeights = {
    light: 300,
    normal: 400,
    medium: 500,
    bold: 700,
    extrabold: 800
};