import { Arrow90degUp } from '@styled-icons/bootstrap/Arrow90degUp';
import { Scan } from '@styled-icons/boxicons-regular/Scan';
import Image from 'next/image';
import { useState } from 'react';

import Box from './Box';
import Flex from './Flex';
import Text from './Text';

const ProfileQR = (): JSX.Element => {
    const [show, toggleShow] = useState(false);
    return (
        <Box onClick={() => toggleShow(!show)}>
            <Flex borderRadius={6} overflow="hidden" boxShadow="medium">
                <Box position="relative" width={{ _: 225, lg: 300 }} height={{ _: 225, lg: 300 }}>
                    <Box position="absolute" bg="black" width="100%" height="100%" opacity={+show}>
                        <Box m={1}>
                            <Image
                                alt="QR Contact"
                                src="/assets/images/qrcontact.svg"
                                width={300}
                                height={300}
                            />
                        </Box>
                    </Box>
                    <Box width="100%" height="100%" opacity={+!show}>
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
                            quality={100}
                        />
                    </Box>
                </Box>
            </Flex>

            {!show ? (
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
