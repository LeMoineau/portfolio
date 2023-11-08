import { interMedium } from '@/common/utils/font'
import Avatar from '../img/Avatar'
import CustomLink from '../text/CustomLink'

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
                    className={`${interMedium.className} drop-shadow transform p-4 ml-0 mt-2 md:mt-0 md:ml-8 text-xl md:text-4xl text-center md:text-start bg-white rounded-lg`}
                >
                    <span className="absolute top-0 left-1/2 md:top-8 md:left-0 transform translate-x-[-50%] translate-y-[-100%] md:translate-x-[-100%] md:translate-y-[-50%] bg-transparent border-[10px] border-b-[15px] md:border-b-[10px] border-b-white md:border-b-transparent md:border-r-[15px] md:border-l-0 md:border-r-white bg-transparent border-transparent"></span>
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
                        <CustomLink href="/" decoration noblank>
                            Contact me
                        </CustomLink>
                        ! Or see my{' '}
                        <CustomLink href="/projects" decoration noblank>
                            previous projects
                        </CustomLink>
                        !
                    </p>
                </div>
            </div>
        </div>
    )
}
