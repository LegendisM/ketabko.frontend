"use client"
import { AuthContext } from "@/components/common/auth.component";
import { Container } from "@mui/material";
import { useRouter } from "next/navigation";
import { FC, PropsWithChildren, useContext } from "react";

const Logout: FC<PropsWithChildren> = () => {
    const router = useRouter();
    const { state, onLogout } = useContext(AuthContext);

    if (state) {
        onLogout!();
    } else {
        router.push('/');
    }

    return ('');
}

export default Logout;