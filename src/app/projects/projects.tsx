import ProjectButton from '@/common/components/buttons/ProjectButton'
import Section from '@/common/components/misc/Section'
import {
    projectsData,
    projectsKeyByDate,
} from '@/common/resources/data/projects-data'
import Title from '@/common/components/text/Title'
import Divider from '@/common/components/text/Divider'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import CustomSearchBar from '@/common/components/form/CustomSearchBar'
import { SearchUtils } from '@/common/services/search-utils'

export default function ProjectsPage() {
    const { t, i18n } = useTranslation()
    const [query, setQuery] = useState('')
    return (
        <>
            <Section className="p-8 mt-4 md:mt-8">
                <Title className="">
                    {t('projects-page.title1')}{' '}
                    <span className="text-green-500">
                        {t('projects-page.title2')}
                    </span>
                    .
                </Title>
                <Divider className="my-5"></Divider>
                <p className="text-sm text-gray-700">
                    {t('projects-page.desc')}
                </p>
            </Section>
            <div className="pt-0 rounded-t-none sticky top-24 z-10">
                <CustomSearchBar
                    className="mt-4 md:mt-6"
                    placeholder={t('projects-page.searchbar-placeholder')}
                    onChange={(evt) => setQuery(evt.target.value.toLowerCase())}
                ></CustomSearchBar>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-4 md:mt-4 pt-2 rounded-b-lg">
                {projectsKeyByDate.map((key, i) => {
                    const project = projectsData[key]
                    if (
                        query.trim().length <= 0 ||
                        SearchUtils.findInString(
                            project.desc[i18n.language],
                            query
                        ) ||
                        SearchUtils.findInStringArray(project.stack, query) ||
                        SearchUtils.findInStringArray(project.tags, query) ||
                        SearchUtils.findInString(project.title, query)
                    ) {
                        return (
                            <ProjectButton
                                projectData={project}
                                href={`/projects/${key}`}
                                key={i}
                            ></ProjectButton>
                        )
                    }
                })}
            </div>
        </>
    )
}
