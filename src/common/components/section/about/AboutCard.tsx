import { useTranslation } from 'react-i18next'
import ContactMeButton from '../../buttons/ContactMeButton'
import DownloadCVButton from '../../buttons/DownloadCVButton'
import StandardButton from '../../buttons/StandardButton'
import Avatar from '../../img/Avatar'
import SubSection from '../../misc/SubSection'
import AvailableForWork from '../../text/AvailableForWork'
import CustomLink from '../../text/CustomLink'
import CustomList from '../../text/CustomList'
import PillListItem from '../../text/PillListItem'

export default function AboutCard() {
    const { t } = useTranslation()
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
                {t('about.card.title')}
            </p>
            <p className="italic text-xs mt-1 text-center">
                {t('about.card.subtitle')}
            </p>
            <CustomList>
                <PillListItem
                    entitle={t('about.card.key1')}
                    content={t('about.card.value1')}
                ></PillListItem>
                <PillListItem
                    entitle={t('about.card.key2')}
                    content={t('about.card.value2')}
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
            <div className="w-full items-center justify-center flex flex-row flex-wrap mt-4">
                <ContactMeButton className="m-2"></ContactMeButton>
                <DownloadCVButton className="mx-2"></DownloadCVButton>
            </div>
        </>
    )
}
