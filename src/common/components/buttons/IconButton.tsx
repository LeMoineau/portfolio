import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import CustomIcon from '../img/CustomIcon'

export default function IconButton({
    src,
    alt,
    size,
}: {
    src: string | StaticImport
    alt: string
    size: number
}) {
    return (
        <button>
            <CustomIcon src={src} alt={alt} size={size}></CustomIcon>
        </button>
    )
}
