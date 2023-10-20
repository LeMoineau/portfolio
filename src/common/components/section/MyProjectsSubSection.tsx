import Link from 'next/link'
import SubSection from '../misc/SubSection'
import StandardButton from '../buttons/StandardButton'
import React from 'react'
import CustomIcon from '../img/CustomIcon'
import RightArrow from '../img/RightArrow'

const projects: React.ReactNode[] = []
for (let i = 0; i < 10; i++) {
    projects.push(
        <Link
            href={'/projects/myMajor'}
            key={i}
            className="h-auto w-auto rounded-lg"
        >
            <CustomIcon
                src={'/img/ahoy.png'}
                alt="MyMajor"
                className="w-40 h-40 md:w-56 md:h-56 rounded drop-shadow"
            ></CustomIcon>
        </Link>
    )
}

export default function MyProjectsSubSection() {
    return (
        <SubSection
            title="My Projects"
            actions={
                <Link href={'/projects'}>
                    <StandardButton appendChild={<RightArrow></RightArrow>}>
                        View more
                    </StandardButton>
                </Link>
            }
        >
            <div className="flex flex-row justify-start space-x-2 mt-6 rounded border-l-2 border-r-2 border-gray-200 mt-2 max-w-full overflow-y-scroll md:overflow-hidden">
                {projects}
            </div>
        </SubSection>
    )
}
