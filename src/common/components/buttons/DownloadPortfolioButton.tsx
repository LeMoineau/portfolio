import { useTranslation } from 'react-i18next'
import StandardButton from './StandardButton'
import pdfService from '../../services/pdf.service'
import { projectsData } from '../../resources/data/projects-data'
import { memo, useEffect, useState } from 'react'

export default memo(function DownloadPortfolioButton({
    className,
}: {
    className?: string
}) {
    const { t, i18n } = useTranslation()
    const [disabled, setDisable] = useState(false)

    useEffect(() => {
        if (!!disabled) {
            setTimeout(() => {
                pdfService
                    .generatePortfolio(
                        Object.values(projectsData)
                            .filter((p) => p.imgs.length > 1)
                            .sort((a, b) => b.date.getTime() - a.date.getTime())
                            .slice(0, 20),
                        i18n.language,
                        'Pierre FABER - Portfolio.pdf'
                    )
                    .then(() => {
                        setDisable(false)
                    })
            }, 500)
        }
    }, [disabled])

    return (
        <StandardButton
            className={`${disabled ? 'opacity-50' : ''} ${className}`}
            disabled={disabled}
            onClick={async () => {
                if (!!!disabled) {
                    setDisable(true)
                }
                // new Promise<void>((resolve) => {
                //     pdfService.generatePortfolio(
                //         Object.values(projectsData)
                //             .slice(0)
                //             .sort((a, b) => b.date.getTime() - a.date.getTime())
                //     )
                //     resolve()
                // }).finally(() => {
                //     setDisable(false)
                // })
            }}
        >
            {disabled
                ? t('common.portfolio-loading')
                : t('common.download-portfolio-btn')}
        </StandardButton>
    )
})
