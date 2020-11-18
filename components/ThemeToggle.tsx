import { NightsStay as LightOff } from '@styled-icons/material-twotone/NightsStay';
import { WbSunny as LightOn } from '@styled-icons/material-twotone/WbSunny';
import { useContext } from 'react';
import { Box } from 'rebass/styled-components';

import { ThemeContext } from '~components/ThemeContext';

const ThemeToggle = (): JSX.Element => {
    const { colorMode, setColorMode } = useContext(ThemeContext);

    return (
        <Box as="button" onClick={() => setColorMode(colorMode == 'light' ? 'dark' : 'light')}>
            {colorMode == 'light' ? (
                <Box
                    as="button"
                    sx={{
                        color: 'gray.800',
                        transition: 'color 250ms ease-in-out',
                        ':hover': { color: 'primary' }
                    }}>
                    <LightOff size={28} />
                </Box>
            ) : (
                <Box
                    as="button"
                    sx={{
                        color: 'primary',
                        transition: 'color 250ms ease-in-out',
                        ':hover': { color: 'gray.800' }
                    }}>
                    <LightOn size={28} />
                </Box>
            )}
        </Box>
    );
};

export default ThemeToggle;
