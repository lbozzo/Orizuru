import styled from 'styled-components';
import { darken } from 'polished';
import css from '@styled-system/css';
import { themeGet } from '@styled-system/theme-get';
import {
    color,
    ColorProps,
    compose,
    fontWeight,
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
                color: hoverColor || darken(0.1, themeGet('colors.text', '#000')(props))
            }
        }),
    compose(color, space, typography)
);

export default Link;
