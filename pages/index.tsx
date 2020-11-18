import { HddStack } from '@styled-icons/bootstrap/HddStack';
import { Laptop } from '@styled-icons/bootstrap/Laptop';
import { Phone } from '@styled-icons/bootstrap/Phone';
import { Amazonaws } from '@styled-icons/simple-icons/Amazonaws';
import { Apollographql } from '@styled-icons/simple-icons/Apollographql';
import { NextDotJs } from '@styled-icons/simple-icons/NextDotJs';
import { NodeDotJs } from '@styled-icons/simple-icons/NodeDotJs';
import { ReactLogo } from '@styled-icons/simple-icons/ReactLogo';
import { StyledComponents } from '@styled-icons/simple-icons/StyledComponents';
import { Typescript } from '@styled-icons/simple-icons/Typescript';
import { Box, Flex, Heading, Link, Text } from 'rebass/styled-components';

import Experience from '~components/Experience';
import Nav from '~components/Nav';
import ProfileQR from '~components/ProfileQR';
import Service from '~components/Service';
import Skill from '~components/Skill';
import SocialLinkStrip from '~components/SocialLinkStrip';

export default function Home(): JSX.Element {
    return (
        <Box as="main">
            <Flex flexDirection="column" height={['auto', '100vh']}>
                <Box as="nav">
                    <Nav />
                </Box>
                <Flex flex={1} px={[4, 4, 5, 6]} py={5}>
                    <Box width="100%" maxWidth="lg" mx="auto">
                        <Flex
                            flex={1}
                            flexWrap="wrap"
                            height="100%"
                            alignItems="center"
                            justifyContent="space-between">
                            <Box width={['100%', '100%', '100%', 1 / 2]}>
                                <Heading
                                    as="h1"
                                    lineHeight={{ _: 1, md: 1.618 }}
                                    sx={{ fontSize: 6 }}>
                                    Hey, I&apos;m{' '}
                                    <Heading
                                        as="span"
                                        color="primary"
                                        sx={{
                                            fontSize: 'inherit',
                                            lineHeight: 'inherit',
                                            display: 'inline-block',
                                            background:
                                                '-webkit-linear-gradient(left, #fab005, #e67700)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent'
                                        }}>
                                        Lucas Bozzo.
                                    </Heading>
                                </Heading>
                                <Box variant="body" my={[3, 2]} maxWidth="sm">
                                    <Text variant="body" sx={{ fontSize: 3, fontWeight: 'bold' }}>
                                        I&apos;m a web &amp; mobile developer and business analyst
                                        from Panama. I love movies and travel. Welcome to my
                                        website.
                                    </Text>
                                </Box>
                            </Box>
                            <Box width={['100%', '100%', '100%', 1 / 2]}>
                                <Flex
                                    flexDirection="column"
                                    alignItems={['center', 'center', 'center', 'flex-end']}>
                                    <ProfileQR />
                                </Flex>
                            </Box>
                        </Flex>

                        <Flex
                            flexDirection="row"
                            flexWrap="wrap"
                            alignItems="center"
                            justifyContent="space-between">
                            <Box width={['100%', '100%', 1 / 2]}>
                                <Flex
                                    flexDirection="row"
                                    justifyContent={['center', 'center', 'flex-start']}
                                    py={2}>
                                    <SocialLinkStrip size={26} />
                                </Flex>
                            </Box>
                            <Box
                                width={['100%', '100%', 1 / 2]}
                                py={2}
                                sx={{ textAlign: ['center', 'center', 'right'] }}>
                                <Link
                                    href="mailto:lucasbozzo03@gmail.com?subject=Hi Lucas! Let's get in touch"
                                    sx={{
                                        display: 'inline-block',
                                        ':hover': {
                                            color: 'primary'
                                        }
                                    }}>
                                    <Text variant="body" fontWeight="medium">
                                        lucasbozzo03@gmail.com
                                    </Text>
                                </Link>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
            <Box as="section" width="100%" maxWidth="lg" mx="auto">
                <Box px={[4, 4, 5, 0]} py={5}>
                    <Heading as="h2">What do I do?</Heading>
                    <Flex flexDirection="row" flexWrap="wrap" alignItems="flex-start" mx={[0, -4]}>
                        <Box width={['100%', '100%', '100%', 1 / 3]} pt={4} px={[0, 4]}>
                            <Service
                                icon={Laptop}
                                title="Websites"
                                description="I can bring your designs and imagination to life. My
                                        preferred tools are Next.js and styled-components."
                            />
                        </Box>
                        <Box width={['100%', '100%', '100%', 1 / 3]} pt={4} px={[0, 4]}>
                            <Service
                                icon={Phone}
                                title="Mobile"
                                description="I develop mobile apps for both iOS and Android operating
                                    systems. I use React Native."
                            />
                        </Box>
                        <Box width={['100%', '100%', '100%', 1 / 3]} pt={4} px={[0, 4]}>
                            <Service
                                icon={HddStack}
                                title="API"
                                description="I develop API's with all the business logic needed and
                                        hosted anywhere. My go-to tool is Node.js"
                            />
                        </Box>
                    </Flex>
                </Box>
            </Box>
            <Box as="section" width="100%" maxWidth="lg" mx="auto">
                <Box px={[4, 4, 5, 0]} py={5}>
                    <Heading as="h2">Experience</Heading>
                    <Box py={3}>
                        <Experience
                            startDate="Aug 2020"
                            endDate="Oct 2020"
                            company="Maddot Studio"
                            location="Remote"
                            position="Freelancer">
                            Developed landing page for their design studio startup using Next.js,
                            Styled-components, Framer motion and ThreeJS, including user interaction
                            with 3D Model.
                        </Experience>
                    </Box>
                    <Box py={3}>
                        <Experience
                            startDate="Apr 2017"
                            endDate="Aug 2019"
                            company="Copa Airlines"
                            location="Panama"
                            position="Business Systems Analyst">
                            Worked along Human Resources and Payroll business units for 32
                            countries. Led the release, migration and integrations of the new
                            systems for both business areas, Oracle HCM and SQLSoftware.
                        </Experience>
                    </Box>
                    <Box py={3}>
                        <Experience
                            startDate="Jan 2018"
                            endDate="Dec 2019"
                            company="Clariti Chile"
                            location="Remote"
                            position="Fullstack Developer">
                            Developed 2 applications, fullstack. The first, a mobile and web
                            application for vehicle inspections, using React Native and React.js in
                            the front end and Lumen PHP in the back end.The second, a coupon
                            redemption application for pharmacies, using Ant Design in the front end
                            and Express in the back end.
                        </Experience>
                    </Box>
                </Box>
            </Box>
            <Box as="section" width="100%" maxWidth="lg" mx="auto">
                <Box px={[4, 4, 5, 0]} py={5}>
                    <Heading as="h2" textAlign="center">
                        Skills
                    </Heading>
                    <Flex flexDirection="row" flexWrap="wrap" justifyContent="center" mx={-4}>
                        <Box p={4}>
                            <Skill icon={NextDotJs} name="Next.js" />
                        </Box>
                        <Box p={4}>
                            <Skill icon={ReactLogo} name="React Native" />
                        </Box>
                        <Box p={4}>
                            <Skill icon={Typescript} name="Typescript" />
                        </Box>
                        <Box p={4}>
                            <Skill icon={NodeDotJs} name="Node.js" />
                        </Box>
                        <Box p={4}>
                            <Skill icon={Apollographql} name="Apollo" />
                        </Box>
                        <Box p={4}>
                            <Skill icon={StyledComponents} name="Styled-components" />
                        </Box>
                        <Box p={4}>
                            <Skill icon={Amazonaws} name="AWS" />
                        </Box>
                    </Flex>
                    <Text variant="body" textAlign="center" color="gray.600">
                        Big fan and advocate of Open Source.
                    </Text>
                </Box>
            </Box>
            <Box as="section" width="100%" maxWidth="lg" mx="auto">
                <Box px={[4, 4, 5, 0]} py={5}>
                    <Heading as="h2">Just say Hello!</Heading>
                    <Box py={[2, 4]}>
                        <Text variant="body">
                            I&apos;m always happy to meet new people and talk about anything. Just
                            say hello ;)
                        </Text>
                    </Box>
                    <Flex flexDirection="row" flexWrap="wrap">
                        <Box width={['100%', '100%', 1 / 2]}>
                            <Box py={1}>
                                <Text variant="body" fontSize={1} color="primary">
                                    Mail me at
                                </Text>
                            </Box>
                            <Link
                                href="mailto:lucasbozzo03@gmail.com?subject=Hi Lucas! Let's get in touch"
                                sx={{
                                    display: 'inline-block',
                                    ':hover': {
                                        color: 'primary'
                                    }
                                }}>
                                <Text variant="body">lucasbozzo03@gmail.com</Text>
                            </Link>
                        </Box>
                        <Box width={['100%', '100%', 1 / 2]}>
                            <Box py={1}>
                                <Text variant="body" fontSize={1} color="primary">
                                    Follow me
                                </Text>
                            </Box>
                            <Box>
                                <SocialLinkStrip size={20} />
                            </Box>
                        </Box>
                    </Flex>
                </Box>
            </Box>
            <Box as="footer" py={3}>
                <Text variant="body" color="gray.600" textAlign="center" fontSize={0}>
                    Copyright &reg; {new Date().getFullYear()}. All rights reserved.
                </Text>
            </Box>
        </Box>
    );
}
