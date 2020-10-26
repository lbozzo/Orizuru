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
}

const Link = styled('a')<LinkProps>(
    ({ hoverColor, ...props }) =>
        css({
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            lineHeight: 2,
            color: 'text',
            '&:hover': {
                color: hoverColor || themeGet('colors.primary', '#000')(props)
            }
        }),
    compose(color, space, typography)
);

export default Link;
