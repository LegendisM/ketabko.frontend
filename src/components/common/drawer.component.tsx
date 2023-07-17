import Link from "next/link";
import { i18n } from "@/i18n/i18n";
import { FC, PropsWithChildren } from "react";
import { PAGES } from "@/constants/global.constant";
import { Drawer, Box, Avatar, Typography, List, ListItem, Divider } from "@mui/material";
import ArrowIcon from "@mui/icons-material/KeyboardArrowLeft";

const DrawerPro: FC<PropsWithChildren & { opened: boolean, onClose: Function, forceClose: Function }> = ({ opened, onClose, forceClose }) => {
    return (
        <Drawer
            anchor={'right'}
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
                <Avatar src="/images/common/avatar.png" sx={{ width: '60px', height: '60px' }} />
                <Typography variant="body2" fontWeight={'bold'} color={'white'} marginTop={'14px'}>{i18n('common:welcome')}</Typography>
            </Box>
            <List disablePadding>
                {
                    PAGES.map(({ name, href }) => (
                        <ListItem key={name} divider onClick={() => forceClose()}>
                            <Link href={href} style={{ color: 'inherit', textDecoration: 'none', width: '100%' }} >
                                <Box display={'flex'} justifyItems={'baseline'} justifyContent={'space-between'}>
                                    <Typography>{name}</Typography>
                                    <ArrowIcon />
                                </Box>
                            </Link>
                        </ListItem>
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