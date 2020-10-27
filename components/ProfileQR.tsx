import { Arrow90degUp } from '@styled-icons/bootstrap/Arrow90degUp';
import { Scan } from '@styled-icons/boxicons-regular/Scan';
import Image from 'next/image';
import { useState } from 'react';

import Box from './Box';
import Flex from './Flex';
import Text from './Text';

const ProfileQR = (): JSX.Element => {
    const [showQR, toggleShowQR] = useState<boolean>(false);
    return (
        <Box onClick={() => toggleShowQR(!showQR)}>
            <Flex borderRadius={6} overflow="hidden" boxShadow="medium">
                <Box
                    position="relative"
                    width={{ _: 225, lg: 300 }}
                    height={{ _: 225, lg: 300 }}
                    bg="gray.100">
                    <Box position="absolute" style={{ display: showQR ? 'none' : 'block' }}>
                        <style global jsx>{`
                            .profile-photo {
                                object-fit: cover;
                            }
                        `}</style>
                        <Image
                            alt="Profile"
                            src="/assets/images/profile.jpg"
                            width={300}
                            height={300}
                            className="profile-photo"
                            quality={85}
                            priority
                        />
                    </Box>
                    <Box position="absolute" style={{ display: showQR ? 'block' : 'none' }}>
                        <Image
                            alt="QR Contact"
                            src="/assets/images/qrcontact.svg"
                            width={300}
                            height={300}
                            priority
                        />
                    </Box>
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
