import Link from 'next/link'
import StandardButton from '../../buttons/StandardButton'
import Avatar from '../../img/Avatar'
import SubSection from '../../misc/SubSection'
import AvailableForWork from '../../text/AvailableForWork'
import CustomLink from '../../text/CustomLink'
import CustomList from '../../text/CustomList'
import PillListItem from '../../text/PillListItem'

export default function AboutCard() {
    return (
        <>
            <SubSection classNameChildren="w-full flex flex-col justify-center items-center py-5">
                <Avatar available className="w-20 h-20"></Avatar>
                <h3 className="font-medium mt-3">Pierre Faber.</h3>
                <AvailableForWork></AvailableForWork>
            </SubSection>
            <h3 className="font-medium text-lg text-center mt-4">
                Pierre Faber.
            </h3>
            <p className="text-sm text-center font-medium text-orange-600">
                Full-Stack, Web Front-end & Mobile Developer
            </p>
            <p className="italic text-xs mt-1 text-center">
                "Ready to join your team right now! 🚀"
            </p>
            <CustomList>
                <PillListItem
                    entitle="Location"
                    content="On Remote"
                ></PillListItem>
                <PillListItem
                    entitle="Availability"
                    content="Now"
                ></PillListItem>
                <PillListItem
                    entitle="Email"
                    content={
                        <CustomLink href={'mailto:faberpierre78@gmail.com'}>
                            faberpierre78@gmail.com
                        </CustomLink>
                    }
                ></PillListItem>
            </CustomList>
            <div className="w-full items-center justify-center flex flex-row flex-wrap space-x-2 mt-4">
                <StandardButton reverseColor>Contact me!</StandardButton>
                <Link
                    target="_blank"
                    href={'/assets/Pierre FABER - Resume.pdf'}
                >
                    <StandardButton>Download CV</StandardButton>
                </Link>
            </div>
        </>
    )
}
