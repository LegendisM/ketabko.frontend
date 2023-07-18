import { Box, Typography, Stack } from "@mui/material";
import { FC, PropsWithChildren } from "react";

const BookCategory: FC<PropsWithChildren & { name: string }> = ({ name, children }) => {
    return (
        <Box margin={'1rem'}>
            <Typography marginLeft={'0.2rem'} marginBottom={'0.8rem'} fontWeight={'bold'}>{name}</Typography>
            <Stack className="horizontal-mask" display={'flex'} flexDirection={'row'} gap={2} overflow={'auto'} paddingBottom={'12px'}>
                {children}
            </Stack>
        </Box>
    );
}

export default BookCategory;