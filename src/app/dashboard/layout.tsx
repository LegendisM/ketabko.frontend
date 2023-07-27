"use client"
import { FC, PropsWithChildren } from "react";
import { AuthAccess } from "@/components/common/auth.component";

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <AuthAccess isAuth defaultMessage={true}>
                {children}
            </AuthAccess>
        </>
    );
}

export default DashboardLayout;