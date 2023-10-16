import React from 'react'

export default function StandardButton({
    children,
    rightArrow,
    reverseColor,
}: {
    children: React.ReactNode
    rightArrow?: boolean
    reverseColor?: boolean
}) {
    return (
        <button
            className={`w-auto flex flex-row items-center space-x-0.5 drop-shadow border border-gray-50 px-3 py-2 rounded text-sm font-medium ${
                reverseColor
                    ? 'bg-gray-700 text-white border-gray-400'
                    : 'bg-white'
            }`}
        >
            <p>{children}</p>
            <svg
                className={`${rightArrow ?? 'hidden'} w-4 h-4`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="2 0 16 22"
            >
                <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
            </svg>
        </button>
    )
}
