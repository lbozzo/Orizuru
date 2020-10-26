import { ArrowRightShort } from '@styled-icons/bootstrap/ArrowRightShort';
import css from '@styled-system/css';
import { FC } from 'react';
import styled from 'styled-components';

import Box from './Box';
import Flex from './Flex';
import ReadMore from './ReadMore';
import Text from './Text';

export interface ExperienceProps {
    startDate: string;
    endDate: string;
    company: string;
    location: string;
    position: string;
}

const Date = styled(Text)(
    css({
        fontSize: 0,
        fontWeight: 'medium',
        textTransform: 'uppercase',
        color: 'gray.700',
        lineHeight: 1
    })
);

const Experience: FC<ExperienceProps> = ({
    startDate,
    endDate,
    company,
    location,
    position,
    children
}) => (
    <Box>
        <Flex flexDirection="row" alignItems="center">
            <Date>{startDate}</Date>
            <ArrowRightShort size={16} />
            <Date>{endDate}</Date>
        </Flex>
        <Text lineHeight={2} fontSize={3}>
            <b>{company}</b>, {location} – {position}
        </Text>
        <Box maxWidth="md">
            <ReadMore>{children}</ReadMore>
        </Box>
    </Box>
);

export default Experience;
