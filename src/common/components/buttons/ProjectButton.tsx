import Link from 'next/link'
import CustomIcon from '../img/CustomIcon'
import ProjectTag from '../text/ProjectTag'
import StandardButton from './StandardButton'
import RightArrow from '../img/RightArrow'
import Divider from '../text/Divider'

export default function ProjectButton({
    title,
    desc,
    img,
    tags,
    href,
}: {
    title: string
    desc: string
    img: string
    tags: string[]
    href: string
}) {
    return (
        <Link
            href={href}
            className="bg-white drop-shadow md:drop-shadow-none rounded-lg h-fit overflow-hidden mt-2 mb-2 hover:mt-0 hover:mb-4 transition-all"
        >
            <CustomIcon
                src={img}
                className="pt-[75%] rounded-sm drop-shadow-md hover:drop-shadow-lg transition-all mb-4"
            ></CustomIcon>
            <div className="p-3 text-center md:hidden">
                <h3 className="font-semibold mb-1">{title}</h3>
                <p className="text-sm text-gray-700 ">{desc}</p>
                <div className="flex flex-row hidden w-full flex-wrap space-x-2 mt-3">
                    {tags.map((val) => (
                        <ProjectTag tag={val} className="mt-2"></ProjectTag>
                    ))}
                </div>
            </div>
        </Link>
    )
}
