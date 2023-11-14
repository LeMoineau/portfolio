import { useTranslation } from 'react-i18next'
import Avatar from '../img/Avatar'
import Section from '../misc/Section'
import SubSection from '../misc/SubSection'
import AvailableForWork from '../text/AvailableForWork'
import StackTag from '../text/StackTag'

export default function CardSection({ className }: { className?: string }) {
    const { t } = useTranslation()
    const currentStacks = [
        'Next.js / React.js / Vue.js',
        'TailwindCSS',
        'Vite + TypeScript',
        'Vitest / Jest',
        'Prisma / Sequelize',
        'PostgreSQL / Firebase',
    ]
    return (
        <>
            <Section className={className}>
                <div className="flex flex-col md:flex-row">
                    <SubSection
                        className="min-w-[14rem] min-h-[14rem] mb-4 md:mb-0 md:w-56 md:h-56"
                        classNameChildren="w-full h-full flex flex-col justify-center items-center"
                    >
                        <Avatar className="w-20 h-20" available></Avatar>
                        <h3 className="font-medium mt-3">Pierre Faber.</h3>
                        <AvailableForWork></AvailableForWork>
                    </SubSection>
                    <div className="w-full flex flex-col justify-center items-center">
                        <p className="text-lg text-center font-medium text-orange-500">
                            {t('common.card.title')}
                        </p>
                        <p className="italic text-center">
                            {t('common.card.subtitle')}
                        </p>
                        <p className="text-xs text-gray-600 font-normal uppercase dark:text-gray-400 mt-4 mb-1">
                            CURRENT STACK
                        </p>
                        <div className="flex flex-row flex-wrap justify-center items-center mb-4 max-w-[50%] border-t border-gray-300 pt-3">
                            {currentStacks.map((s, i) => (
                                <StackTag key={i} className="mx-1 my-1">
                                    {s}
                                </StackTag>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}
