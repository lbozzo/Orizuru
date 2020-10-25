import { Arrow90degUp } from '@styled-icons/bootstrap/Arrow90degUp';
import { Scan } from '@styled-icons/boxicons-regular/Scan';
import css from '@styled-system/css';
import { useState } from 'react';
import styled from 'styled-components';

import Box from './Box';
import Flex from './Flex';
import Text from './Text';

const ProfileQR = () => {
    const [show, toggleShow] = useState(false);
    return (
        <Box onClick={() => toggleShow(!show)}>
            <Flex borderRadius={6} overflow="hidden">
                <Box position="relative" width={{ _: 225, lg: 300 }} height={{ _: 225, lg: 300 }}>
                    <Box position="absolute" bg="black" p={2} opacity={+show}>
                        <img
                            alt="QR Contact"
                            src="/assets/images/qrcontact.jpg"
                            style={{ width: '100%', height: '100%' }}
                        />
                    </Box>
                    <img
                        alt="Profile"
                        src="/assets/images/profile.jpeg"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                </Box>
            </Flex>

            {!show ? (
                <Flex flexDirection="row" alignItems="center" justifyContent="center" py={1}>
                    <Arrow90degUp size={16} />
                    <Box px={1}>
                        <Text fontSize={0} lineHeight={1}>
                            Click me
                        </Text>
                    </Box>
                </Flex>
            ) : (
                <Flex flexDirection="row" alignItems="center" justifyContent="center" py={1}>
                    <Scan size={16} />
                    <Box px={1}>
                        <Text fontSize={0} lineHeight={1}>
                            Scan me
                        </Text>
                    </Box>
                </Flex>
            )}
        </Box>
    );
};
export default styled(ProfileQR)(css({ cursor: 'pointer', bg: 'red' }));
