import GlobalBackground from './../common/components/misc/GlobalBackground'
import MyProjectsSection from '../common/components/section/MyProjectsSection'
import CardSection from '@/common/components/section/CardSection'

export default function Home() {
    return (
        <>
            <div>
                <GlobalBackground />
                <CardSection className="mt-[70vh]"></CardSection>
                <MyProjectsSection className="mt-5"></MyProjectsSection>
            </div>
            <div className="hidden bg-indigo-200 bg-amber-200 bg-red-200 bg-orange-200 bg-yellow-200 bg-slate-200 bg-green-300 bg-purple-200 bg-gray-200 bg-blue-200"></div>
        </>
    )
}
