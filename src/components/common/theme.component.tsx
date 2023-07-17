"use client"
import { createTheme, Box } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { FC, PropsWithChildren } from "react";
import localFont from "next/font/local";

const defaultFont = localFont({
    src: './../../../public/fonts/Medium.ttf'
});

const BoldFont = localFont({
    src: './../../../public/fonts/Black.ttf'
});

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#840fff',
        },
        secondary: {
            main: '#d11ccc',
        },
        background: {
            default: "#dad2d8",
            paper: "#f5f5f5"
        },
        contrastThreshold: 2.5,
        tonalOffset: 0.1,
    },
    components: {
        MuiAppBar: {
            defaultProps: {
                position: 'fixed',
                elevation: 0,
                color: 'default'
            }
        }
    },
    typography: {
        fontFamily: `${defaultFont.style.fontFamily},${BoldFont.style.fontFamily}`
    },
    shape: {
        borderRadius: 6
    },
});

export const Theme: FC<PropsWithChildren> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ backgroundColor: theme.palette.background.default, width: '100vw', height: '100vh' }}>
                {children}
            </Box>
        </ThemeProvider>
    );
}

export default Theme;