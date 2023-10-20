import MyProjectsSubSection from '../section/MyProjectsSubSection'
import CustomLink from '../text/CustomLink'
import Title from '../text/Title'
import Section from './Section'

export default function ProjectNotFound() {
    return (
        <div>
            <div className="text-center">
                <Title className="mt-24 mb-5">
                    <span className="text-red-500">Crap</span>! The project you
                    find not exist <span className="text-purple-400">yet</span>!
                </Title>
                <p>
                    It seems that the project you are looking for does not yet
                    exist...
                </p>
                <p className="mb-24">
                    However, you can look at my{' '}
                    <CustomLink href="/projects" decoration noblank>
                        other projects
                    </CustomLink>
                    ! Or{' '}
                    <CustomLink href="/" decoration noblank>
                        contact me
                    </CustomLink>{' '}
                    if you need more informations about this project!
                </p>
            </div>

            <Section>
                <MyProjectsSubSection></MyProjectsSubSection>
            </Section>
        </div>
    )
}
