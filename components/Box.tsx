import styled from 'styled-components';
import {
    border,
    BorderProps,
    boxShadow,
    BoxShadowProps,
    color,
    ColorProps,
    compose,
    layout,
    LayoutProps,
    position,
    PositionProps,
    space,
    SpaceProps
} from 'styled-system';

export interface BoxProps
    extends BorderProps,
        BoxShadowProps,
        ColorProps,
        LayoutProps,
        PositionProps,
        SpaceProps {}

const Box = styled('div')<BoxProps>(compose(border, boxShadow, color, layout, position, space));

export default Box;
