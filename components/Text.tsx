import css from '@styled-system/css';
import styled from 'styled-components';
import { color, ColorProps, compose, typography, TypographyProps } from 'styled-system';

export interface TextProps extends ColorProps, TypographyProps {}

const Text = styled('p')<TextProps>(
    css({
        fontWeight: 'normal',
        fontSize: 1,
        fontFamily: 'sans-serif',
        color: 'gray.800',
        lineHeight: 1.618
    }),
    compose(color, typography)
);

export default Text;
