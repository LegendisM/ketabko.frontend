"use client"
import { FC, PropsWithChildren } from "react";
import StarIcon from "@mui/icons-material/StarRounded";
import StarBorderIcon from "@mui/icons-material/StarBorderRounded";
import WriteIcon from "@mui/icons-material/DriveFileRenameOutline";
import { Container, Paper, Typography, Box, Stack, Divider, Rating, Chip, List, ListItem, ListItemIcon } from "@mui/material";
import { i18n } from "@/i18n/i18n";
import { useApi } from "@/common/services/axios.service";
import { ApiEndpoint } from "@/constants/api.constant";
import { IBook } from "@/common/interfaces/book.interface";
import Loading from "@/components/common/loading";

const Book: FC<PropsWithChildren & { params: { id: string } }> = ({ params: { id } }) => {
    const [{ data: book, loading }, fetchBook] = useApi<IBook>({
        url: ApiEndpoint('book', 'find', { id })
    }, { manual: false });

    return (
        <Loading loading={loading} >
            <Container sx={{ padding: '15px' }}>
                <Paper sx={{ padding: '15px' }}>
                    <Stack display={'flex'} flexDirection={'row'}>
                        <Box gap={1}>
                            <img
                                src={`${ApiEndpoint('main', 'storage')}/${book?.cover.path}`}
                                style={{ width: '110px', height: '150px' }}
                            />
                        </Box>
                        <Box margin={'10px'} paddingBottom={'10px'} gap={2} overflow={'auto'}>
                            <Typography fontWeight={'bold'}>{book?.title}</Typography>
                            <Typography variant="caption">{book?.description}</Typography>
                        </Box>
                    </Stack>
                    <Divider sx={{ marginTop: '5px', marginBottom: '12.5px' }} />
                    <Stack display={'flex'} direction={'row'} justifyContent={'space-between'} gap={1} flexWrap={'wrap'}>
                        <Stack display={'flex'} gap={1} direction={'row'} flexWrap={'wrap'}>
                            <Chip label={`${i18n('common:price')} ${book?.price ?? '-'} ${i18n('common:payment-unit')}`} />
                            <Chip label={`${i18n('common:writer')} : ${book?.author.name ?? '-'}`} />
                        </Stack>
                        <Rating
                            name="half-rating"
                            defaultValue={4}
                            icon={<StarIcon fontSize="inherit" />}
                            emptyIcon={<StarBorderIcon fontSize="inherit" />}
                            readOnly

                        />
                    </Stack>
                </Paper>
                <Paper sx={{ marginTop: '15px', padding: '15px' }}>
                    <List>
                        {
                            book?.sections.map((section) => (
                                <ListItem>
                                    <ListItemIcon>
                                        <WriteIcon />
                                    </ListItemIcon>
                                    <Typography>{section.title}</Typography>
                                </ListItem>
                            ))
                        }
                    </List>
                </Paper>
            </Container>
        </Loading>
    );
}

export default Book;