"use client"
import { FC } from "react";

const Logo: FC<{ isText: boolean }> = ({ isText }) => {
    return (
        <picture>
            <img
                src={`/images/common/logo${isText ? '-text' : ''}.png`}
                alt="Logo"
                style={{ width: `${isText ? '95px' : '40px'}` }}
            />
        </picture>
    );
}

export default Logo;