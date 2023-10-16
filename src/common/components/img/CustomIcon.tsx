import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

export default function CustomIcon({
    src,
    alt,
    circle,
    className,
    classNameImage,
    objectFitContain,
}: {
    src: string | StaticImport
    alt?: string
    circle?: boolean
    className?: string
    classNameImage?: string
    objectFitContain?: boolean
}) {
    return (
        <div
            className={`${className} relative overflow-hidden ${
                circle ? 'rounded-full' : ''
            }`}
        >
            <Image
                src={src}
                alt={alt ?? ''}
                style={{ objectFit: objectFitContain ? 'contain' : 'cover' }}
                fill
                sizes="100%"
                className={classNameImage}
            />
        </div>
    )
}
