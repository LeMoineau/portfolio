export default function RightArrow({ className }: { className?: string }) {
    return (
        <svg
            className={`${className} w-4 h-4`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="2 0 16 22"
        >
            <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
        </svg>
    )
}
