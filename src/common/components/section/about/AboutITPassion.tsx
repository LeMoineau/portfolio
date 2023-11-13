import { useTranslation } from 'react-i18next'
import CustomLink from '../../text/CustomLink'
import Divider from '../../text/Divider'
import Title from '../../text/Title'

export default function AboutITPassion() {
    const { t } = useTranslation()
    return (
        <>
            <Title className="mt-12 mb-3">
                {t('about.ITPassion.title1')}{' '}
                <span className="font-medium text-green-500">
                    {t('about.ITPassion.title2')}
                </span>{' '}
                {t('about.ITPassion.title3')}
                <span className="font-medium text-orange-500">
                    {t('about.ITPassion.title4')}
                </span>
                .
            </Title>
            <Divider className="my-5"></Divider>
            <p className="indent-8">
                {t('about.ITPassion.text1')}{' '}
                <span className="font-medium text-sky-500">
                    {t('about.ITPassion.color1')}
                </span>{' '}
                {t('about.ITPassion.text2')}{' '}
                <CustomLink href="https://docs.unity.com/" decoration>
                    {t('about.ITPassion.link1')}
                </CustomLink>
                {t('about.ITPassion.text3')}{' '}
                <span className="font-medium text-amber-900">
                    {t('about.ITPassion.color2')}
                </span>{' '}
                {t('about.ITPassion.text4')}{' '}
                <span className="text-green-500 font-medium">
                    {t('about.ITPassion.color3')}
                </span>
                .{t('about.ITPassion.text5')}{' '}
                <CustomLink href="/projects/mcplugins" decoration>
                    {t('about.ITPassion.link2')}
                </CustomLink>{' '}
                {t('about.ITPassion.text6')}
            </p>
            <p className="mt-4 indent-8">
                {t('about.ITPassion.text7')}{' '}
                <span className="font-medium text-red-500">
                    {t('about.ITPassion.color4')}
                </span>
                {t('about.ITPassion.text8')}{' '}
                <span className="font-medium text-gray-400">
                    {t('about.ITPassion.color5')}
                </span>{' '}
                {t('about.ITPassion.text9')}{' '}
                <span className="font-medium text-amber-500">
                    {t('about.ITPassion.color6')}
                </span>{' '}
                {t('about.ITPassion.text10')}{' '}
                <span className="font-medium text-orange-500">
                    {t('about.ITPassion.color7')}
                </span>{' '}
                {t('about.ITPassion.text11')}{' '}
                <CustomLink href="https://react.dev/reference/" decoration>
                    {t('about.ITPassion.link3')}
                </CustomLink>
                ,{' '}
                <CustomLink href="https://vuejs.org/guide" decoration>
                    {t('about.ITPassion.link4')}
                </CustomLink>{' '}
                {t('about.ITPassion.text12')}{' '}
                <CustomLink href="https://angular.io/docs" decoration>
                    {t('about.ITPassion.link5')}
                </CustomLink>
                {t('about.ITPassion.text13')}{' '}
                <span className="font-medium text-purple-500">
                    {t('about.ITPassion.color8')}
                </span>{' '}
                {t('about.ITPassion.text14')}{' '}
                <span className="font-medium text-pink-500">
                    {t('about.ITPassion.color9')}
                </span>{' '}
                {t('about.ITPassion.text15')}{' '}
                <CustomLink
                    href="https://www.electronjs.org/fr/docs/latest/"
                    decoration
                >
                    {t('about.ITPassion.link6')}
                </CustomLink>{' '}
                {t('about.ITPassion.text16')}{' '}
                <CustomLink href="https://ionicframework.com/docs" decoration>
                    {t('about.ITPassion.link7')}
                </CustomLink>
                {t('about.ITPassion.text17')}{' '}
                <CustomLink href="https://docs.flutter.dev/" decoration>
                    {t('about.ITPassion.link8')}
                </CustomLink>{' '}
                {t('about.ITPassion.text18')}{' '}
                <CustomLink href="https://firebase.google.com/docs" decoration>
                    {t('about.ITPassion.link9')}
                </CustomLink>
                .
            </p>
            <p className="mt-4 indent-8">
                {t('about.ITPassion.text19')}{' '}
                <span className="font-medium text-red-500">
                    {t('about.ITPassion.color10')}
                </span>{' '}
                {t('about.ITPassion.text20')}
                <span className="text-gray-800 font-medium">
                    {t('about.ITPassion.color11')}
                </span>{' '}
                {t('about.ITPassion.text21')}{' '}
                <span className="text-purple-500 font-medium">
                    {t('about.ITPassion.color12')}
                </span>
                {t('about.ITPassion.text22')}{' '}
                <CustomLink href="https://docs.python.org/3/" decoration>
                    {t('about.ITPassion.link10')}
                </CustomLink>
                ,{' '}
                <CustomLink href="https://dev.java/" decoration>
                    {t('about.ITPassion.link11')}
                </CustomLink>{' '}
                {t('about.ITPassion.text23')}{' '}
                <CustomLink href="https://www.wildfly.org/" decoration>
                    {t('about.ITPassion.link12')}
                </CustomLink>
                .
            </p>
            <p className="mt-4 indent-8">
                {t('about.ITPassion.text24')}{' '}
                <span className="font-medium text-green-500">
                    {t('about.ITPassion.color13')}
                </span>{' '}
                {t('about.ITPassion.text25')}{' '}
                <span className="font-medium text-orange-500">
                    {t('about.ITPassion.color14')}
                </span>{' '}
                {t('about.ITPassion.text26')}
            </p>
        </>
    )
}
