"use client"
import { AuthContext } from "@/components/common/auth.component";
import { useRouter } from "next/navigation";
import { FC, useContext } from "react";

const Logout: FC = () => {
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