"use client"
import { Avatar } from "@mui/material";
import { FC } from "react";

const AvatarPro: FC = () => {
    return (
        <Avatar src="/images/common/avatar.png" sx={{ width: '60px', height: '60px' }} />
    );
}

export default AvatarPro;