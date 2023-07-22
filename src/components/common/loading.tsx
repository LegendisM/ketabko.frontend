"use client"
import { Backdrop, CircularProgress } from "@mui/material";
import { FC, PropsWithChildren } from "react"

const Loading: FC<PropsWithChildren & { loading: boolean }> = ({ loading, children }) => {
    return (
        loading ?
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            : children
    );
}

export default Loading;