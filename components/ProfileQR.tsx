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
                <Box opacity={showQR ? 0 : 1} sx={{ position: 'absolute' }}>
                    <CoverImage
                        alt="Profile"
                        src="/assets/images/profile.jpg"
                        width={width}
                        height={height}
                        quality={85}
                        priority
                    />
                </Box>
                <Box opacity={showQR ? 1 : 0} sx={{ position: 'absolute' }}>
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
