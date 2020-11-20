import {
    motion,
    useCycle,
    useMotionTemplate,
    useTransform,
    useViewportScroll
} from 'framer-motion';
import NLink from 'next/link';
import { Box, Flex, Link } from 'rebass/styled-components';

import ThemeToggle from './ThemeToggle';

const Path = (props) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="currentcolor"
        strokeLinecap="round"
        {...props}
    />
);

export const MenuToggle = ({
    toggle
}: {
    toggle: (event: React.MouseEvent<HTMLElement>) => void;
}): JSX.Element => (
    <Box as="button" onClick={toggle} color="gray.900">
        <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
                variants={{
                    closed: { d: 'M 2 2.5 L 20 2.5' },
                    open: { d: 'M 3 16.5 L 17 2.5' }
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: 'M 2 16.346 L 20 16.346' },
                    open: { d: 'M 3 2.5 L 17 16.346' }
                }}
            />
        </svg>
    </Box>
);

const Nav = (): JSX.Element => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const menu = {
        open: {
            transform: 'translateY(0%)',
            transition: {
                type: 'tween',
                ease: 'easeInOut',
                duration: 0.55
            }
        },
        closed: {
            transform: 'translateY(-100%)',
            transition: {
                type: 'tween',
                ease: 'easeInOut',
                duration: 0.55
            }
        }
    };
    const { scrollY } = useViewportScroll();
    const borderOpacity = useTransform(scrollY, [0, 150], [0, 0.1]);
    const border = useMotionTemplate`1px solid rgba(140, 140, 140,${borderOpacity})`;

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            style={{ position: 'fixed', width: '100%', borderBottom: border, zIndex: 50 }}>
            <Flex bg="background" sx={{ transition: 'background-color 450ms ease-in-out' }}>
                <Flex
                    flex={1}
                    flexDirection="row"
                    alignItems="center"
                    maxWidth="xl"
                    mx="auto"
                    py={3}
                    px={3}
                    sx={{ zIndex: 1 }}>
                    <Box>
                        <ThemeToggle />
                    </Box>
                    <Flex flex={1} mx={4} justifyContent={['center', 'flex-start']}>
                        <Box width="fit-content">
                            <NLink href="/" passHref>
                                <Link
                                    title="Lucas Bozzo Cepeda"
                                    variant="brand"
                                    sx={{
                                        display: 'inline-block',
                                        background:
                                            '-webkit-linear-gradient(left, #fcc419, #e67700)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent'
                                    }}>
                                    LBC
                                </Link>
                            </NLink>
                        </Box>
                    </Flex>
                    <Box display={['none', 'none', 'block']}>
                        <Flex flexDirection="row" alignItems="center">
                            <NLink href="/blog" passHref>
                                <Link variant="nav">blog</Link>
                            </NLink>
                            <NLink href="/projects" passHref>
                                <Link variant="nav">projects</Link>
                            </NLink>
                            <NLink href="/about" passHref>
                                <Link variant="nav">about</Link>
                            </NLink>
                            <NLink href="/contact" passHref>
                                <Link variant="navButton">contact me</Link>
                            </NLink>
                        </Flex>
                    </Box>
                    <Box display={['block', 'block', 'none']}>
                        <MenuToggle toggle={() => toggleOpen()} />
                    </Box>
                </Flex>

                <motion.div
                    style={{
                        position: 'absolute'
                    }}
                    variants={menu}>
                    <Flex
                        flexDirection="column"
                        justifyContent="flex-start"
                        width="100vw"
                        height="100vh"
                        overflow="auto"
                        bg="background"
                        pt={5}
                        px={4}>
                        <NLink href="/blog" passHref>
                            <Link variant="nav" sx={{ fontSize: 5 }}>
                                blog
                            </Link>
                        </NLink>
                        <NLink href="/projects" passHref>
                            <Link variant="nav" sx={{ fontSize: 5 }}>
                                projects
                            </Link>
                        </NLink>
                        <NLink href="/about" passHref>
                            <Link variant="nav" sx={{ fontSize: 5 }}>
                                about
                            </Link>
                        </NLink>
                        <NLink href="/contact" passHref>
                            <Link variant="navButton" sx={{ fontSize: 5 }}>
                                contact me
                            </Link>
                        </NLink>
                    </Flex>
                </motion.div>
            </Flex>
        </motion.nav>
    );
};

export default Nav;
