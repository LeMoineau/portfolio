import React from 'react'
import BackgroundText from './BackgroundText'
import CustomIcon from '../img/CustomIcon'
import Link from 'next/link'

export default function AvatarTag({
    children,
    src,
    bg,
    href,
}: {
    children?: React.ReactNode | string
    bg: string
    src: string
    href?: string
}) {
    const comp = (
        <BackgroundText
            bg={bg}
            className="flex flex-row space-x-2 py-2 px-4 grow-0 justify-center items-center rounded-md w-fit"
        >
            <CustomIcon src={src} className="w-6 h-6 rounded-full"></CustomIcon>
            <span className="font-medium">{children}</span>
        </BackgroundText>
    )
    return href ? <Link href={href}>{comp}</Link> : comp
}
