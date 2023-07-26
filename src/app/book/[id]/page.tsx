"use client"
import { FC, PropsWithChildren, useContext } from "react";
import StarIcon from "@mui/icons-material/StarRounded";
import StarBorderIcon from "@mui/icons-material/StarBorderRounded";
import WriteIcon from "@mui/icons-material/DriveFileRenameOutline";
import ListIcon from "@mui/icons-material/ListAltRounded";
import ListRoundedIcon from "@mui/icons-material/ViewListRounded";
import { Container, Paper, Typography, Box, Stack, Divider, Rating, Chip, Card, Button, ButtonGroup } from "@mui/material";
import { i18n } from "@/i18n/i18n";
import { useApi } from "@/common/services/axios.service";
import { ApiEndpoint } from "@/constants/api.constant";
import { IBook } from "@/common/interfaces/book/book.interface";
import NetworkStatus from "@/components/common/network-status.component";
import { IResponseError } from "@/common/interfaces/common/error.interface";
import BookSectionDocumentCreate from "@/components/book/section/book-section-document-create.component";
import { useSetState } from "react-use";
import { IBookSection } from "@/common/interfaces/book/book-section.interface";
import BookSectionDocumentList from "@/components/book/section/book-section-document-list.component";
import { AuthAccess, AuthContext } from "@/components/common/auth.component";

const Book: FC<PropsWithChildren & { params: { id: string } }> = ({ params: { id } }) => {
    const { state } = useContext(AuthContext);
    const [dialogs, setDialogs] = useSetState<{ create: { section: IBookSection | null }, list: { section: IBookSection | null } }>({
        create: { section: null },
        list: { section: null }
    });
    const [{ data: book, loading, error }, fetchBook] = useApi<IBook, any, IResponseError>({
        url: ApiEndpoint('book', 'find', { id })
    }, { manual: false });

    return (
        <NetworkStatus loading={loading} error={error} onRetry={fetchBook}>
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
                            <Chip label={`${i18n('common:price')} ${book?.price != 0 ? `${book?.price ?? '-'} ${i18n('common:payment-unit')}` : i18n('common:free')}`} />
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
                    <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} flexWrap={'wrap'} gap={1}>
                        <Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={1}>
                            <ListRoundedIcon />
                            <Typography fontWeight={'bold'}>الگوریتم ها</Typography>
                        </Box>
                        <Box>
                            <AuthAccess isAuth={false}>
                                <Typography variant="caption" fontWeight={"bold"} color={"darkred"}>{i18n('errors:auth-operation-access-error')}</Typography>
                            </AuthAccess>
                        </Box>
                    </Box>
                    <Divider sx={{ marginY: '12px' }} />
                    <Stack direction={'column'} gap={2}>
                        {
                            book?.sections.map((section) => (
                                <Card sx={{ padding: '15px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 1.6 }}>
                                    <Typography>{section.title}</Typography>
                                    <Stack direction={"column"}>
                                        <ButtonGroup disabled={!state}>
                                            <Button
                                                variant="outlined"
                                                color="secondary"
                                                endIcon={<WriteIcon />}
                                                onClick={() => setDialogs({ create: { section: section } })}
                                            >
                                                {i18n('common:create', { name: '' })}
                                            </Button>
                                            <Button
                                                variant="outlined"
                                                color="primary"
                                                endIcon={<ListIcon />}
                                                onClick={() => setDialogs({ list: { section: section } })}
                                            >
                                                {i18n('common:list', { name: '' })}
                                            </Button>
                                        </ButtonGroup>
                                    </Stack>
                                </Card>
                            ))
                        }
                    </Stack>
                </Paper>
                {
                    dialogs.create.section ?
                        <BookSectionDocumentCreate
                            section={dialogs.create.section}
                            onClose={(created) => {
                                setDialogs({
                                    list: { section: (created ? dialogs.create.section : null) },
                                    create: { section: null }
                                });
                            }}
                        />
                        : null
                }
                {
                    dialogs.list.section ?
                        <BookSectionDocumentList
                            section={dialogs.list.section}
                            onClose={() => {
                                setDialogs({ list: { section: null } })
                            }}
                        />
                        : null
                }
            </Container>
        </NetworkStatus>
    );
}

export default Book;