import Link from 'next/link'
import Section from '../misc/Section'
import StandardButton from '../buttons/StandardButton'
import RightArrow from '../img/RightArrow'
import Title from '../text/Title'
import CustomIcon from '../img/CustomIcon'
import SubSection from '../misc/SubSection'
import SubSubTitle from '../text/SubSubTitle'
import StackTag from '../text/StackTag'
import CustomLink from '../text/CustomLink'
import AvatarTag from '../text/AvatarTag'
import ProjectTag from '../text/ProjectTag'
import Divider from '../text/Divider'
import { ProjectData } from '@/common/interfaces/project-data'

export default function ProjectSection({
    projectData,
}: {
    projectData: ProjectData
}) {
    const formatter = new Intl.DateTimeFormat('fr', {
        month: 'short',
        year: 'numeric',
    })

    return (
        <div className="flex flex-col-reverse md:flex-row py-8">
            <Section className="md:px-10 md:pt-10">
                <Link href={'/projects'}>
                    <StandardButton
                        prependChild={
                            <RightArrow className="rotate-180"></RightArrow>
                        }
                    >
                        Back to projects
                    </StandardButton>
                </Link>
                <Title className="my-3 mt-7">
                    {projectData.title}{' '}
                    <span className="text-base font-normal text-gray-600">
                        {formatter.format(projectData.date)}
                    </span>
                </Title>
                <Divider className="my-5"></Divider>
                <p className="my-2 text-sm text-gray-700">{projectData.desc}</p>
                <CustomIcon
                    src={projectData.img}
                    className="pt-[75%] rounded drop-shadow"
                ></CustomIcon>
            </Section>
            <div className="md:w-1/2 h-full md:ml-5">
                <Section>
                    <SubSection>
                        <SubSubTitle>Project Tag</SubSubTitle>
                        <div className="flex flex-row flex-wrap w-full mt-1">
                            {projectData.tags.map((t, i) => (
                                <ProjectTag
                                    key={i}
                                    tag={t}
                                    className="mr-2 my-1"
                                ></ProjectTag>
                            ))}
                        </div>
                    </SubSection>
                    <SubSection className="mt-5">
                        <SubSubTitle>Project Stack</SubSubTitle>
                        <div className="flex flex-row flex-wrap w-full mt-1">
                            {projectData.stack.map((s, i) => (
                                <StackTag key={i} className="mr-2 my-1">
                                    {s}
                                </StackTag>
                            ))}
                        </div>
                    </SubSection>
                    {projectData.client && (
                        <SubSection className="mt-5">
                            <SubSubTitle>Client</SubSubTitle>
                            {projectData.client?.map((c, i) => (
                                <AvatarTag
                                    bg={c.bg}
                                    src={c.img}
                                    href={c.link}
                                    key={i}
                                >
                                    {c.name}
                                </AvatarTag>
                            ))}
                        </SubSection>
                    )}
                    {(projectData.link || projectData.repository) && (
                        <div>
                            {projectData.link && (
                                <SubSection className="mt-5">
                                    <SubSubTitle>Link</SubSubTitle>
                                    <CustomLink
                                        href={'https://bigstones.fr/myMajor'}
                                        decoration
                                    >
                                        bigstones.fr/myMajor
                                    </CustomLink>
                                </SubSection>
                            )}
                            {projectData.repository && (
                                <SubSection className="mt-5">
                                    <SubSubTitle>Repository</SubSubTitle>
                                    <CustomLink
                                        href={
                                            'https://github.com/Lemoineau/myMajor'
                                        }
                                        decoration
                                    >
                                        github.com/Lemoineau
                                    </CustomLink>
                                </SubSection>
                            )}
                        </div>
                    )}
                </Section>
            </div>
        </div>
    )
}
