import { useState } from 'react'
import NavButton from '../buttons/NavButton'
import Avatar from '../img/Avatar'
import CustomLink from '../text/CustomLink'
import { useTranslation } from 'react-i18next'
import CustomIcon from '../img/CustomIcon'

export default function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const { t, i18n } = useTranslation()

    function getOppositeLanguage() {
        return i18n.language === 'fr' || i18n.language === 'fr-FR' ? 'en' : 'fr'
    }

    return (
        <header className="sticky top-0 z-10 flex flex-row flex-wrap bg-white p-4 rounded-md justify-between items-center w-full h-auto drop-shadow border border-gray-100">
            <CustomLink
                href={'/'}
                noblank
                className="flex justify-start items-center space-x-4"
            >
                <Avatar className="w-10 h-10"></Avatar>
                <p className="px-2 py-1 bg-black text-white rounded text-sm md:text-base">
                    Pierre Faber.
                </p>
            </CustomLink>
            <NavButton
                className="block md:hidden"
                onClick={() => setNavbarOpen(!navbarOpen)}
            ></NavButton>
            <nav
                className={`w-full md:w-auto md:block ${
                    navbarOpen ? 'block' : 'hidden'
                } p-4 md:p-0 mt-3 md:mt-0 border border-gray-100 md:border-transparent bg-gray-50 md:bg-transparent rounded-lg`}
            >
                <ul className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-4">
                    <li>
                        <CustomLink noblank href={'/projects'}>
                            {t('header.projects')}
                        </CustomLink>
                    </li>
                    <li>
                        <CustomLink noblank href={'/about'}>
                            {t('header.about')}
                        </CustomLink>
                    </li>
                    <li className="text-orange-500 font-medium">
                        <CustomLink noblank href={'/contact'}>
                            {t('header.contact')}
                        </CustomLink>
                    </li>
                    <li
                        onClick={() =>
                            i18n.changeLanguage(getOppositeLanguage())
                        }
                        className="cursor-pointer flex flex-col justify-center"
                    >
                        <CustomIcon
                            src={`/img/languages/${getOppositeLanguage()}.png`}
                            className="w-5 h-5"
                            objectFitContain
                        ></CustomIcon>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
