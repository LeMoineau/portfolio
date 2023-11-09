import { useTranslation } from 'react-i18next'
import StandardButton from './StandardButton'

export default function ContactMeButton() {
    const { t } = useTranslation()
    return (
        <StandardButton reverseColor>{t('common.contact-btn')}</StandardButton>
    )
}
