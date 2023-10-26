import ProjectButton from '@/common/components/buttons/ProjectButton'
import Section from '@/common/components/misc/Section'
import SubTitle from '@/common/components/text/SubTitle'
import { projectsData } from '../../common/resources/projects-data'
import Title from '@/common/components/text/Title'
import Divider from '@/common/components/text/Divider'

export default function defaultProject() {
    const allProjectsKeys = Object.keys(projectsData)
    return (
        <>
            <Section className="p-8 md:pb-0 md:rounded-b-none md:drop-shadow-none">
                <Title className="">
                    My <span className="text-green-500">Projects</span>.
                </Title>
                <Divider className="my-5"></Divider>
                <p className="text-sm text-gray-700">
                    Here are all my previous projects. Discover in this
                    portfolio plenty of varied projects from showcase websites
                    to complete mobile app.
                </p>
            </Section>
            <div className="w-full md:bg-white grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-4 pt-2 md:pt-8 md:px-8 rounded-b-lg">
                {Object.keys(projectsData)
                    .sort((a, b) => {
                        return (
                            projectsData[b].date.getTime() -
                            projectsData[a].date.getTime()
                        )
                    })
                    .map((key, i) => {
                        const project = projectsData[key]
                        return (
                            <ProjectButton
                                title={project.title}
                                desc={project.desc}
                                img={project.img}
                                tags={project.tags}
                                href={`/projects/${key}`}
                                key={i}
                            ></ProjectButton>
                        )
                    })}
            </div>
        </>
    )
}
