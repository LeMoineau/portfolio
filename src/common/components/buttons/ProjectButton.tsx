import CustomIcon from '../img/CustomIcon'
import CustomLink from '../text/CustomLink'
import ProjectTag from '../text/ProjectTag'
import { ProjectData } from '@/common/resources/interfaces/project-data'
import { memo } from 'react'

function ProjectButton({
    projectData,
    href,
    iconized,
}: {
    projectData: ProjectData
    href: string
    iconized?: boolean
}) {
    return (
        <CustomLink
            noblank
            href={href}
            className={`bg-white drop-shadow rounded h-fit ${iconized ? '' : 'md:h-full'} overflow-hidden mt-2 mb-2 hover:mt-0 hover:mb-4 transition-all`}
        >
            <div className={`w-full h-fit ${iconized ? '' : 'p-4'}`}>
                <div
                    className={`w-full h-fit ${
                        projectData.color ?? 'bg-orange-500'
                    } rounded drop-shadow overflow-hidden`}
                >
                    <CustomIcon
                        src={projectData.imgs[0]}
                        className="rounded-sm drop-shadow-md"
                    ></CustomIcon>
                </div>
            </div>

            {!!!iconized && (
                <div className="pt-1 pb-3 px-5 text-center">
                    <h3 className="text-center font-semibold mt-0">
                        {projectData.title}
                    </h3>
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
            )}
        </CustomLink>
    )
}

export default memo(ProjectButton)
