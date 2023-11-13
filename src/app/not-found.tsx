import StandardButton from '@/common/components/buttons/StandardButton'
import RightArrow from '@/common/components/img/RightArrow'
import Footer from '@/common/components/misc/Footer'
import Header from '@/common/components/misc/Header'
import CustomLink from '@/common/components/text/CustomLink'
import Title from '@/common/components/text/Title'
import { useTranslation } from 'react-i18next'
import { useRouteError } from 'react-router-dom'

export default function NotFound() {
    const error = useRouteError()
    console.error(error)
    const { t } = useTranslation()
    return (
        <div className="w-full max-w-[70rem] px-4 md:px-8 pt-5 pb-0">
            <Header></Header>
            <main className="flex flex-col justify-center items-center">
                <div className="text-center">
                    <Title className="mt-24 mb-5">
                        <span className="text-red-500">
                            {t('page-not-found.title1')}
                        </span>
                        {t('page-not-found.title2')}{' '}
                        <span className="text-purple-400">
                            {t('page-not-found.title3')}
                        </span>{' '}
                        {t('page-not-found.title4')}
                    </Title>
                    <p>{t('page-not-found.text1')}</p>
                    <p className="mb-4">
                        {t('page-not-found.text2')}{' '}
                        <CustomLink href="/projects" decoration noblank>
                            {t('page-not-found.link1')}
                        </CustomLink>{' '}
                        {t('page-not-found.text3')}
                    </p>
                </div>
                <CustomLink href="/" noblank className="mb-24">
                    <StandardButton appendChild={<RightArrow></RightArrow>}>
                        {t('page-not-found.redirect-btn')}
                    </StandardButton>
                </CustomLink>
            </main>
            <Footer></Footer>
        </div>
    )
}
