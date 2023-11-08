import React from 'react'

export default function PillListItem({
    entitle,
    content,
    className,
}: {
    entitle: React.ReactNode | string
    content: React.ReactNode | string
    className?: string
}) {
    return (
        <li
            className={`${className} border border-gray-100 w-full bg-white rounded-lg my-2 flex flex-row overflow-hidden pr-3`}
        >
            <div className="border border-gray-100 bg-gray-50 whitespace-nowrap h-full w-fit rounded-l-lg p-3">
                {entitle}
            </div>
            <div className="whitespace-nowrap overflow-hidden p-3">
                {content}
            </div>
        </li>
    )
}
