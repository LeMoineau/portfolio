import { useTranslation } from 'react-i18next'
import CustomLink from '../text/CustomLink'
import StandardButton from './StandardButton'

export default function DownloadCVButton() {
    const { t } = useTranslation()
    return (
        <CustomLink href={t('common.url-cv')}>
            <StandardButton>{t('common.downloadCV-btn')}</StandardButton>
        </CustomLink>
    )
}
