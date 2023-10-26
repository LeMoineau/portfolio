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
            className="bg-white drop-shadow rounded h-fit overflow-hidden mt-2 mb-2 hover:mt-0 hover:mb-4 transition-all"
        >
            <div className="w-full h-fit p-4 ">
                <div className="w-full h-fit bg-orange-400 rounded drop-shadow overflow-hidden">
                    <CustomIcon
                        src={img}
                        className="pt-[75%] rounded-sm drop-shadow-md"
                    ></CustomIcon>
                </div>
            </div>

            <div className="pt-1 pb-5 px-5 text-center">
                <h3 className="text-center font-semibold mt-0">{title}</h3>
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
