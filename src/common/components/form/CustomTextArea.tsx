import { ChangeEventHandler } from 'react'

export default function CustomTextArea({
    name,
    required,
    label,
    placeholder,
    className,
    classNameTextArea,
    onChange,
}: {
    name: string
    required?: boolean
    label?: string
    placeholder?: string
    className?: string
    classNameTextArea?: string
    onChange?: ChangeEventHandler<HTMLTextAreaElement>
}) {
    return (
        <fieldset className={`${className} flex flex-col`}>
            {label && (
                <label htmlFor={name} className="text-sm font-light">
                    {label}
                </label>
            )}
            <textarea
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                required={required}
                className={`${classNameTextArea} border rounded h-28 px-2 py-1 bg-gray-50`}
            ></textarea>
        </fieldset>
    )
}
