import { useTranslation } from 'react-i18next'
import CustomLink from '../../text/CustomLink'
import Divider from '../../text/Divider'
import Title from '../../text/Title'

export default function AboutHobbies() {
    const { t } = useTranslation()
    return (
        <>
            <Title className="mt-12 mb-3">
                {t('about.hobbies.title1')}{' '}
                <span className="text-blue-400">
                    {t('about.hobbies.title2')}
                </span>
                .
            </Title>
            <Divider className="my-5"></Divider>
            <p className="indent-8">
                {t('about.hobbies.text1')}{' '}
                <span className="text-green-500 font-medium">
                    {t('about.hobbies.color1')}
                </span>{' '}
                {t('about.hobbies.text2')}{' '}
                <span className="font-medium text-amber-500">
                    {t('about.hobbies.color2')}
                </span>{' '}
                {t('about.hobbies.text3')}{' '}
                <CustomLink href="https://kuterevo.org/" decoration>
                    {t('about.hobbies.link1')}
                </CustomLink>{' '}
                {t('about.hobbies.text4')}{' '}
                <span className="text-blue-500 font-medium">
                    {t('about.hobbies.color3')}
                </span>{' '}
                {t('about.hobbies.text5')}{' '}
                <span className="text-orange-500 font-medium">
                    {t('about.hobbies.color4')}
                </span>
                {t('about.hobbies.text6')}{' '}
                <span className="text-gray-700 font-medium">
                    {t('about.hobbies.color5')}
                </span>{' '}
                {t('about.hobbies.text7')}
            </p>
        </>
    )
}
