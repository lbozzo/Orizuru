import { Arrow90degUp } from '@styled-icons/bootstrap/Arrow90degUp';
import { Scan } from '@styled-icons/boxicons-regular/Scan';
import css from '@styled-system/css';
import Image from 'next/image';
import { useState } from 'react';
import { Box, Flex, Text } from 'rebass/styled-components';
import styled from 'styled-components';

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
                width={width}
                height={height}
                overflow="hidden"
                sx={{
                    position: 'relative',
                    borderRadius: 6,
                    boxShadow: '0px 0px 12px rgba(24,24,24,0.3)'
                }}>
                <Box opacity={showQR ? 0 : 1}>
                    <Image
                        alt="Profile"
                        src="/assets/images/profile.jpg"
                        quality={100}
                        layout="fill"
                        objectFit="cover"
                        loading="eager"
                    />
                </Box>
                <Box opacity={showQR ? 1 : 0}>
                    <Image
                        alt="QR Contact"
                        src="/assets/images/qrcontact.svg"
                        quality={100}
                        layout="fill"
                        objectFit="cover"
                        loading="lazy"
                    />
                </Box>
            </Flex>

            {!showQR ? (
                <Flex flexDirection="row" alignItems="center" justifyContent="center" py={1}>
                    <Arrow90degUp size={16} />
                    <Box px={1}>
                        <Text variant="body" fontSize={0} fontWeight="medium">
                            Click me
                        </Text>
                    </Box>
                </Flex>
            ) : (
                <Flex flexDirection="row" alignItems="center" justifyContent="center" py={1}>
                    <Scan size={16} />
                    <Box px={1}>
                        <Text variant="body" fontSize={0} fontWeight="medium">
                            Scan me
                        </Text>
                    </Box>
                </Flex>
            )}
        </Box>
    );
};
export default ProfileQR;
