import { useTranslation } from 'react-i18next'
import MyProjectsSubSection from '../section/MyProjectsSection'
import CustomLink from '../text/CustomLink'
import Title from '../text/Title'
import Section from './Section'

export default function ProjectNotFound() {
    const { t } = useTranslation()
    return (
        <>
            <div className="text-center">
                <Title className="mt-24 mb-5">
                    <span className="text-red-500">
                        {t('project-not-found.title1')}
                    </span>
                    {t('project-not-found.title2')}{' '}
                    <span className="text-purple-400">
                        {t('project-not-found.title3')}
                    </span>
                    !
                </Title>
                <p>{t('project-not-found.text1')}</p>
                <p className="mb-24">
                    {t('project-not-found.text2')}{' '}
                    <CustomLink href="/projects" decoration noblank>
                        {t('project-not-found.link1')}
                    </CustomLink>
                    {t('project-not-found.text3')}{' '}
                    <CustomLink href="/" decoration noblank>
                        {t('project-not-found.link2')}
                    </CustomLink>{' '}
                    {t('project-not-found.text4')}
                </p>
            </div>

            <Section>
                <MyProjectsSubSection></MyProjectsSubSection>
            </Section>
        </>
    )
}
