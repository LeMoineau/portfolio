import React from 'react'

export default function CustomList({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <div className="max-w-full flex items-center flex-col">
            <ul className={`${className} mt-4 text-xs w-full sm:text-sm`}>
                {children}
            </ul>
        </div>
    )
}
