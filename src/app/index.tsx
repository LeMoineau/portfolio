import SubSection from '@/common/components/misc/SubSection'
import GlobalBackground from './../common/components/misc/GlobalBackground'
import Section from './../common/components/misc/Section'
import MyProjectsSubSection from './../common/components/section/MyProjectsSubSection'
import Avatar from '@/common/components/img/Avatar'
import AvailableForWork from '@/common/components/text/AvailableForWork'
import { useTranslation } from 'react-i18next'
import StackTag from '@/common/components/text/StackTag'

export default function Home() {
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
            <div>
                <GlobalBackground />
                <Section className="mt-[70vh]">
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
                                {currentStacks.map((s) => (
                                    <StackTag className="mx-1 my-1">
                                        {s}
                                    </StackTag>
                                ))}
                            </div>
                        </div>
                    </div>
                </Section>
                <Section className="mt-5">
                    <MyProjectsSubSection></MyProjectsSubSection>
                </Section>
            </div>
            <div className="hidden bg-indigo-200 bg-amber-200 bg-red-200 bg-orange-200 bg-yellow-200 bg-slate-200 bg-green-300 bg-purple-200 bg-gray-200 bg-blue-200"></div>
        </>
    )
}
