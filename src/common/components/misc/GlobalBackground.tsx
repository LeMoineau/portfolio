import CustomIcon from '../img/CustomIcon'
import Link from 'next/link'
import { interMedium } from '@/common/utils/font'
import Avatar from '../img/Avatar'

export default function GlobalBackground() {
    return (
        <div className="fixed top-0 left-0 w-screen h-full flex items-center justify-center">
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start w-full px-2 md:px-20">
                <div className="mb-5 md:mb-0">
                    <Avatar
                        className="drop-shadow w-16 h-16"
                        alt="Pierrot icon"
                    ></Avatar>
                </div>
                <div
                    className={`${interMedium.className} pl-0 md:pl-8 text-xl md:text-4xl text-center md:text-start`}
                >
                    <p>
                        Hey! My name is{' '}
                        <span className="text-sky-500">Pierre</span>.
                    </p>
                    <p>
                        I <span className="text-yellow-400">design</span> and{' '}
                        <span className="text-purple-500">develop</span>{' '}
                        websites as a{' '}
                        <span className="text-green-400">freelancer</span>!
                    </p>
                    <p className="text-sm md:text-base text-slate-500 mt-3 md:mt-0">
                        Have an exciting project?{' '}
                        <Link href={'/'} className="text-blue-700">
                            Contact me
                        </Link>
                        ! Or see my{' '}
                        <Link href={'/'} className="text-blue-700">
                            previous projects
                        </Link>
                        !
                    </p>
                </div>
            </div>
        </div>
    )
}
