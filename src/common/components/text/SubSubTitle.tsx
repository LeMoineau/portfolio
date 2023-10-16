import React from 'react'

export default function SubSubTitle({
    children,
}: {
    children: React.ReactNode
}) {
    return <h2 className="font-medium">{children}</h2>
}
