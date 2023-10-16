import StandardButton from '@/common/components/buttons/StandardButton'
import CustomIcon from '@/common/components/img/CustomIcon'
import RightArrow from '@/common/components/img/RightArrow'
import Section from '@/common/components/misc/Section'
import SubSection from '@/common/components/misc/SubSection'
import AvatarTag from '@/common/components/text/AvatarTag'
import CustomLink from '@/common/components/text/CustomLink'
import StackTag from '@/common/components/text/StackTag'
import SubSubTitle from '@/common/components/text/SubSubTitle'
import Title from '@/common/components/text/Title'
import Link from 'next/link'

export default function myMajor() {
    const stack = ['HTML', 'CSS', 'Javascript', 'Figma', 'Github']
    return (
        <div className="flex flex-col-reverse md:flex-row">
            <Section className="md:px-10 md:pt-10">
                <Link href={'/projects'}>
                    <StandardButton
                        prependChild={
                            <RightArrow className="rotate-180"></RightArrow>
                        }
                    >
                        Back to projects
                    </StandardButton>
                </Link>
                <Title className="mt-5">
                    myMajor{' '}
                    <span className="text-base font-normal text-gray-600">
                        May 2020
                    </span>
                </Title>
                <p className="mb-5">
                    School tool to help with specialization choices
                </p>
                <CustomIcon
                    src={'/img/myMajor.png'}
                    className="pt-[75%] rounded drop-shadow"
                ></CustomIcon>
            </Section>
            <div className="md:w-1/2 h-full md:ml-5">
                <Section>
                    <SubSection>
                        <SubSubTitle>Project Stack</SubSubTitle>
                        <div className="flex flex-row flex-wrap w-full mt-1">
                            {stack.map((s, i) => (
                                <StackTag key={i}>{s}</StackTag>
                            ))}
                        </div>
                    </SubSection>
                    <SubSection className="mt-5">
                        <SubSubTitle>Link</SubSubTitle>
                        <CustomLink
                            href={'https://bigstones.fr/myMajor'}
                            decoration
                        >
                            bigstones.fr/myMajor
                        </CustomLink>
                    </SubSection>
                    <SubSection className="mt-5">
                        <SubSubTitle>Repository</SubSubTitle>
                        <CustomLink
                            href={'https://github.com/Lemoineau/myMajor'}
                            decoration
                        >
                            github.com/Lemoineau
                        </CustomLink>
                    </SubSection>
                    <SubSection className="mt-5">
                        <SubSubTitle>Client</SubSubTitle>
                        <AvatarTag
                            bg="bg-blue-200"
                            src="/img/efrei.webp"
                            href="https://www.efrei.fr/"
                        >
                            EFREI Paris
                        </AvatarTag>
                    </SubSection>
                </Section>
            </div>
        </div>
    )
}
