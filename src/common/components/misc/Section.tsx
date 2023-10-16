import React from 'react'

export default function Section({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <div
            className={`${className} relative top-0 left-0 bg-white w-full drop-shadow border border-gray-50 rounded-lg p-4 mt-4`}
        >
            {children}
        </div>
    )
}
