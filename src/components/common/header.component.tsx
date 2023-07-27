"use client"
import { useToggle } from "react-use";
import { FC } from "react";
import { AppBar, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./logo.component";
import DrawerPro from "./drawer.component";
import { usePathname } from "next/navigation";
import { BackButton } from "./buttons.component";

const Header: FC = () => {
    const pathname = usePathname();
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
                {
                    pathname == "/" ?
                        <Logo isText={false} />
                        : <BackButton />
                }
            </Box>
        </AppBar>
    );
}

export default Header;
