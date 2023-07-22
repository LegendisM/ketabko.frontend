"use client"
import Link from "next/link";
import { i18n } from "@/i18n/i18n";
import { FC, PropsWithChildren, useContext } from "react";
import { PAGES } from "@/constants/page.constant";
import { Drawer, Box, Typography, List, ListItem, Divider } from "@mui/material";
import ArrowIcon from "@mui/icons-material/KeyboardArrowLeft";
import AvatarPro from "./avatar.component";
import { AuthContext } from "./auth";

const DrawerPro: FC<PropsWithChildren & { opened: boolean, onClose: Function, forceClose: Function }> = ({ opened, onClose, forceClose }) => {
    const { state: authState } = useContext(AuthContext);
    return (
        <Drawer
            anchor={'left'}
            open={opened}
            onClose={() => onClose()}
        >
            <Box sx={{
                width: '255px',
                height: '145px',
                backgroundImage: 'url(/images/common/logo-text.png)',
                backgroundRepeat: 'space',
                backgroundSize: '32%',
                backgroundColor: '#9d0a6b',
                backgroundBlendMode: 'soft-light'
            }} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                <AvatarPro />
                <Typography variant="body2" fontWeight={'bold'} color={'white'} marginTop={'14px'}>{i18n('common:welcome')}</Typography>
            </Box>
            <List disablePadding>
                {
                    PAGES.filter(page => page.inMenu).map(({ name, href, auth }) => (
                        (auth == 'all' || auth == authState) ?
                            (
                                <ListItem key={name} divider onClick={() => forceClose()}>
                                    <Link href={href} style={{ color: 'inherit', textDecoration: 'none', width: '100%' }} >
                                        <Box display={'flex'} justifyItems={'baseline'} justifyContent={'space-between'}>
                                            <Typography>{name}</Typography>
                                            <ArrowIcon />
                                        </Box>
                                    </Link>
                                </ListItem>
                            )
                            : null
                    ))
                }
            </List>
            <Box position={'absolute'} bottom={0} left={0} right={0} textAlign={'center'}>
                <Divider />
                <Typography variant="caption">Version 1.0.0</Typography>
            </Box>
        </Drawer>
    );
}

export default DrawerPro;