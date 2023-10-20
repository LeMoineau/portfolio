import Link from 'next/link'
import CustomIcon from '../img/CustomIcon'
import ProjectTag from '../text/ProjectTag'

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
        <Link href={href} className="">
            <CustomIcon
                src={img}
                className="pt-[100%] rounded drop-shadow"
            ></CustomIcon>
            {/* <p className="my-1">
                <span className="font-semibold">{title}</span> {desc}
            </p>
            <div className="flex flex-row w-full flex-wrap">
                {tags.map((val) => (
                    <ProjectTag tag={val}></ProjectTag>
                ))}
            </div> */}
        </Link>
    )
}
