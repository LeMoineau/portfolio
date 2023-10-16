import Section from '@/common/components/misc/Section'
import MyProjectsSubSection from '@/common/components/section/MyProjectsSubSection'

export default function ProjectNotFound() {
    return (
        <Section>
            <div>
                <p>oups. we don't find the project you're mentionning..</p>
                <div>
                    <p>But you can see others !</p>
                    <p>"others projects"</p>
                </div>
            </div>
            <MyProjectsSubSection></MyProjectsSubSection>
        </Section>
    )
}
