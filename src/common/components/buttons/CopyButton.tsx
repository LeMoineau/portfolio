import copy from 'copy-to-clipboard'
import StandardButton from './StandardButton'
import React from 'react'

export default function CopyButton({
    children,
    textToCopy,
    className,
}: {
    children: React.ReactNode
    textToCopy: string
    className?: string
}) {
    const [copied, setCopied] = React.useState(false)
    return (
        <span
            onClick={() => {
                setCopied(true)
                copy(textToCopy)
                setTimeout(() => {
                    setCopied(false)
                }, 1500)
            }}
        >
            <StandardButton className={className}>
                {!copied ? (
                    children
                ) : (
                    <span className="text-gray-500">Copied !</span>
                )}
            </StandardButton>
        </span>
    )
}
