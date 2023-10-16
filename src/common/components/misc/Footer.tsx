import { interMedium } from '@/common/utils/font'
import Section from './Section'
import SubSection from './SubSection'
import Link from 'next/link'
import StandardButton from '../buttons/StandardButton'
import SubTitle from '../text/SubTitle'
import Avatar from '../img/Avatar'
import AvailableForWork from '../text/AvailableForWork'

export default function Footer() {
    return (
        <Section className="rounded-b-none">
            <p
                className={`${interMedium.className} w-full text-center md:text-2xl mt-2`}
            >
                Let's <span className="text-pink-500">work</span>{' '}
                <span className="text-blue-400">together</span>!
            </p>
            <p className="text-gray-700 text-center mt-1 text-sm">
                Creating websites and application to fit your business!
            </p>
            <div className="flex flex-row justify-center my-6">
                <Avatar className="w-14 h-14" available></Avatar>
                <div className="ml-4">
                    <p className="font-medium">Pierre Faber.</p>
                    <AvailableForWork></AvailableForWork>
                </div>
            </div>
            <div className="flex flex-row space-x-2 justify-center font-medium">
                <StandardButton reverseColor>Contact me!</StandardButton>
                <StandardButton>Download CV</StandardButton>
                <StandardButton>Copy Email</StandardButton>
            </div>
            <SubSection
                className="mt-8"
                classNameChildren="w-full flex flex-row justify-between items-center"
            >
                <SubTitle>Follow me!</SubTitle>
                <div className="flex flex-wrap flex-wrap justify-end space-x-2 text-sm">
                    <Link href={'https://www.linkedin.com/in/pierrefaber/'}>
                        LinkedIn
                    </Link>
                    <Link href={'https://www.github.com/LeMoineau/'}>
                        github
                    </Link>
                    <Link href={'https://www.linkedin.com/in/pierrefaber/'}>
                        twitter
                    </Link>
                    <Link href={'https://www.linkedin.com/in/pierrefaber/'}>
                        dribbble
                    </Link>
                </div>
            </SubSection>
            <SubSection
                className="mt-4"
                classNameChildren="w-full flex flex-col items-center"
            >
                <p>
                    2023 ©{' '}
                    <Link href={'/'} className="font-medium">
                        Pierre Faber
                    </Link>
                    .
                </p>
                <p>
                    Made with{' '}
                    <Link
                        href={'https://nextjs.org/docs/'}
                        className="text-orange-600 font-medium underline"
                    >
                        NextJS
                    </Link>
                    ,{' '}
                    <Link
                        href={'https://tailwindcss.com/docs/'}
                        className="text-orange-600 font-medium underline"
                    >
                        Tailwindcss
                    </Link>{' '}
                    & hosted on{' '}
                    <Link
                        href={'https://vercel.com/docs/'}
                        className="text-orange-600 font-medium underline"
                    >
                        Vercel
                    </Link>
                </p>
            </SubSection>
        </Section>
    )
}
