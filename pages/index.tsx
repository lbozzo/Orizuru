import { HddStack } from '@styled-icons/bootstrap/HddStack';
import { Laptop } from '@styled-icons/bootstrap/Laptop';
import { Phone } from '@styled-icons/bootstrap/Phone';
import { FacebookBox } from '@styled-icons/remix-line/FacebookBox';
import { Github } from '@styled-icons/remix-line/Github';
import { Instagram } from '@styled-icons/remix-line/Instagram';
import { LinkedinBox } from '@styled-icons/remix-line/LinkedinBox';
import { Twitter } from '@styled-icons/remix-line/Twitter';
import { Amazonaws } from '@styled-icons/simple-icons/Amazonaws';
import { Apollographql } from '@styled-icons/simple-icons/Apollographql';
import { NextDotJs } from '@styled-icons/simple-icons/NextDotJs';
import { NodeDotJs } from '@styled-icons/simple-icons/NodeDotJs';
import { ReactLogo } from '@styled-icons/simple-icons/ReactLogo';
import { StyledComponents } from '@styled-icons/simple-icons/StyledComponents';
import { Typescript } from '@styled-icons/simple-icons/Typescript';

import Box from '~components/Box';
import Flex from '~components/Flex';
import Heading from '~components/Heading';
import Icon from '~components/Icon';
import Link from '~components/Link';
import ProfileQR from '~components/ProfileQR';
import Text from '~components/Text';

