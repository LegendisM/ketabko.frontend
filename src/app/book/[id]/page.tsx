import { FC, PropsWithChildren } from "react";
import StarIcon from "@mui/icons-material/StarRounded";
import StarBorderIcon from "@mui/icons-material/StarBorderRounded";
import { Container, Paper, Typography, Box, Stack, Divider, Rating, Chip, List, ListItem } from "@mui/material";
import { i18n } from "@/i18n/i18n";

const Book: FC<PropsWithChildren & { params: { id: string } }> = ({ params: { id } }) => {
    return (
        <Container sx={{ padding: '15px' }}>
            <Paper sx={{ padding: '15px' }}>
                <Stack display={'flex'} flexDirection={'row'}>
                    <Box gap={1}>
                        <img
                            src={'/images/book/book-flat.png'}
                            style={{ width: '110px', height: '150px' }}
                        />
                    </Box>
                    <Box margin={'10px'} paddingBottom={'10px'} gap={2} overflow={'auto'}>
                        <Typography fontWeight={'bold'}>{'title'}</Typography>
                        <Typography variant="caption">{'description'}</Typography>
                    </Box>
                </Stack>
                <Divider sx={{ marginTop: '5px', marginBottom: '12.5px' }} />
                <Stack display={'flex'} direction={'row'} justifyContent={'space-between'} gap={1} flexWrap={'wrap'}>
                    <Stack display={'flex'} gap={1} direction={'row'} flexWrap={'wrap'}>
                        <Chip label={`${i18n('common:price')} ${'number'} ${i18n('common:payment-unit')}`} />
                        <Chip label={`${i18n('common:writer')} : ${'name'}`} />
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
                    <ListItem>test</ListItem>
                    <ListItem>test</ListItem>
                    <ListItem>test</ListItem>
                </List>
            </Paper>
        </Container>
    );
}

export default Book;