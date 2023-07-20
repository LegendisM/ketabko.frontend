"use client"
import { useToggle } from "react-use";
import { FC, PropsWithChildren } from "react";
import { AppBar, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./logo.component";
import DrawerPro from "./drawer.component";

const Header: FC<PropsWithChildren> = () => {
    const [isToggled, toggleDrawer] = useToggle(false);

    return (
        <AppBar sx={{ padding: '8px' }}>
            <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <IconButton onClick={() => toggleDrawer(true)} >
                    <MenuIcon />
                </IconButton>
                <DrawerPro
                    opened={isToggled}
                    onClose={() => toggleDrawer(false)}
                    forceClose={() => toggleDrawer(false)}
                />
                <Logo isText={true} />
                <Logo isText={false} />
            </Box>
        </AppBar>
    );
}

export default Header;
