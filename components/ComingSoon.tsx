import { useRouter } from 'next/dist/client/router';
import { Box, Button, Flex, Heading, Text } from 'rebass/styled-components';
const ComingSoon = (): JSX.Element => {
    const router = useRouter();
    return (
        <Flex flexDirection="column" minHeight="100vh" justifyContent="center" alignItems="center">
            <Heading as="h1" fontSize={7} textAlign="center">
                Coming Soon!
            </Heading>
            <Text fontSize={3} textAlign="center" color="gray.800">
                I&apos;m working on it :)
            </Text>
            <Box pt={4}>
                <Button bg="gray.700" onClick={() => router.back()}>
                    Go back
                </Button>
            </Box>
        </Flex>
    );
};

export default ComingSoon;
