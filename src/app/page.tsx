import GlobalBackground from '@/common/components/misc/GlobalBackground'
import Section from '@/common/components/misc/Section'
import MyProjectsSubSection from '@/common/components/section/MyProjectsSubSection'

export default function Home() {
    return (
        <div>
            <GlobalBackground />
            <Section className="mt-[70vh]">
                <MyProjectsSubSection></MyProjectsSubSection>
            </Section>
        </div>
    )
}
