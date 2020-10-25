import css from '@styled-system/css';
import styled from 'styled-components';
import { color, ColorProps, compose, layout, LayoutProps, space, SpaceProps } from 'styled-system';

export interface TextInputProps extends ColorProps, LayoutProps, SpaceProps {}

const TextInput = styled('input')<TextInputProps>(
    css({
        bg: 'transparent',
        border: 'none',
        width: '100%',
        fontWeight: 'light',
        color: 'inherit',
        borderBottomWidth: 2,
        borderBottomStyle: 'solid',
        borderBottomColor: 'black'
    }),
    compose(color, layout, space)
);

export default TextInput;
