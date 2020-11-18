import { FacebookBox } from '@styled-icons/remix-line/FacebookBox';
import { Github } from '@styled-icons/remix-line/Github';
import { Instagram } from '@styled-icons/remix-line/Instagram';
import { LinkedinBox } from '@styled-icons/remix-line/LinkedinBox';
import { Twitter } from '@styled-icons/remix-line/Twitter';
import { FC } from 'react';
import { Box, Flex } from 'rebass';

import SocialLink from './SocialLink';

interface SocialLinkStripProps {
    size: number;
}

const SocialLinkStrip: FC<SocialLinkStripProps> = ({ size }) => (
    <Flex flexDirection="row" mx={[-2, -3]}>
        <Box mx={[2, 3]}>
            <SocialLink
                href="https://www.linkedin.com/in/lucas-bozzo/"
                icon={LinkedinBox}
                size={size}
                color="linkedin"
                altText="Follow me on LinkedIn"
            />
        </Box>
        <Box mx={[2, 3]}>
            <SocialLink
                href="https://github.com/lbozzo"
                icon={Github}
                size={size}
                altText="Follow me on Github"
            />
        </Box>
        <Box mx={[2, 3]}>
            <SocialLink
                href="https://www.instagram.com/lucasbozzo"
                icon={Instagram}
                size={size}
                color="instagram"
                altText="Follow me on Instagram"
            />
        </Box>
        <Box mx={[2, 3]}>
            <SocialLink
                href="https://www.facebook.com/lucas.jose.bozzo/"
                icon={FacebookBox}
                size={size}
                color="facebook"
                altText="Friend me on Facebook"
            />
        </Box>
        <Box mx={[2, 3]}>
            <SocialLink
                href="https://twitter.com/ljbozzo"
                icon={Twitter}
                size={size}
                color="twitter"
                altText="Follow me on Twitter"
            />
        </Box>
    </Flex>
);

export default SocialLinkStrip;
