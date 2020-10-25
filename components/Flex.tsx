import css from '@styled-system/css';
import styled from 'styled-components';
import { compose, flexbox, FlexboxProps } from 'styled-system';
import Box, { BoxProps } from './Box';

export interface FlexProps extends BoxProps, FlexboxProps {}

const Flex = styled(Box)<FlexProps>(
    css({ display: 'flex', flexDirection: 'column' }),
    compose(flexbox)
);

export default Flex;
