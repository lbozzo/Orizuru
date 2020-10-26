import css from '@styled-system/css';
import styled from 'styled-components';
import { color, ColorProps, compose, typography, TypographyProps } from 'styled-system';

export interface HeadingProps extends ColorProps, TypographyProps {}

const Heading = styled('h2')<HeadingProps>(
    css({
        fontFamily: 'sans-serif',
        fontSize: 5,
        fontWeight: 'bold',
        color: 'text',
        lineHeight: [1.2, 1.2, 1.5]
    }),
    compose(typography, color)
);

export default Heading;