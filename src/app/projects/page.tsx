import CustomIcon from '@/common/components/img/CustomIcon'
import Section from '@/common/components/misc/Section'
import SubTitle from '@/common/components/text/SubTitle'

export default function defaultProject() {
    return (
        <Section className="p-8">
            <SubTitle>My Projects.</SubTitle>
            <p>
                Here are all my previous projects. Discover in this portfolio
                plenty of varied projects from showcase websites to complete
                mobile app.
            </p>
            <div className="w-full grid grid-cols-3 gap-2 mt-8">
                <div>
                    <CustomIcon
                        src="/img/ahoy.png"
                        className="pt-[75%] rounded"
                    ></CustomIcon>
                    <p>Ahoy</p>
                </div>
                <div className={'mt-4'}>
                    <CustomIcon
                        src="/img/myMajor.png"
                        className="pt-[75%] rounded"
                    ></CustomIcon>
                    <p>Ahoy</p>
                </div>
                <div>
                    <CustomIcon
                        src="/img/bubbles.png"
                        className="pt-[75%] rounded"
                    ></CustomIcon>
                    <p>Ahoy</p>
                </div>
            </div>
        </Section>
    )
}
