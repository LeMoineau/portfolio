import SubSection from '../misc/SubSection'
import StandardButton from '../buttons/StandardButton'
import React from 'react'
import CustomIcon from '../img/CustomIcon'
import RightArrow from '../img/RightArrow'
import CustomLink from '../text/CustomLink'
import { useTranslation } from 'react-i18next'

const projects: React.ReactNode[] = []
for (let i = 0; i < 10; i++) {
    projects.push(
        <CustomLink
            href={'/projects/myMajor'}
            noblank
            key={i}
            className="h-auto w-auto rounded-lg"
        >
            <CustomIcon
                src={'/img/projects/ahoy.png'}
                alt="MyMajor"
                className="w-40 h-40 md:w-56 md:h-56 rounded drop-shadow"
            ></CustomIcon>
        </CustomLink>
    )
}

export default function MyProjectsSubSection() {
    const { t } = useTranslation()
    return (
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
            <div className="flex flex-row justify-start space-x-2 mt-6 rounded border-l-2 border-r-2 border-gray-200 mt-2 max-w-full overflow-y-scroll md:overflow-hidden">
                {projects}
            </div>
        </SubSection>
    )
}
