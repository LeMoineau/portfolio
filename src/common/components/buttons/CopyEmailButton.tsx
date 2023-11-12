import { useTranslation } from 'react-i18next'
import CopyButton from './CopyButton'

export default function CopyEmailButton({ className }: { className?: string }) {
    const { t } = useTranslation()
    return (
        <CopyButton textToCopy="faberpierre78@gmail.com">
            {t('common.copyEmail-btn')}
        </CopyButton>
    )
}
