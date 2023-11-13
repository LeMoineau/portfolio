import { useTranslation } from 'react-i18next'
import Divider from '../../text/Divider'
import Title from '../../text/Title'

export default function AboutIntro() {
    const { t } = useTranslation()
    return (
        <>
            <Title className="mt-5 mb-3">
                <span className="text-green-500">
                    {t('about.intro.title1')}
                </span>
                {t('about.intro.title2')}{' '}
                <span className="text-sky-500">{t('about.intro.title3')}</span>
                <span className="text-red-400"> {t('about.intro.title4')}</span>
                {t('about.intro.title5')}
            </Title>
            <Divider className="my-5"></Divider>
            <p className="indent-8">
                {t('about.intro.text1')}{' '}
                <span className="text-amber-500 font-medium">
                    {t('about.intro.color1')}
                </span>
                {t('about.intro.text2')}{' '}
                <span className="text-pink-500 font-medium">
                    {t('about.intro.color2')}
                </span>{' '}
                {t('about.intro.text3')}{' '}
                <span className="font-medium text-blue-500">
                    {t('about.intro.color3')}
                </span>
                , {t('about.intro.text4')}{' '}
                <span className="font-medium text-green-500">
                    {t('about.intro.color4')}
                </span>{' '}
                {t('about.intro.text5')}{' '}
                <span className="font-medium text-orange-500">
                    {t('about.intro.color5')}
                </span>
                .{t('about.intro.text6')}{' '}
                <span className="font-medium text-purple-500">
                    {t('about.intro.color6')}
                </span>
                .
            </p>
            <p className="mt-4 indent-8  italic">{t('about.intro.text7')}</p>
        </>
    )
}
