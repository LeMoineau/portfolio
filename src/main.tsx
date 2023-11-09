import React from 'react'
import ReactDOM from 'react-dom/client'
import './common/config/globals.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './app/layout'
import ProjectsPage from './app/projects/projects'
import AboutPage from './app/about/about'
import ProjectPage from './app/projects/project'
import Home from './app'
import NotFound from './app/not-found'
import './common/config/i18n'

const router = createBrowserRouter([
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
                path: 'about',
                element: <AboutPage></AboutPage>,
            },
            {
                path: 'projects',
                element: <ProjectsPage></ProjectsPage>,
            },
            {
                path: 'projects/:projectname',
                element: <ProjectPage></ProjectPage>,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
)
