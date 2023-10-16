import ProjectButton from '@/common/components/buttons/ProjectButton'
import Section from '@/common/components/misc/Section'
import SubTitle from '@/common/components/text/SubTitle'

export default function defaultProject() {
    return (
        <Section className="p-8">
            <SubTitle>My Projects.</SubTitle>
            <p>
                Here are all my previous projects. Discover in this portfolio
                plenty of varied projects from showcase websites to complete
                mobile app.
            </p>
            <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-2 mt-8">
                <ProjectButton
                    title="Ahoy!"
                    desc="flutter app"
                    img="/img/ahoy.png"
                    tags={['Flutter', 'Firebase', 'UX/UI', 'SCRUM']}
                    href="/projects/ahoy"
                ></ProjectButton>
                <ProjectButton
                    title="MyMajor"
                    desc="flutter app"
                    img="/img/myMajor.png"
                    tags={['Flutter', 'Firebase', 'UX/UI', 'SCRUM']}
                    href="/projects/mymajor"
                ></ProjectButton>
                <ProjectButton
                    title="Bubbles"
                    desc="flutter app"
                    img="/img/bubbles.png"
                    tags={['Flutter', 'Firebase', 'UX/UI', 'SCRUM']}
                    href="/projects/bubbles"
                ></ProjectButton>
                <ProjectButton
                    title="Plugin Minecraft"
                    desc="flutter app"
                    img="/img/java.png"
                    tags={['Flutter', 'Firebase', 'UX/UI', 'SCRUM']}
                    href="/projects/minecraftplugin"
                ></ProjectButton>
                <ProjectButton
                    title="Easy's cube"
                    desc="flutter app"
                    img="/img/easyscube.png"
                    tags={['Flutter', 'Firebase', 'UX/UI', 'SCRUM']}
                    href="/projects/easyscube"
                ></ProjectButton>
            </div>
        </Section>
    )
}
