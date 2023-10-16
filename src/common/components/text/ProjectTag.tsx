import React from 'react'
import BackgroundText from './BackgroundText'

export default function ProjectTag({ tag }: { tag: string | React.ReactNode }) {
    return (
        <BackgroundText bg="bg-gray-200" className="rounded-sm">
            {tag}
        </BackgroundText>
    )
}
