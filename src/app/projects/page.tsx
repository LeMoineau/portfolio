import ProjectButton from '@/common/components/buttons/ProjectButton'
import Section from '@/common/components/misc/Section'
import SubTitle from '@/common/components/text/SubTitle'
import { projectsData } from './[...project-name]/projects-data'

export default function defaultProject() {
    return (
        <Section className="p-8">
            <SubTitle>My Projects.</SubTitle>
            <p>
                Here are all my previous projects. Discover in this portfolio
                plenty of varied projects from showcase websites to complete
                mobile app.
            </p>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2 mt-8">
                {Object.keys(projectsData).map((key, i) => {
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
        </Section>
    )
}
