import { useTranslation } from 'react-i18next'
import StandardButton from './StandardButton'

export default function ContactMeButton({ className }: { className?: string }) {
    const { t } = useTranslation()
    return (
        <StandardButton reverseColor className={className}>
            {t('common.contact-btn')}
        </StandardButton>
    )
}
