import React, { createContext, FC } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import dark from 'styles/theme/dark';
import light from 'styles/theme/light';

export const ThemeContext = createContext(undefined);

const ThemeProvider: FC = ({ children }): JSX.Element => {
    const [colorMode, rawSetColorMode] = React.useState(undefined);

    React.useEffect(() => {
        rawSetColorMode(document.body.className);
    }, []);

    const contextValue = React.useMemo(() => {
        function setColorMode(newValue) {
            localStorage.setItem('color-mode', newValue);
            rawSetColorMode(newValue);
        }

        return {
            colorMode,
            setColorMode
        };
    }, [colorMode, rawSetColorMode]);

    return (
        <ThemeContext.Provider value={contextValue}>
            <StyledThemeProvider theme={colorMode == 'light' ? light : dark}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
