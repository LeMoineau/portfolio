import { RouteObject } from 'react-router-dom'
import RootLayout from './app/layout'
import ProjectsPage from './app/projects/projects'
import AboutPage from './app/about/about'
import ProjectPage from './app/projects/project'
import Home from './app'
import NotFound from './app/not-found'
import ContactPage from './app/contact/contact'

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <RootLayout></RootLayout>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '',
                element: <Home></Home>,
            },
            {
                path: 'projects',
                element: <ProjectsPage></ProjectsPage>,
            },
            {
                path: 'projects/:projectname',
                element: <ProjectPage></ProjectPage>,
            },
            {
                path: 'about',
                element: <AboutPage></AboutPage>,
            },
            {
                path: 'contact',
                element: <ContactPage></ContactPage>,
            },
        ],
    },
]