export default function Home(): JSX.Element {
    return (
        <Flex>
            <Flex
                as="section"
                bg="background"
                px={{ _: 3, md: 5, lg: 6, xl: 7 }}
                minHeight={{ _: 'auto', lg: '100vh' }}>
                <Flex
                    flex={1}
                    mx="auto"
                    py={{ _: 4 }}
                    maxWidth="xl"
                    justifyContent={{ _: 'space-between', md: 'center' }}>
                    <Flex flex={1} flexDirection={{ _: 'column', md: 'row' }} mx={{ _: 0, lg: -3 }}>
                        <Flex flex={1} justifyContent="center" mx={{ lg: 3 }}>
                            <Box>
                                <Heading as="h1" fontWeight="normal">
                                    I&apos;m <b>Lucas Jos&eacute; Bozzo.</b>
                                </Heading>
                                <Box my={2}>
                                    <Text fontSize={3}>
                                        I&apos;m a web &amp; mobile developer, dreamer and
                                        traveller. I&apos;m from Panama and you are welcome to my
                                        website.
                                    </Text>
                                </Box>
                            </Box>
                        </Flex>
                        <Flex
                            alignItems="center"
                            justifyContent="center"
                            my={{ _: 2 }}
                            mx={{ lg: 3 }}>
                            <ProfileQR />
                        </Flex>
                    </Flex>
                    <Flex pt={{ _: 3 }} flexDirection={{ _: 'column', md: 'row' }}>
                        <Flex
                            flex={1}
                            flexDirection="row"
                            justifyContent={{ _: 'center', md: 'flex-start' }}
                            my={1}
                            mx={{ _: -2, lg: -3 }}>
                            <Link
                                href="https://www.linkedin.com/in/lucas-bozzo/"
                                target="_blank"
                                hoverColor="linkedin"
                                mx={{ _: 2, lg: 3 }}>
                                <Icon
                                    icon={LinkedinBox}
                                    size={24}
                                    title="Connect with me on LinkedIn"
                                />
                            </Link>
                            <Link
                                href="https://github.com/lbozzo"
                                target="_blank"
                                hoverColor="github"
                                mx={{ _: 2, lg: 3 }}>
                                <Icon icon={Github} size={24} title="Star me on Github" />
                            </Link>
                            <Link
                                href="https://www.instagram.com/lucasbozzo"
                                target="_blank"
                                hoverColor="instagram"
                                mx={{ _: 2, lg: 3 }}>
                                <Icon icon={Instagram} size={24} title="Follow me on Instagram" />
                            </Link>
                            <Link
                                href="https://www.facebook.com/lucas.jose.bozzo/"
                                target="_blank"
                                hoverColor="facebook"
                                mx={{ _: 2, lg: 3 }}>
                                <Icon icon={FacebookBox} size={24} title="Follow me on Facebook" />
                            </Link>
                            <Link
                                href="https://twitter.com/ljbozzo"
                                target="_blank"
                                hoverColor="twitter"
                                mx={{ _: 2, lg: 3 }}>
                                <Icon icon={Twitter} size={24} title="Follow me on Twitter" />
                            </Link>
                        </Flex>

                        <Flex flex={1} pt={2}>
                            <a href="mailto:lucasbozzo03@gmail.com?subject=Hi Lucas! Let's get in touch">
                                <Text textAlign={{ _: 'center', md: 'right' }} lineHeight={2}>
                                    lucasbozzo03@gmail.com
                                </Text>
                            </a>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex
                as="section"
                bg="background"
                px={{ _: 3, md: 5, lg: 6, xl: 7 }}
                py={{ _: 4, md: 5 }}>
                <Heading>What do I do?</Heading>
                <Flex flexDirection={{ _: 'column', lg: 'row' }} mx={{ _: 0, lg: -4 }}>
                    <Flex flex={1} pt={4} mx={4}>
                        <Icon icon={Laptop} size={32} />
                        <Box pt={2}>
                            <Box py={1}>
                                <Heading as="h3" fontSize={4} fontWeight="medium">
                                    Website
                                </Heading>
                            </Box>
                            <Text textAlign="left">
                                I can bring to life your designs and imagination. My preferred tools
                                are Next.js and styled-components.
                            </Text>
                        </Box>
                    </Flex>
                    <Flex flex={1} pt={4} mx={4}>
                        <Icon icon={Phone} size={32} />
                        <Box pt={2}>
                            <Box py={1}>
                                <Heading as="h3" fontSize={4} fontWeight="medium">
                                    Mobile
                                </Heading>
                            </Box>
                            <Text textAlign="left">
                                I develop mobile apps for both iOS and Android operating systems. I
                                use React Native.
                            </Text>
                        </Box>
                    </Flex>
                    <Flex flex={1} pt={4} mx={4}>
                        <Icon icon={HddStack} size={32} />
                        <Box pt={2}>
                            <Box py={1}>
                                <Heading as="h3" fontSize={4} fontWeight="medium">
                                    API
                                </Heading>
                            </Box>
                            <Text textAlign="left">
                                I develop API&apos;s with all the business logic needed and hosted
                                anywhere. My go-to tool is Node.js
                            </Text>
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
            <Flex
                as="section"
                bg="background"
                px={{ _: 3, md: 5, lg: 6, xl: 7 }}
                py={{ _: 4, md: 5 }}>
                <Heading>Skills</Heading>

                <Flex flexDirection="row" flexWrap="wrap" mx={{ _: 0, lg: -4 }}>
                    <Flex width={{ _: 1 / 2, sm: 1 / 3 }}>
                        <Flex
                            pt={4}
                            mx={4}
                            flexDirection={{ _: 'column', md: 'row' }}
                            alignItems="center">
                            <Icon icon={NextDotJs} size={40} />
                            <Box mx={2}>
                                <Text textAlign={{ _: 'center', md: 'left' }} fontSize={2}>
                                    Next.js
                                </Text>
                            </Box>
                        </Flex>
                    </Flex>
                    <Flex width={{ _: 1 / 2, sm: 1 / 3 }}>
                        <Flex
                            pt={4}
                            mx={4}
                            flexDirection={{ _: 'column', md: 'row' }}
                            alignItems="center">
                            <Icon icon={ReactLogo} size={40} />
                            <Box mx={2}>
                                <Text textAlign={{ _: 'center', md: 'left' }} fontSize={2}>
                                    React Native
                                </Text>
                            </Box>
                        </Flex>
                    </Flex>
                    <Flex width={{ _: 1 / 2, sm: 1 / 3 }}>
                        <Flex
                            pt={4}
                            mx={4}
                            flexDirection={{ _: 'column', md: 'row' }}
                            alignItems="center">
                            <Icon icon={Typescript} size={40} />
                            <Box mx={2}>
                                <Text textAlign={{ _: 'center', md: 'left' }} fontSize={2}>
                                    Typescript
                                </Text>
                            </Box>
                        </Flex>
                    </Flex>
                    <Flex width={{ _: 1 / 2, sm: 1 / 3 }}>
                        <Flex
                            pt={4}
                            mx={4}
                            flexDirection={{ _: 'column', md: 'row' }}
                            alignItems="center">
                            <Icon icon={NodeDotJs} size={40} />
                            <Box mx={2}>
                                <Text textAlign={{ _: 'center', md: 'left' }} fontSize={2}>
                                    Node.js
                                </Text>
                            </Box>
                        </Flex>
                    </Flex>
                    <Flex width={{ _: 1 / 2, sm: 1 / 3 }}>
                        <Flex
                            pt={4}
                            mx={4}
                            flexDirection={{ _: 'column', md: 'row' }}
                            alignItems="center">
                            <Icon icon={Apollographql} size={40} />
                            <Box mx={2}>
                                <Text textAlign={{ _: 'center', md: 'left' }} fontSize={2}>
                                    Apollo
                                </Text>
                            </Box>
                        </Flex>
                    </Flex>
                    <Flex width={{ _: 1 / 2, sm: 1 / 3 }}>
                        <Flex
                            pt={4}
                            mx={4}
                            flexDirection={{ _: 'column', md: 'row' }}
                            alignItems="center">
                            <Icon icon={StyledComponents} size={40} />
                            <Box mx={2}>
                                <Text textAlign={{ _: 'center', md: 'left' }} fontSize={2}>
                                    Styled-components
                                </Text>
                            </Box>
                        </Flex>
                    </Flex>
                    <Flex width={{ _: 1 / 2, sm: 1 / 3 }}>
                        <Flex
                            pt={4}
                            mx={4}
                            flexDirection={{ _: 'column', md: 'row' }}
                            alignItems="center">
                            <Icon icon={Amazonaws} size={40} />
                            <Box mx={2}>
                                <Text textAlign={{ _: 'center', md: 'left' }} fontSize={2}>
                                    AWS
                                </Text>
                            </Box>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex
                as="section"
                bg="background"
                px={{ _: 3, md: 5, lg: 6, xl: 7 }}
                py={{ _: 4, md: 5 }}>
                <Flex flexDirection={{ _: 'column', md: 'row' }} m={{ _: 0, md: -3 }}>
                    <Flex flex={1} m={{ _: 0, md: 3 }}>
                        <Heading>Just say Hello!</Heading>
                        <Box>
                            <Box py={{ _: 2, md: 4 }}>
                                <Text fontSize={2}>
                                    I&apos;m always happy to meet new people and talk about
                                    anything. Just say hello ;)
                                </Text>
                            </Box>
                            <Flex flexDirection={{ _: 'column', md: 'row' }}>
                                <Flex flex={1} my={{ _: 2 }}>
                                    <Box py={1}>
                                        <Heading as="h3" fontSize={1} fontWeight="light">
                                            Mail me at
                                        </Heading>
                                    </Box>
                                    <a href="mailto:lucasbozzo03@gmail.com?subject=Hi Lucas! Let's get in touch">
                                        <Text lineHeight={2}>lucasbozzo03@gmail.com</Text>
                                    </a>
                                </Flex>
                                <Flex flex={1} my={{ _: 2 }}>
                                    <Box py={1}>
                                        <Heading as="h3" fontSize={1} fontWeight="light">
                                            Follow me
                                        </Heading>
                                    </Box>
                                    <Flex
                                        flexDirection="row"
                                        justifyContent="flex-start"
                                        mx={{ _: -2 }}>
                                        <Link
                                            href="https://www.linkedin.com/in/lucas-bozzo/"
                                            target="_blank"
                                            hoverColor="linkedin"
                                            mx={{ _: 2 }}>
                                            <Icon
                                                icon={LinkedinBox}
                                                size={20}
                                                title="Connect with me on LinkedIn"
                                            />
                                        </Link>
                                        <Link
                                            href="https://github.com/lbozzo"
                                            target="_blank"
                                            hoverColor="github"
                                            mx={{ _: 2 }}>
                                            <Icon
                                                icon={Github}
                                                size={20}
                                                title="Star me on Github"
                                            />
                                        </Link>
                                        <Link
                                            href="https://www.instagram.com/lucasbozzo"
                                            target="_blank"
                                            hoverColor="instagram"
                                            mx={{ _: 2 }}>
                                            <Icon
                                                icon={Instagram}
                                                size={20}
                                                title="Follow me on Instagram"
                                            />
                                        </Link>
                                        <Link
                                            href="https://www.facebook.com/lucas.jose.bozzo/"
                                            target="_blank"
                                            hoverColor="facebook"
                                            mx={{ _: 2 }}>
                                            <Icon
                                                icon={FacebookBox}
                                                size={20}
                                                title="Follow me on Facebook"
                                            />
                                        </Link>
                                        <Link
                                            href="https://twitter.com/ljbozzo"
                                            target="_blank"
                                            hoverColor="twitter"
                                            mx={{ _: 2 }}>
                                            <Icon
                                                icon={Twitter}
                                                size={20}
                                                title="Follow me on Twitter"
                                            />
                                        </Link>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Box>
                    </Flex>
                    <Flex
                        flex={1}
                        my={{ _: 3, md: 3 }}
                        mx={{ _: 0, md: 3 }}
                        bg="black"
                        color="white">
                        <Box py={4} px={5}>
                            Contact form coming soon!
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
            <Flex py={2} bg="background">
                <Text textAlign="center" fontSize={0}>
                    Copyright &reg; {new Date().getFullYear()}. All rights reserved.
                </Text>
            </Flex>
        </Flex>
    );
}
