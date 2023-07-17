"use client"
import { i18n } from "@/i18n/i18n";
import { useToggle } from "react-use";
import { PAGES } from "@/constants/global.constant";
import { FC, PropsWithChildren } from "react";
import { AppBar, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./logo.component";

export const Header: FC<PropsWithChildren> = () => {
    const [isToggled, toggleDrawer] = useToggle(false);

    return (
        <AppBar sx={{ padding: '8px' }}>
            <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <IconButton onClick={() => toggleDrawer(true)} >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    anchor={'right'}
                    open={isToggled}
                    onClose={() => toggleDrawer(false)}
                >
                    <List>
                        {
                            PAGES.map(({ name, href }) => (
                                <ListItem key={name} disablePadding>
                                    <ListItemButton LinkComponent={"a"} href={href}>
                                        <ListItemIcon>
                                            {1 % 2 === 0 ? <MenuIcon /> : <MenuIcon />}
                                        </ListItemIcon>
                                        <ListItemText primary={name} />
                                    </ListItemButton>
                                </ListItem>
                            ))
                        }
                        <Divider />
                    </List>
                </Drawer>
                <Logo isText={true} />
                <Logo isText={false} />
            </Box>
        </AppBar>
    );
}

export default Header;
