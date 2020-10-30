import { Arrow90degUp } from '@styled-icons/bootstrap/Arrow90degUp';
import { Scan } from '@styled-icons/boxicons-regular/Scan';
import css from '@styled-system/css';
import Image from 'next/image';
import { useState } from 'react';
import styled from 'styled-components';

import Box from './Box';
import Flex from './Flex';
import Text from './Text';

const CoverImage = styled(Image)(
    css({
        objectFit: 'cover'
    })
);
const ProfileQR = (): JSX.Element => {
    const [showQR, toggleShowQR] = useState<boolean>(false);
    const width = 275;
    const height = 275;
    return (
        <Box onClick={() => toggleShowQR(!showQR)}>
            <Flex
                position="relative"
                borderRadius={6}
                width={width}
                height={height}
                overflow="hidden"
                boxShadow="medium">
                <Box position="absolute" style={{ opacity: showQR ? 0 : 1 }}>
                    <CoverImage
                        alt="Profile"
                        src="/assets/images/profile.jpg"
                        width={width}
                        height={height}
                        quality={85}
                        priority
                    />
                </Box>
                <Box position="absolute" style={{ opacity: showQR ? 1 : 0 }}>
                    <CoverImage
                        alt="QR Contact"
                        src="/assets/images/qrcontact.svg"
                        width={width}
                        height={height}
                        quality={100}
                    />
                </Box>
            </Flex>

            {!showQR ? (
                <Flex flexDirection="row" alignItems="center" justifyContent="center" py={1}>
                    <Arrow90degUp size={16} />
                    <Box px={1}>
                        <Text fontSize={0} fontWeight="medium" lineHeight={1}>
                            Click me
                        </Text>
                    </Box>
                </Flex>
            ) : (
                <Flex flexDirection="row" alignItems="center" justifyContent="center" py={1}>
                    <Scan size={16} />
                    <Box px={1}>
                        <Text fontSize={0} fontWeight="medium" lineHeight={1}>
                            Scan me
                        </Text>
                    </Box>
                </Flex>
            )}
        </Box>
    );
};
export default ProfileQR;
