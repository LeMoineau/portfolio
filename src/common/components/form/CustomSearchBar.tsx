import { ChangeEventHandler } from 'react'
import CustomInput from './CustomInput'
import SearchIcon from '../img/SearchIcon'

export default function CustomSearchBar({
    className,
    classNameInput,
    placeholder,
    onChange,
}: {
    className?: string
    classNameInput?: string
    placeholder?: string
    onChange?: ChangeEventHandler<HTMLInputElement>
}) {
    return (
        <div
            className={`${className} w-full flex flex-row-reverse justify-center h-10`}
        >
            <CustomInput
                name="search"
                placeholder={placeholder}
                className={`${classNameInput} max-w-[30rem] drop-shadow w-full`}
                classNameInput="w-full rounded-full outline-none px-4 pl-8"
                onChange={onChange}
            ></CustomInput>
            <div className="h-full flex flex-row justify-center items-center bg-white px-4 -mr-4 rounded-l-full drop-shadow cursor-pointer">
                <SearchIcon></SearchIcon>
            </div>
        </div>
    )
}
