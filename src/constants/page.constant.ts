import { i18n } from "@/i18n/i18n";

export const PAGES: { name: string, href: string, inMenu: boolean, auth: 'all' | true | false }[] = [
    {
        name: i18n('pages:home'),
        href: "/",
        inMenu: true,
        auth: 'all'
    },
    {
        name: i18n('pages:user'),
        href: "/dashboard/user",
        inMenu: true,
        auth: true
    },
    {
        name: i18n('pages:auth'),
        href: "/auth/signin",
        inMenu: true,
        auth: false
    },
    {
        name: i18n('pages:auth'),
        href: "/auth/signup",
        inMenu: false,
        auth: false
    },
    {
        name: i18n('pages:about'),
        href: "/about",
        inMenu: true,
        auth: 'all'
    },
    {
        name: i18n('pages:logout'),
        href: "/dashboard/logout",
        inMenu: true,
        auth: true
    },
]