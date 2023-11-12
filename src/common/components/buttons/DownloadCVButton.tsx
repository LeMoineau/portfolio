import { useTranslation } from 'react-i18next'
import CustomLink from '../text/CustomLink'
import StandardButton from './StandardButton'

export default function DownloadCVButton({
    className,
}: {
    className?: string
}) {
    const { t } = useTranslation()
    return (
        <CustomLink href={t('common.url-cv')} className={className}>
            <StandardButton>{t('common.downloadCV-btn')}</StandardButton>
        </CustomLink>
    )
}
