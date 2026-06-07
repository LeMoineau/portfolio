import ProjectButton from '@/common/components/buttons/ProjectButton'
import Section from '@/common/components/misc/Section'
import { projectsData } from '@/common/resources/data/projects-data'
import Title from '@/common/components/text/Title'
import Divider from '@/common/components/text/Divider'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import CustomSearchBar from '@/common/components/form/CustomSearchBar'
import { SearchUtils } from '@/common/services/search-utils'
import DownloadPortfolioButton from '../../common/components/buttons/DownloadPortfolioButton'

export default function ProjectsPage() {
    const { t, i18n } = useTranslation()
    const [query, setQuery] = useState('')
    const [projectKeys, setProjectKeys] = useState(Object.keys(projectsData))
    const [iconized, _] = useState(false)

    useEffect(() => {
        if (!!!query || query.trim().length <= 0) {
            setProjectKeys(Object.keys(projectsData))
        } else {
            setProjectKeys(
                Object.keys(projectsData).filter((k) => {
                    const project = projectsData[k]
                    return (
                        query.trim().length <= 0 ||
                        SearchUtils.findInString(
                            project.desc[i18n.language],
                            query
                        ) ||
                        SearchUtils.findInStringArray(project.stack, query) ||
                        SearchUtils.findInStringArray(project.tags, query) ||
                        SearchUtils.findInString(project.title, query)
                    )
                })
            )
        }
    }, [query])

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
                <p className="text-sm text-gray-700 mb-4">
                    {t('projects-page.desc')}
                </p>
                <DownloadPortfolioButton></DownloadPortfolioButton>
            </Section>
            <div className="pt-0 rounded-t-none sticky top-24 z-10">
                <CustomSearchBar
                    className="mt-4 md:mt-6"
                    placeholder={t('projects-page.searchbar-placeholder')}
                    onChange={(evt) => {
                        if (!!evt?.target?.value) {
                            setQuery(evt.target.value.toLowerCase())
                        } else {
                            setQuery('')
                        }
                    }}
                ></CustomSearchBar>
                {/* //TODO: finish bouton iconized */}
                {/* <button
                    onClick={() => {
                        setIconized(!iconized)
                    }}
                >
                    iconized
                </button> */}
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-4 md:mt-4 pt-2 rounded-b-lg">
                {projectKeys
                    .sort(
                        (a, b) =>
                            projectsData[b].date.getTime() -
                            projectsData[a].date.getTime()
                    )
                    .map((key, i) => {
                        const project = projectsData[key]
                        return (
                            <ProjectButton
                                key={i}
                                projectData={project}
                                href={`/projects/${key}`}
                                iconized={iconized}
                            ></ProjectButton>
                        )
                    })}
            </div>
        </>
    )
}
