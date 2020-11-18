import { StyledIcon } from '@styled-icons/styled-icon';
import { createElement } from 'react';
import styled from 'styled-components';
import { color, ColorProps, compose, size, SizeProps } from 'styled-system';

export interface IconProps extends SizeProps, ColorProps {
    title?: string | null;
    size: number;
    icon: StyledIcon;
}

const Icon = styled(({ icon, ...props }: { icon: StyledIcon }) => {
    return createElement(icon, props);
})<IconProps>({ color: 'inherit' });

export default Icon;
