"use client"
import { FC, PropsWithChildren } from "react";

const Logo: FC<PropsWithChildren & { isText: boolean }> = ({ isText }) => {
    return (
        <img
            src={`/images/common/logo${isText ? '-text' : ''}.png`}
            alt="Logo"
            style={{ width: `${isText ? '95px' : '40px'}` }}
        />
    );
}

export default Logo;