export default function CustomIcon({
    src,
    alt,
    circle,
    className,
    classNameImage,
    objectFitContain,
}: {
    src: string
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
            <img
                src={src}
                alt={alt ?? ''}
                style={{ objectFit: objectFitContain ? 'contain' : 'cover' }}
                className={`${classNameImage} w-full h-full`}
            />
        </div>
    )
}
