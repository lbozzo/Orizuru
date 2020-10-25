import Box from '~components/Box';
import Flex from '~components/Flex';
import Heading from '~components/Heading';
import Text from '~components/Text';
import {
    RiLinkedinBoxLine,
    RiGithubLine,
    RiInstagramLine,
    RiFacebookBoxLine,
    RiTwitterLine
} from 'react-icons/ri';
import { AiOutlineDesktop, AiOutlineMobile, AiOutlineApi } from 'react-icons/ai';
import {
    SiReact,
    SiTypescript,
    SiNextDotJs,
    SiStyledComponents,
    SiNodeDotJs,
    SiApollographql
} from 'react-icons/si';
import { CgMouse } from 'react-icons/cg';
import { BsArrowDownShort } from 'react-icons/bs';
import Link from '~components/Link';
import { compose, typography, TypographyProps } from 'styled-system';
import styled from 'styled-components';
import ProfileQR from '~components/ProfileQR';

interface IconProps extends TypographyProps {}
const LinkedInIcon = styled(RiLinkedinBoxLine)<IconProps>(compose(typography));
const GithubIcon = styled(RiGithubLine)<IconProps>(compose(typography));
const InstagramIcon = styled(RiInstagramLine)<IconProps>(compose(typography));
const FacebookIcon = styled(RiFacebookBoxLine)<IconProps>(compose(typography));
const TwitterIcon = styled(RiTwitterLine)<IconProps>(compose(typography));
const MobileIcon = styled(AiOutlineMobile)<IconProps>(compose(typography));
const WebIcon = styled(AiOutlineDesktop)<IconProps>(compose(typography));
const APIIcon = styled(AiOutlineApi)<IconProps>(compose(typography));
const ApolloIcon = styled(SiApollographql)<IconProps>(compose(typography));
const MouseIcon = styled(CgMouse)<IconProps>(compose(typography));
const TSIcon = styled(SiTypescript)<IconProps>(compose(typography));
const ReactIcon = styled(SiReact)<IconProps>(compose(typography));
const NextJSIcon = styled(SiNextDotJs)<IconProps>(compose(typography));
const NodeJSIcon = styled(SiNodeDotJs)<IconProps>(compose(typography));
const StyledIcon = styled(SiStyledComponents)<IconProps>(compose(typography));

const ArrowDownIcon = styled(BsArrowDownShort)<IconProps>(compose(typography));

export default function Home() {
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
                                        I'm a web &amp; mobile developer, dreamer and traveller. I'm
                                        from Panama and you are welcome to my website.
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
                                href="#"
                                target="_blank"
                                hoverColor="linkedin"
                                mx={{ _: 2, lg: 3 }}>
                                <LinkedInIcon
                                    aria-label="Connect with me on LinkedIn"
                                    fontSize={4}
                                />
                            </Link>
                            <Link href="#" target="_blank" hoverColor="github" mx={{ _: 2, lg: 3 }}>
                                <GithubIcon aria-label="Star me on Github" fontSize={4} />
                            </Link>
                            <Link
                                href="#"
                                target="_blank"
                                hoverColor="instagram"
                                mx={{ _: 2, lg: 3 }}>
                                <InstagramIcon aria-label="Follow me on Instagram" fontSize={4} />
                            </Link>
                            <Link
                                href="#"
                                target="_blank"
                                hoverColor="facebook"
                                mx={{ _: 2, lg: 3 }}>
                                <FacebookIcon aria-label="Follow me on Facebook" fontSize={4} />
                            </Link>
                            <Link
                                href="#"
                                target="_blank"
                                hoverColor="twitter"
                                mx={{ _: 2, lg: 3 }}>
                                <TwitterIcon aria-label="Follow me on Twitter" fontSize={4} />
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
                        <WebIcon fontSize={5} />
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
                        <MobileIcon fontSize={5} />
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
                        <APIIcon fontSize={5} />
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
                            <NextJSIcon fontSize={6} />
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
                            <ReactIcon fontSize={6} />
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
                            <TSIcon fontSize={6} />
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
                            <NodeJSIcon fontSize={6} />
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
                            <ApolloIcon fontSize={6} />
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
                            <StyledIcon fontSize={6} />
                            <Box mx={2}>
                                <Text textAlign={{ _: 'center', md: 'left' }} fontSize={2}>
                                    Styled-components
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
                                            href="#"
                                            target="_blank"
                                            hoverColor="linkedin"
                                            mx={{ _: 2 }}>
                                            <LinkedInIcon
                                                aria-label="Connect with me on LinkedIn"
                                                fontSize={3}
                                            />
                                        </Link>
                                        <Link
                                            href="#"
                                            target="_blank"
                                            hoverColor="github"
                                            mx={{ _: 2 }}>
                                            <GithubIcon
                                                aria-label="Star me on Github"
                                                fontSize={3}
                                            />
                                        </Link>
                                        <Link
                                            href="#"
                                            target="_blank"
                                            hoverColor="instagram"
                                            mx={{ _: 2 }}>
                                            <InstagramIcon
                                                aria-label="Follow me on Instagram"
                                                fontSize={3}
                                            />
                                        </Link>
                                        <Link
                                            href="#"
                                            target="_blank"
                                            hoverColor="facebook"
                                            mx={{ _: 2 }}>
                                            <FacebookIcon
                                                aria-label="Follow me on Facebook"
                                                fontSize={3}
                                            />
                                        </Link>
                                        <Link
                                            href="#"
                                            target="_blank"
                                            hoverColor="twitter"
                                            mx={{ _: 2 }}>
                                            <TwitterIcon
                                                aria-label="Follow me on Twitter"
                                                fontSize={3}
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
