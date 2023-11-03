import Link from 'next/link'
import CustomIcon from '../img/CustomIcon'
import ProjectTag from '../text/ProjectTag'
import { ProjectData } from '@/common/interfaces/project-data'

export default function ProjectButton({
    projectData,
}: {
    projectData: ProjectData
}) {
    return (
        <Link
            href={projectData.link ?? '/'}
            className="bg-white drop-shadow rounded h-fit overflow-hidden mt-2 mb-2 hover:mt-0 hover:mb-4 transition-all"
        >
            <div className="w-full h-fit p-4 ">
                <div
                    className={`w-full h-fit ${
                        projectData.color ?? 'bg-orange-500'
                    } rounded drop-shadow overflow-hidden`}
                >
                    <CustomIcon
                        src={projectData.img}
                        className="pt-[75%] rounded-sm drop-shadow-md"
                    ></CustomIcon>
                </div>
            </div>

            <div className="pt-1 pb-5 px-5 text-center">
                <h3 className="text-center font-semibold mt-0">
                    {projectData.title}
                </h3>
                <p className="text-sm text-gray-700 ">{projectData.desc}</p>
                <div className="flex flex-row hidden w-full flex-wrap space-x-2 mt-3">
                    {projectData.tags.map((val, i) => (
                        <ProjectTag
                            key={i}
                            tag={val}
                            className="mt-2"
                        ></ProjectTag>
                    ))}
                </div>
            </div>
        </Link>
    )
}
