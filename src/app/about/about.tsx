import StandardButton from '@/common/components/buttons/StandardButton'
import Section from '@/common/components/misc/Section'
import AboutCard from '@/common/components/section/about/AboutCard'
import AboutHobbies from '@/common/components/section/about/AboutHobbies'
import AboutITPassion from '@/common/components/section/about/AboutITPassion'
import AboutIntro from '@/common/components/section/about/AboutIntro'
import AboutMonParcours from '@/common/components/section/about/AboutParcours'
import CustomLink from '@/common/components/text/CustomLink'
import SubTitle from '@/common/components/text/SubTitle'
import { useTranslation } from 'react-i18next'

export default function AboutPage() {
    const { t } = useTranslation()
    return (
        <div className="flex flex-col-reverse md:flex-row py-8">
            <Section className="px-10 mt-5 md:mt-0">
                <AboutIntro></AboutIntro>
                <AboutITPassion></AboutITPassion>
                <AboutMonParcours></AboutMonParcours>
                <AboutHobbies></AboutHobbies>
                <div className="w-full flex flex-col justify-center items-center space-y-3 mt-8">
                    <SubTitle>
                        Retrouvez toutes ces informations dans mon CV
                    </SubTitle>
                    <span>
                        <CustomLink href={'/assets/Pierre FABER - Resume.pdf'}>
                            <StandardButton>Download CV</StandardButton>
                        </CustomLink>
                    </span>
                </div>
            </Section>
            <div className="md:w-1/2 h-full md:ml-5">
                <Section>
                    <AboutCard></AboutCard>
                </Section>
            </div>
        </div>
    )
}
