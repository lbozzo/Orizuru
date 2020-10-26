import styled from 'styled-components';
import {
    border,
    BorderProps,
    compose,
    layout,
    LayoutProps,
    space,
    SpaceProps
} from 'styled-system';

export interface ImgProps extends BorderProps, LayoutProps, SpaceProps {}
const Img = styled('img')<ImgProps>(compose(border, layout, space));

export default Img;
