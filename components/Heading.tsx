import css from '@styled-system/css';
import styled from 'styled-components';
import { color, ColorProps, compose, typography, TypographyProps } from 'styled-system';

export interface HeadingProps extends ColorProps, TypographyProps {}

const Heading = styled('h2')<HeadingProps>(
    css({
        fontFamily: 'sans-serif',
        fontSize: 5,
        fontWeight: 'bold',
        color: 'gray.900',
        lineHeight: [1.618],
        '&:hover': {
            color: 'primary'
        }
    }),
    compose(typography, color)
);

export default Heading;
