import { StyledIcon } from '@styled-icons/styled-icon';
import { createElement, FC } from 'react';
import { Box, Heading, Text } from 'rebass/styled-components';

interface ServiceProps {
    icon: StyledIcon;
    title: string;
    description: string;
}
const Service: FC<ServiceProps> = ({ icon, title, description }) => (
    <>
        <Box color="gray.900">{createElement(icon, { size: 32 })}</Box>
        <Box pt={2}>
            <Box py={1}>
                <Heading as="p" color="primary" fontWeight="medium" fontSize={4}>
                    {title}
                </Heading>
            </Box>
            <Text variant="body" textAlign="left" color="gray.700">
                {description}
            </Text>
        </Box>
    </>
);

export default Service;
