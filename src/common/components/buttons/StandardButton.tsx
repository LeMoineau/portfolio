import React, { FormEventHandler, MouseEventHandler } from 'react'

export default function StandardButton({
    children,
    reverseColor,
    prependChild,
    appendChild,
    className,
    onClick,
    onSubmit,
    disabled,
}: {
    children: React.ReactNode
    reverseColor?: boolean
    prependChild?: React.ReactNode
    appendChild?: React.ReactNode
    className?: string
    onClick?: MouseEventHandler
    onSubmit?: FormEventHandler<HTMLButtonElement>
    disabled?: boolean
}) {
    return (
        <button
            className={`${className} w-auto flex flex-row items-center space-x-0.5 drop-shadow border px-3 py-2 rounded text-sm font-medium ${
                reverseColor
                    ? 'bg-gray-700 text-white border-gray-400'
                    : 'bg-white border-gray-50'
            } disabled:text-gray-500`}
            onClick={onClick}
            onSubmit={onSubmit}
            disabled={disabled !== undefined && disabled}
        >
            {prependChild}
            <p>{children}</p>
            {appendChild}
        </button>
    )
}
