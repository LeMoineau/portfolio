import React from 'react'

export default function SubTitle({
    children,
    className,
}: {
    children: string | React.ReactNode
    className?: string
}) {
    return (
        <h2 className={`${className} font-medium text-gray-700 md:text-xl`}>
            {children}
        </h2>
    )
}
