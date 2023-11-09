'use client'

import Section from './Section'
import SubSection from './SubSection'
import StandardButton from '../buttons/StandardButton'
import SubTitle from '../text/SubTitle'
import Avatar from '../img/Avatar'
import AvailableForWork from '../text/AvailableForWork'
import CopyButton from '../buttons/CopyButton'
import Title from '../text/Title'
import CustomLink from '../text/CustomLink'
import { useTranslation } from 'react-i18next'
import ContactMeButton from '../buttons/ContactMeButton'
import DownloadCVButton from '../buttons/DownloadCVButton'
import CopyEmailButton from '../buttons/CopyEmailButton'

export default function Footer() {
    const { t } = useTranslation()
    return (
        <Section className="rounded-b-none mt-4">
            <Title className={`w-full mt-2 text-center`}>
                {t('footer.title1')}{' '}
                <span className="text-pink-500">{t('footer.title2')}</span>{' '}
                <span className="text-blue-400">{t('footer.title3')}</span>!
            </Title>
            <p className="text-gray-700 text-center mt-1 text-sm">
                {t('footer.subtitle')}
            </p>
            <div className="flex flex-row justify-center my-6">
                <Avatar className="w-14 h-14" available></Avatar>
                <div className="ml-4">
                    <CustomLink href="/about">
                        <p className="font-medium">Pierre Faber.</p>
                    </CustomLink>
                    <AvailableForWork></AvailableForWork>
                </div>
            </div>
            <div className="flex flex-row space-x-2 justify-center font-medium">
                <ContactMeButton></ContactMeButton>
                <DownloadCVButton></DownloadCVButton>
                <CopyEmailButton></CopyEmailButton>
            </div>
            <SubSection
                className="mt-8"
                classNameChildren="w-full flex flex-row justify-between items-center"
            >
                <SubTitle>{t('footer.followMe')}</SubTitle>
                <div className="flex flex-wrap flex-wrap justify-end space-x-2 text-sm">
                    <CustomLink
                        href={'https://www.linkedin.com/in/pierrefaber/'}
                    >
                        LinkedIn
                    </CustomLink>
                    <CustomLink href={'https://www.github.com/LeMoineau/'}>
                        github
                    </CustomLink>
                    <CustomLink
                        href={'https://www.linkedin.com/in/pierrefaber/'}
                    >
                        twitter
                    </CustomLink>
                    <CustomLink
                        href={'https://www.linkedin.com/in/pierrefaber/'}
                    >
                        dribbble
                    </CustomLink>
                </div>
            </SubSection>
            <SubSection
                className="mt-4"
                classNameChildren="w-full flex flex-col items-center"
            >
                <p>
                    2023-2024 ©{' '}
                    <CustomLink href={'/'} className="font-medium">
                        Pierre Faber
                    </CustomLink>
                    .
                </p>
                <p className="text-center">
                    {t('footer.copyright1')}{' '}
                    <CustomLink
                        href={'https://vitejs.dev/guide/'}
                        className="text-orange-600 font-medium underline"
                    >
                        Vite
                    </CustomLink>
                    +
                    <CustomLink
                        href={
                            'https://legacy.reactjs.org/docs/getting-started.html'
                        }
                        className="text-orange-600 font-medium underline"
                    >
                        React
                    </CustomLink>{' '}
                    {t('footer.copyright2')}{' '}
                    <CustomLink
                        href={'https://tailwindcss.com/docs/'}
                        className="text-orange-600 font-medium underline"
                    >
                        Tailwindcss
                    </CustomLink>
                </p>
            </SubSection>
        </Section>
    )
}
