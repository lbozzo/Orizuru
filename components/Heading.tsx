import css from '@styled-system/css';
import styled from 'styled-components';
import { color, ColorProps, compose, typography, TypographyProps } from 'styled-system';

export interface HeadingProps extends ColorProps, TypographyProps {}

const Heading = styled('h2')<HeadingProps>(
    css({
        fontFamily: 'sans-serif',
        fontSize: 5,
        fontWeight: 'bold',
        color: 'primary',
        lineHeight: [1.618]
    }),
    compose(typography, color)
);

export default Heading;
