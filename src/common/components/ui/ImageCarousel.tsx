import useEmblaCarousel from 'embla-carousel-react'
import CustomIcon from '../img/CustomIcon'
import { useEffect, useState } from 'react'

export default function ImageCarousel({
    images,
    bgColor,
}: {
    images: string[]
    bgColor?: string
}) {
    // Initialisation du carrousel avec le plugin Autoplay
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [])
    const [currentImgIndex, setCurrentImgIndex] = useState(1)

    const scroll = (direction: 'prev' | 'next') => {
        if (!!!emblaApi) return
        if (direction === 'prev') {
            emblaApi.scrollPrev()
        } else {
            emblaApi.scrollNext()
        }
    }

    useEffect(() => {
        if (!!emblaApi) {
            const callback = () => {
                setCurrentImgIndex(emblaApi.selectedScrollSnap() + 1)
            }

            emblaApi.on('scroll', callback)
            emblaApi.on('select', callback)

            return () => {
                emblaApi.off('scroll', callback)
                emblaApi.off('select', callback)
            }
        }
    }, [emblaApi])

    return (
        // Conteneur principal (Viewport)
        <div
            ref={emblaRef}
            style={{
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                margin: '0 auto',
                marginBottom: '3px',
            }}
        >
            {/* Conteneur des slides */}
            <div style={{ display: 'flex' }}>
                {images.map((url, index) => (
                    // Chaque slide doit avoir un flex-shrink à 0 et une largeur définie (ex: 100%)
                    <div
                        key={index}
                        style={{
                            flex: '0 0 100%',
                            minWidth: 0,
                        }}
                        className={`rounded-md ${bgColor ?? ''}`}
                    >
                        <CustomIcon
                            src={url}
                            className="rounded drop-shadow h-full"
                        ></CustomIcon>
                    </div>
                ))}
            </div>
            {images.length > 1 && (
                <div className="flex flex-row justify-center items-center gap-4 absolute left-1/2 bottom-0 -translate-x-1/2 -translate-y-full">
                    <button
                        onClick={() => scroll('prev')}
                        disabled={currentImgIndex <= 1}
                        className={`bg-gray-800 bg-opacity-60 text-white rounded-lg px-4 py-2 whitespace-nowrap ${currentImgIndex <= 1 ? 'opacity-50' : ''}`}
                    >
                        ← Précédent
                    </button>
                    <p
                        className={`bg-gray-800 bg-opacity-60 text-white rounded-lg px-4 py-2 whitespace-nowrap`}
                    >
                        {currentImgIndex} / {images.length}
                    </p>
                    <button
                        onClick={() => scroll('next')}
                        disabled={currentImgIndex >= images.length}
                        className={`bg-gray-800 bg-opacity-60 text-white rounded-lg px-4 py-2 whitespace-nowrap ${currentImgIndex >= images.length ? 'opacity-50' : ''}`}
                    >
                        Suivant →
                    </button>
                </div>
            )}

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '20px',
                    marginTop: '15px',
                }}
            ></div>
        </div>
    )
}
