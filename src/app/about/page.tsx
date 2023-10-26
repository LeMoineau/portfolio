import Section from '@/common/components/misc/Section'
import Title from '@/common/components/text/Title'

export default function About() {
    return (
        <Section className="px-10 py-5 my-8">
            <Title className="mt-5 mb-3">
                <span className="text-green-500">Hi</span>! my name is{' '}
                <span className="text-sky-500">Pierre</span>
                <span className="text-red-400"> Faber</span>.
            </Title>
            <p>
                I'm presenting to you today as a web designer and developer
                after being involved with it for almost 8 years. Indeed
            </p>
            <Title className="mt-10 mb-3">
                My <span className="text-orange-400">Motivations</span>.
            </Title>
        </Section>
    )
}
