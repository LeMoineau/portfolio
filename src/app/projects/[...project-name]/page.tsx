import ProjectNotFound from '@/common/components/misc/ProjectNotFound'
import ProjectSection from '@/common/components/section/ProjectSection'
import { projectsData } from '../../../common/resources/projects-data'

export async function generateStaticParams() {
    const staticParams = Object.keys(projectsData).map((p) => {
        return { 'project-name': [p] }
    })
    return staticParams
}

export default function Project({
    params,
}: {
    params: { 'project-name': string[] }
}) {
    const projectKey = params['project-name'][0]
    return projectsData[projectKey] ? (
        <ProjectSection projectData={projectsData[projectKey]}></ProjectSection>
    ) : (
        <ProjectNotFound></ProjectNotFound>
    )
}
