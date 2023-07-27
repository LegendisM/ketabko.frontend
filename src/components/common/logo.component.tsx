"use client"
import { FC } from "react";

const Logo: FC<{ isText: boolean }> = ({ isText }) => {
    return (
        <img
            src={`/images/common/logo${isText ? '-text' : ''}.png`}
            alt="Logo"
            style={{ width: `${isText ? '95px' : '40px'}` }}
        />
    );
}

export default Logo;