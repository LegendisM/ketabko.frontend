"use client"
import { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "@emotion/react";
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import rtlPlugin from 'stylis-plugin-rtl';
import localFont from "next/font/local";
import { createTheme, Box, responsiveFontSizes } from "@mui/material";

const defaultFont = localFont({
    src: [
        {
            path: './../../../public/fonts/Medium.ttf',
            weight: '400'
        },
        {
            path: './../../../public/fonts/Black.ttf',
            weight: '600'
        }
    ],
    variable: '--font-default'
});

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

let theme = createTheme({
    direction: 'rtl',
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
                position: 'relative',
                elevation: 0,
                color: 'default'
            }
        },
        MuiDrawer: {
            defaultProps: {
                elevation: 2
            }
        }
    },
    typography: {
        fontFamily: `${defaultFont.style.fontFamily}`
    },
    shape: {
        borderRadius: 6
    }
});

theme = responsiveFontSizes(theme);

const Theme: FC<PropsWithChildren> = ({ children }) => {
    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <Box component={'body'} sx={{ backgroundColor: theme.palette.background.default, width: '100vw', height: '100vh' }}>
                    {children}
                </Box>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default Theme;