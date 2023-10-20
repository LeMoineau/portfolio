import ProjectNotFound from '@/common/components/misc/ProjectNotFound'
import ProjectSection from '@/common/components/section/ProjectSection'
import { useParams } from 'next/navigation'
import { projectsData } from './projects-data'

export default function Project() {
    const params = useParams()
    const projectKey = params['project-name'][0]
    return projectsData[projectKey] ? (
        <ProjectSection projectData={projectsData[projectKey]}></ProjectSection>
    ) : (
        <ProjectNotFound></ProjectNotFound>
    )
}
