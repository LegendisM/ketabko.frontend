import { FC } from "react";
import CloseIcon from "@mui/icons-material/CloseRounded";
import { IconButton } from "@mui/material";

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