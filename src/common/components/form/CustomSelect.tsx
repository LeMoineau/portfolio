import { ChangeEventHandler } from 'react'

export default function CustomSelect({
    name,
    items,
    value,
    placeholder,
    required,
    label,
    className,
    classNameSelect,
    onChange,
}: {
    name: string
    items: string[]
    value?: number
    placeholder?: string
    required?: boolean
    label?: string
    className?: string
    classNameSelect?: string
    onChange?: ChangeEventHandler<HTMLSelectElement>
}) {
    return (
        <fieldset className={`${className} flex flex-col`}>
            {label && (
                <label htmlFor={name} className="text-sm font-light">
                    {label}
                </label>
            )}
            <select
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`${classNameSelect} border rounded h-10 px-2 bg-gray-50`}
                required={required}
            >
                {items.map((item, i) => {
                    return (
                        <option key={i} value={i}>
                            {item}
                        </option>
                    )
                })}
            </select>
        </fieldset>
    )
}
