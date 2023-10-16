import Footer from '@/common/components/misc/Footer'
import Header from '@/common/components/misc/Header'
import '@/common/css/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Pierre Faber Portfolio',
    description: '',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} bg-slate-50 w-100 h-100 px-4 md:px-8 pt-5 pb-0`}
            >
                <Header></Header>
                <main>{children}</main>
                <Footer></Footer>
            </body>
        </html>
    )
}
