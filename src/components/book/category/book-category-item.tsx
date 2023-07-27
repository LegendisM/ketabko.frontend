import { i18n } from "@/i18n/i18n";
import { Paper, Stack, Typography, Button } from "@mui/material";
import Link from "next/link";
import { FC } from "react";

const BookCategoryItem: FC<{
    id: string,
    title: string,
    description: string,
    image: string,
    mode?: 'primary' | 'secondary' | 'success' | 'info'
}> = ({
    id, title, description, image, mode = 'primary'
}) => {
        return (
            <Paper
                elevation={0}
                sx={{ padding: '13px', width: 'auto', minWidth: '265px', maxWidth: '290px', height: 'auto', boxShadow: '0px 0px 2px 0px #840fff5e' }}
            >
                <Stack marginBottom={'13px'} direction={'row'} gap={2} justifyContent={'flex-start'} alignItems={'flex-start'}>
                    <picture>
                        <img
                            src={image}
                            style={{ width: '110px', height: '150px' }}
                            alt={title}
                        />
                    </picture>
                    <Stack direction={'column'} gap={1}>
                        <Typography fontWeight={'bold'}>{title}</Typography>
                        <Typography variant="caption">
                            {`${description.slice(0, 90)}...`}
                        </Typography>
                    </Stack>
                </Stack>
                <Link href={`/book/${id}`}>
                    <Button variant="contained" color={mode} fullWidth>{i18n('common:see')}</Button>
                </Link>
            </Paper>
        );
    }

export default BookCategoryItem;