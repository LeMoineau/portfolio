import { useTranslation } from 'react-i18next'
import StandardButton from './StandardButton'
import CustomLink from '../text/CustomLink'

export default function ContactMeButton({ className }: { className?: string }) {
    const { t } = useTranslation()
    return (
        <CustomLink href="/contact" noblank>
            <StandardButton reverseColor className={className}>
                {t('common.contact-btn')}
            </StandardButton>
        </CustomLink>
    )
}
