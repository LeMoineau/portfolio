import React from 'react'
import BackgroundText from './BackgroundText'

export default function ProjectTag({
    tag,
    className,
}: {
    tag: string | React.ReactNode
    className?: string
}) {
    return (
        <BackgroundText
            bg="bg-gray-100"
            className={`rounded border-b-2 border-gray-200 ${className}`}
        >
            <span>{tag}</span>
        </BackgroundText>
    )
}
