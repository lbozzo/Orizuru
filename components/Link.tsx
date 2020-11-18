import css from '@styled-system/css';
import { themeGet } from '@styled-system/theme-get';
import { darken } from 'polished';
import styled from 'styled-components';
import {
    color,
    ColorProps,
    compose,
    space,
    SpaceProps,
    typography,
    TypographyProps
} from 'styled-system';

export interface LinkProps extends ColorProps, SpaceProps, TypographyProps {
    hoverColor?: string;
    decorated?: boolean;
}

const Link = styled('a')<LinkProps>(
    ({ hoverColor, decorated = false, ...props }) =>
        css({
            cursor: 'pointer',
            display: 'inline-block',
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            textDecoration: decorated ? 'underline' : 'none',
            lineHeight: 2,
            color: 'gray.900',
            '&:hover': {
                color: hoverColor || themeGet('colors.primary', '#000')(props)
            },
            '&:focus, &:active, &:visited': {
                textDecoration: decorated ? 'underline' : 'none'
            }
        }),
    compose(color, space, typography)
);

export default Link;
