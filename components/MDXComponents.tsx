import { ComponentProps } from 'react';
import { Box, Heading, Text } from 'rebass/styled-components';

const MDXComponents = {
    h1: (props: ComponentProps<typeof Heading>): JSX.Element => (
        <Heading as="h1" my={3} {...props} />
    ),
    h2: (props: ComponentProps<typeof Heading>): JSX.Element => (
        <Heading as="h2" mt={1} mb={2} fontSize={3} lineHeight={1.618} {...props} />
    ),
    h3: (props: ComponentProps<typeof Heading>): JSX.Element => (
        <Heading as="h2" fontFamily="charter" fontSize={2} color="gray.800" {...props} />
    ),
    p: (props: ComponentProps<typeof Text>): JSX.Element => (
        <Text fontSize={1} lineHeight={1.8} mt={1} mb={2} {...props} />
    ),
    wrapper: (props: ComponentProps<typeof Box>): JSX.Element => (
        <Box maxWidth="md" mx="auto">
            <Box as="main" {...props} />
        </Box>
    )
};

export default MDXComponents;
