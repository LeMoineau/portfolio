import { useTranslation } from 'react-i18next'

export default function AvailableForWork() {
    const { t } = useTranslation()
    return (
        <div className="flex flex-row items-center space-x-2 bg-green-200 text-green-500 text-xs font-semibold tracking-wider px-3 py-1 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <p className="">{t('common.available-for-work')}</p>
        </div>
    )
}
