import { interMedium } from '@/common/utils/font'
import React from 'react'

export default function SubTitle({
    children,
}: {
    children: string | React.ReactNode
}) {
    return (
        <h2 className={`${interMedium} text-gray-700 md:text-xl`}>
            {children}
        </h2>
    )
}
