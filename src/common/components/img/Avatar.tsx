import CustomIcon from './CustomIcon'

export default function Avatar({
    className,
    alt,
    available,
}: {
    className?: string
    alt?: string
    available?: boolean
}) {
    const avatar = (
        <CustomIcon
            src={'/img/sammy.png'}
            alt={alt ?? ''}
            circle
            className={`${className} w-10 h-10 ${
                available ? 'border-2 border-green-500' : ''
            }`}
        ></CustomIcon>
    )
    return available ? (
        <div className="relative">
            {avatar}
            <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500"></div>
        </div>
    ) : (
        avatar
    )
}
