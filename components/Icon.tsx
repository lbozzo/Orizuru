import { StyledIcon } from '@styled-icons/styled-icon';
import { createElement } from 'react';
import styled from 'styled-components';
import { compose, size, SizeProps } from 'styled-system';

export interface IconProps extends SizeProps {
    title?: string | null;
}

const Icon = styled(({ icon, ...props }: { icon: StyledIcon }) => {
    return createElement(icon, props);
})<IconProps>(compose(size));

export default Icon;
