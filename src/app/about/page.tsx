"use client"
import { Box, Container, Paper, Typography, Divider, Card, CardMedia, CardContent, IconButton } from "@mui/material";
import { GitHub, Telegram, Instagram } from "@mui/icons-material";
import { FC } from "react";

const About: FC = () => {
    return (
        <Box marginTop={'5vh'}>
            <Container maxWidth="sm" >
                <Card sx={{ display: 'flex', borderRadius: '6px' }} >
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image="/images/common/owner.png"
                        alt="Owner Profile Image"
                    />
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 0.8, width: '100%' }}>
                        <Typography fontWeight={'bold'} fontSize={'0.95rem'}>
                            حمیدرضا محمدی
                        </Typography>
                        <Divider />
                        <Box display={'flex'} flexDirection={'column'} gap={0.3}>
                            <Typography variant="subtitle2" color="text.secondary" component="div">
                                توسعه دهنده و برنامه نویس
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary" component="div">
                                NestJS Developer / NextJS Developer
                            </Typography>
                            <Box>
                                <IconButton size="small" href="https://github.com/LegendisM">
                                    <GitHub />
                                </IconButton>
                                <IconButton size="small" href="https://github.com/LegendisM">
                                    <Telegram />
                                </IconButton>
                                <IconButton size="small" href="https://github.com/LegendisM">
                                    <Instagram />
                                </IconButton>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
                <Paper sx={{ padding: '15px', marginY: '15px' }}>
                    <Typography>
                        این پلتفرم با تمرکز و پیاده سازی الگو های عملی کتاب هایی که در دسته بهره وری و موفقیت فردی نقش بسزایی دارند ، باعث شده تا کاربر در زمان کم تر و راحت تر به خروجی کتاب ها دسترسی داشته و به صورت عملی بتواند از آن ها جهت برنامه ریزی و هدف سازی استفاده کند.
                    </Typography>
                    <Divider sx={{ marginY: '5px' }} />
                    <Typography variant="overline" marginY={'3px'}>
                        1. دسترسی آسان و سریع تر به خروجی ها و الگو های پیاده سازی شده به صورت گرافیکی
                    </Typography>
                    <br />
                    <Typography variant="overline" marginY={'3px'}>
                        2. معرفی کتاب های توسعه فردی / روانشناسی / موفقیت فردی به صورت خلاصه.
                    </Typography>
                    <br />
                    <Typography variant="overline" marginY={'3px'}>
                        3. گزارش گیری / زمان بندی یادآوری / اطلاع رسانی براساس استفاده از الگوریتم های ثبت شده جهت کمک به مدیریت زمان و رسیدن به  اهداف بلند مدت.
                    </Typography>
                </Paper>
            </Container>
        </Box >
    );
}

export default About;