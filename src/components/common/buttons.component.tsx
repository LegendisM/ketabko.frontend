"use client"
import { FC } from "react";
import CloseIcon from "@mui/icons-material/CloseRounded";
import BackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import { useRouter } from "next/navigation";

export const CloseButton: FC<{ onClose: Function }> = ({ onClose }) => {
    return (
        <IconButton
            aria-label="close"
            onClick={() => onClose()}
            sx={{ color: (theme) => theme.palette.grey[500], }}
        >
            <CloseIcon />
        </IconButton>
    );
}

export const BackButton: FC = ({ }) => {
    const router = useRouter();

    return (
        <IconButton
            aria-label="close"
            onClick={() => {
                if (document.referrer) {
                    router.back();
                } else {
                    router.push('/');
                }
            }}
            sx={{ color: (theme) => theme.palette.grey[500], }}
        >
            <BackIcon />
        </IconButton>
    );
}