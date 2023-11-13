import Footer from '@/common/components/misc/Footer'
import Header from '@/common/components/misc/Header'
import Section from '@/common/components/misc/Section'
import MyProjectsSubSection from '@/common/components/section/MyProjectsSubSection'
import CustomLink from '@/common/components/text/CustomLink'
import Title from '@/common/components/text/Title'
import { useTranslation } from 'react-i18next'
import { Outlet, useRouteError } from 'react-router-dom'

export default function NotFound() {
    const error = useRouteError()
    console.error(error)
    const { t } = useTranslation()
    return (
        <div className="w-full max-w-[70rem] px-4 md:px-8 pt-5 pb-0">
            <Header></Header>
            <main>
                <div className="text-center">
                    <Title className="mt-24 mb-5">
                        <span className="text-red-500">Oups</span>! Nous ne
                        trouvons page la
                        <span className="text-purple-400">page</span>
                        que vous cherchez...
                    </Title>
                    <p>
                        Il semblerait que la page que vous cherchez n'existe
                        pas...
                    </p>
                    <p className="mb-24">
                        However, you can look at my{' '}
                        <CustomLink href="/projects" decoration noblank>
                            other projects
                        </CustomLink>
                        ! Or{' '}
                        <CustomLink href="/" decoration noblank>
                            contact me
                        </CustomLink>{' '}
                        if you need more informations about this project!
                    </p>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}
