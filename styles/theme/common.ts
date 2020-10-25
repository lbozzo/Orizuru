import { fonts, fontSizes, fontWeights } from './typography';

export const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

const breakpoints: Breakpoints = ['375px', '544px', '768px', '1012px', '1280px'];
breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];

export const sizes = {
    xs: '375px',
    sm: '544px',
    md: '768px',
    lg: '1012px',
    xl: '1280px'
};

export const radii = {
    0: '0',
    3: '3px',
    6: '6px',
    half: '50%',
    full: '100%'
};

const common = {
    fonts,
    fontSizes,
    fontWeights,
    space,
    breakpoints,
    sizes,
    radii
};

export default common;
