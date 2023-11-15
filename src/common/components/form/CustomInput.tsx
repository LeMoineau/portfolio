import { ChangeEventHandler } from 'react'

export default function CustomInput({
    name,
    type,
    placeholder,
    required,
    label,
    className,
    classNameInput,
    onChange,
}: {
    name: string
    type?: string
    placeholder?: string
    required?: boolean
    label?: string
    className?: string
    classNameInput?: string
    onChange?: ChangeEventHandler<HTMLInputElement>
}) {
    return (
        <fieldset className={`${className} flex flex-col`}>
            {label && (
                <label htmlFor={name} className="text-sm font-light">
                    {label}
                </label>
            )}
            <input
                name={name}
                type={type ?? 'text'}
                placeholder={placeholder}
                onChange={onChange}
                className={`${classNameInput} border rounded h-10 px-2 bg-gray-50`}
                required={required}
            ></input>
        </fieldset>
    )
}
