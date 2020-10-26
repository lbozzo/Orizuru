import { ArrowRightShort } from '@styled-icons/bootstrap/ArrowRightShort';
import { HddStack } from '@styled-icons/bootstrap/HddStack';
import { Laptop } from '@styled-icons/bootstrap/Laptop';
import { Phone } from '@styled-icons/bootstrap/Phone';
import { DocumentText } from '@styled-icons/ionicons-outline/DocumentText';
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
import ReadMore from '~components/ReadMore';
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
                                        I&apos;m a web &amp; mobile developer, business analyst,
                                        dreamer and traveller. I&apos;m from Panama and you are
                                        welcome to my website.
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
                                aria-label="Connect with me on LinkedIn"
                                href="https://www.linkedin.com/in/lucas-bozzo/"
                                target="_blank"
                                hoverColor="linkedin"
                                mx={{ _: 2, lg: 3 }}
                                rel="noreferrer">
                                <Icon icon={LinkedinBox} size={24} />
                            </Link>
                            <Link
                                aria-label="Star me on Github"
                                href="https://github.com/lbozzo"
                                target="_blank"
                                hoverColor="github"
                                mx={{ _: 2, lg: 3 }}
                                rel="noreferrer">
                                <Icon icon={Github} size={24} />
                            </Link>
                            <Link
                                aria-label="Follow me on Instagram"
                                href="https://www.instagram.com/lucasbozzo"
                                target="_blank"
                                hoverColor="instagram"
                                mx={{ _: 2, lg: 3 }}
                                rel="noreferrer">
                                <Icon icon={Instagram} size={24} />
                            </Link>
                            <Link
                                aria-label="Follow me on Facebook"
                                href="https://www.facebook.com/lucas.jose.bozzo/"
                                target="_blank"
                                hoverColor="facebook"
                                mx={{ _: 2, lg: 3 }}
                                rel="noreferrer">
                                <Icon icon={FacebookBox} size={24} />
                            </Link>
                            <Link
                                aria-label="Follow me on Twitter"
                                href="https://twitter.com/ljbozzo"
                                target="_blank"
                                hoverColor="twitter"
                                mx={{ _: 2, lg: 3 }}
                                rel="noreferrer">
                                <Icon icon={Twitter} size={24} />
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
                        <Box color="gray.900">
                            <Icon icon={Laptop} size={32} />
                        </Box>
                        <Box pt={2}>
                            <Box py={1}>
                                <Heading as="h3" fontSize={4} fontWeight="medium">
                                    Websites
                                </Heading>
                            </Box>
                            <Text textAlign="left">
                                I can bring to life your designs and imagination. My preferred tools
                                are Next.js and styled-components.
                            </Text>
                        </Box>
                    </Flex>
                    <Flex flex={1} pt={4} mx={4}>
                        <Box color="gray.900">
                            <Icon icon={Phone} size={32} />
                        </Box>
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
                        <Box color="gray.900">
                            <Icon icon={HddStack} size={32} />
                        </Box>
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
                            <Box color="gray.900">
                                <Icon icon={NextDotJs} size={40} />
                            </Box>
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
                <Flex flexDirection="row" alignItems="center">
                    <Flex flex={1} flexDirection="row" alignItems="center">
                        <Heading>Experience</Heading>
                        <Box px={3}>
                            <Link
                                aria-label="Download CV"
                                href="https://drive.google.com/file/d/1xStKeGkU5knbGqNZf1m30i-XNYYcut6W/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer">
                                <DocumentText size={28} />
                            </Link>
                        </Box>
                    </Flex>
                </Flex>
                <Flex pt={4}>
                    <Flex mb={4}>
                        <Text color="gray.700" fontSize={0} fontWeight="medium">
                            <Flex flexDirection="row" alignItems="center">
                                <Box>AUG 2020</Box>
                                <ArrowRightShort size={16} />
                                <Box>OCT 2020</Box>
                            </Flex>
                        </Text>
                        <Text fontSize={3}>
                            <b>Maddot Studio</b>, Remote – Freelancer
                        </Text>
                        <Box pt={2} maxWidth="md">
                            <ReadMore>
                                Developed landing page for their design studio using Next.js,
                                Styled-components, Framer motion and ThreeJS, including user
                                interaction with 3D Model.
                            </ReadMore>
                        </Box>
                    </Flex>
                    <Flex mb={4}>
                        <Text color="gray.700" fontSize={0} fontWeight="medium">
                            <Flex flexDirection="row" alignItems="center">
                                <Box>APR 2017</Box>
                                <ArrowRightShort size={16} />
                                <Box>AUG 2019</Box>
                            </Flex>
                        </Text>
                        <Text fontSize={3}>
                            <b>Copa Airlines</b>, Panama – Business Systems Analyst
                        </Text>
                        <Box pt={2} maxWidth="md">
                            <ReadMore>
                                Worked along Human Resources and Payroll business units for 32
                                countries. Led the release, migration and integrations of the new
                                systems for both business areas, Oracle HCM and SQLSoftware.
                            </ReadMore>
                        </Box>
                    </Flex>
                    <Flex mb={4}>
                        <Text color="gray.700" fontSize={0} fontWeight="medium">
                            <Flex flexDirection="row" alignItems="center">
                                <Box>JAN 2018</Box>
                                <ArrowRightShort size={16} />
                                <Box>DEC 2019</Box>
                            </Flex>
                        </Text>
                        <Text fontSize={3}>
                            <b>Clariti Chile</b>, Remote – Software Developer
                        </Text>
                        <Box pt={2} maxWidth="md">
                            <ReadMore>
                                Developed 2 applications, fullstack. The first, a mobile and web
                                application for vehicle inspections, using React Native and React.js
                                in the front end and Lumen PHP in the back end.The second, a coupon
                                redemption application for pharmacies, using Ant Design in the front
                                end and Express in the back end.
                            </ReadMore>
                        </Box>
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
                                            aria-label="Connect with me on LinkedIn"
                                            href="https://www.linkedin.com/in/lucas-bozzo/"
                                            target="_blank"
                                            hoverColor="linkedin"
                                            mx={{ _: 2 }}
                                            rel="noreferrer">
                                            <Icon icon={LinkedinBox} size={20} />
                                        </Link>
                                        <Link
                                            aria-label="Star me on Github"
                                            href="https://github.com/lbozzo"
                                            target="_blank"
                                            hoverColor="github"
                                            mx={{ _: 2 }}
                                            rel="noreferrer">
                                            <Icon icon={Github} size={20} />
                                        </Link>
                                        <Link
                                            aria-label="Follow me on Instagram"
                                            href="https://www.instagram.com/lucasbozzo"
                                            target="_blank"
                                            hoverColor="instagram"
                                            mx={{ _: 2 }}
                                            rel="noreferrer">
                                            <Icon icon={Instagram} size={20} />
                                        </Link>
                                        <Link
                                            aria-label="Follow me on Facebook"
                                            href="https://www.facebook.com/lucas.jose.bozzo/"
                                            target="_blank"
                                            hoverColor="facebook"
                                            mx={{ _: 2 }}
                                            rel="noreferrer">
                                            <Icon icon={FacebookBox} size={20} />
                                        </Link>
                                        <Link
                                            aria-label="Follow me on Twitter"
                                            href="https://twitter.com/ljbozzo"
                                            target="_blank"
                                            hoverColor="twitter"
                                            mx={{ _: 2 }}
                                            rel="noreferrer">
                                            <Icon icon={Twitter} size={20} />
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
                        bg="gray.900"
                        color="white">
                        <Box py={4} px={5}>
                            Contact form coming soon!
                        </Box>
                    </Flex>
                </Flex>
            </Flex>
            <Flex py={2} bg="background">
                <Text color="gray.600" textAlign="center" fontSize={0}>
                    Copyright &reg; {new Date().getFullYear()}. All rights reserved.
                </Text>
            </Flex>
        </Flex>
    );
}
