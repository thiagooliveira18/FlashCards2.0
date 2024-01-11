"use client"

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

type BotaoLink = LinkProps & {
    children: React.ReactNode;
}

export default function BotaoLink({ href, children, ...rest }: BotaoLink){
    const pathname = usePathname();
    const isActive = pathname === href;

    const compActive = "border-2 bg-gradient-to-tr from-blue-800 to-green-600 border-white";
    const compNActive = "border-opacity-0 border-2 border-3th transition duration-300 ease-in-out hover:bg-gradient-to-tr hover:from-blue-800 hover:to-green-600 hover:border-2 hover:border-white";

    return(
        <Link href={href} {...rest} className={`flex text-white w-4/5 py-4 px-7 rounded-3xl ${isActive ? compActive : compNActive}`}>{children}</Link>
    );
}