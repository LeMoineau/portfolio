import SubSection from '../misc/SubSection'
import StandardButton from '../buttons/StandardButton'
import CustomIcon from '../img/CustomIcon'
import RightArrow from '../img/RightArrow'
import CustomLink from '../text/CustomLink'
import { useTranslation } from 'react-i18next'
import {
    projectsData,
    projectsKeyByDate,
} from '@/common/resources/data/projects-data'
import Section from '../misc/Section'

export default function MyProjectsSubSection({
    className,
}: {
    className?: string
}) {
    const { t } = useTranslation()
    return (
        <Section className={className}>
            <SubSection
                title={t('projects-subSection.title')}
                actions={
                    <CustomLink href={'/projects'} noblank>
                        <StandardButton appendChild={<RightArrow />}>
                            {t('projects-subSection.viewMore-btn')}
                        </StandardButton>
                    </CustomLink>
                }
            >
                <div className="flex flex-row justify-start mt-6 py-2 rounded mt-2 max-w-full overflow-y-scroll md:overflow-hidden">
                    {projectsKeyByDate.slice(0, 5).map((p, i) => (
                        <CustomLink
                            href={`/projects/${p}`}
                            noblank
                            key={i}
                            className={`${projectsData[p].color} h-auto w-auto rounded-lg drop-shadow mr-2`}
                        >
                            <CustomIcon
                                src={projectsData[p].img}
                                alt={projectsData[p].title}
                                className="w-40 h-40 md:w-56 md:h-56 rounded drop-shadow"
                            ></CustomIcon>
                        </CustomLink>
                    ))}
                </div>
            </SubSection>
        </Section>
    )
}
