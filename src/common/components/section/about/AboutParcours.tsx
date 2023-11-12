import { useTranslation } from 'react-i18next'
import CustomLink from '../../text/CustomLink'
import Divider from '../../text/Divider'
import Title from '../../text/Title'

export default function AboutMonParcours() {
    const { t } = useTranslation()
    return (
        <>
            <Title className="mt-12 mb-3">
                {t('about.parcours.title1')}{' '}
                <span className="text-purple-400">
                    {t('about.parcours.title2')}
                </span>{' '}
                {t('about.parcours.title3')}.
            </Title>
            <Divider className="my-5"></Divider>
            <p className="indent-8">
                {t('about.parcours.text1')}{' '}
                <span className="font-medium text-green-500">
                    {t('about.parcours.color1')}
                </span>
                {t('about.parcours.text2')}
                <CustomLink href="https://www.efrei.fr/" decoration>
                    {t('about.parcours.link1')}
                </CustomLink>
                {t('about.parcours.text3')}{' '}
                <span className="font-medium text-pink-500">
                    {t('about.parcours.color2')}
                </span>{' '}
                {t('about.parcours.text4')}
                <CustomLink href="https://www.insa-rouen.fr/" decoration>
                    {t('about.parcours.link2')}
                </CustomLink>{' '}
                {t('about.parcours.text5')}{' '}
                <span className="font-medium text-yellow-500">
                    {t('about.parcours.color3')}
                </span>{' '}
                {t('about.parcours.text6')}
                <CustomLink href="https://www.ulaval.ca/" decoration>
                    {t('about.parcours.link3')}
                </CustomLink>
                {t('about.parcours.text7')}{' '}
                <span className="font-medium text-orange-500">
                    {t('about.parcours.color4')}
                </span>{' '}
                {t('about.parcours.text8')}{' '}
                <span className="font-medium text-blue-500">
                    {t('about.parcours.color5')}
                </span>
                .
            </p>
            <p className="mt-4 indent-8">
                {t('about.parcours.text9')}{' '}
                <span className="font-medium text-orange-500">
                    {t('about.parcours.color6')}
                </span>
                ,{' '}
                <span className="font-medium text-purple-500">
                    {t('about.parcours.color7')}
                </span>{' '}
                {t('about.parcours.text10')}{' '}
                <span className="font-medium text-green-500">
                    {t('about.parcours.color8')}
                </span>{' '}
                {t('about.parcours.text11')}{' '}
                <span className="font-medium text-blue-500">
                    {t('about.parcours.color9')}
                </span>{' '}
                {t('about.parcours.text12')}
            </p>
        </>
    )
}
