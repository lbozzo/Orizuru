import { ArrowRightShort } from '@styled-icons/bootstrap/ArrowRightShort';
import css from '@styled-system/css';
import { FC } from 'react';
import { Box, Flex, Heading, Text } from 'rebass/styled-components';
import styled from 'styled-components';

import ReadMore from './ReadMore';

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
        fontWeight: 'bold',
        fontFamily: 'body',
        textTransform: 'uppercase',
        color: 'gray.700'
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
        <Box py={1}>
            <Heading as="p" fontSize={3} fontWeight="medium">
                <Heading as="span" fontSize="inherit" fontWeight="bold" color="gray.800">
                    {company}
                </Heading>
                , {location} – {position}
            </Heading>
        </Box>
        <Box maxWidth="md">
            <ReadMore textShow="Read more" textHide="Read less">
                {children}
            </ReadMore>
        </Box>
    </Box>
);

export default Experience;
