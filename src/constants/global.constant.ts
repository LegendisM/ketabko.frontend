import { i18n } from "@/i18n/i18n";

export const PAGES: { name: string, href: string }[] = [
    {
        name: i18n('pages:home'),
        href: "/"
    },
    {
        name: i18n('pages:auth'),
        href: "/auth"
    }
]