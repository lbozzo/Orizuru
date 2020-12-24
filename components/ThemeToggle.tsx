import { NightsStay as LightOff } from '@styled-icons/material-twotone/NightsStay';
import { WbSunny as LightOn } from '@styled-icons/material-twotone/WbSunny';
import { useContext } from 'react';
import { Box } from 'rebass/styled-components';

const ThemeToggle = (): JSX.Element => {
    return (
        /*
        <Box as="button" onClick={() => >
            {colorMode == 'light' ? (
                <Box
                    sx={{
                        color: 'gray.800',
                        transition: 'color 250ms ease-in-out',
                        ':hover': { color: 'primary' }
                    }}>
                    <LightOff size={28} />
                </Box>
            ) : (
                <Box
                    sx={{
                        color: 'primary',
                        transition: 'color 250ms ease-in-out',
                        ':hover': { color: 'gray.800' }
                    }}>
                    <LightOn size={28} />
                </Box>
            )}
        </Box>
        */
        <div>tbd</div>
    );
};

export default ThemeToggle;
