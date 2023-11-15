import { TFunction } from 'i18next'
import { useTranslation } from 'react-i18next'

export default function EmailSend({
    firstname,
    lastname,
    message,
    t,
}: {
    firstname: string
    lastname?: string
    message: string
    t?: TFunction
}) {
    if (!t) {
        t = useTranslation().t
    }
    return (
        <>
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgb(186, 230, 253)',
                    padding: '1.5rem',
                    boxSizing: 'border-box',
                }}
                className="drop-shadow mt-5"
            >
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'white',
                        padding: '1.5rem',
                        borderRadius: '0.5rem',
                        filter: 'drop-shadow(rgba(0, 0, 0, 0.1) 0px 1px 2px) drop-shadow(rgba(0, 0, 0, 0.06) 0px 1px 1px)',
                        boxSizing: 'border-box',
                    }}
                >
                    <h1>
                        <span style={{ color: 'rgb(249, 115, 22)' }}>
                            {t('contact.email-send.title1')}
                        </span>{' '}
                        {t('contact.email-send.title2')}{' '}
                        <span
                            style={{ color: 'rgb(22, 163, 74)' }}
                            className="text-green-600"
                        >
                            {t('contact.email-send.title3')}
                        </span>{' '}
                        {t('contact.email-send.title4')}
                        <span
                            style={{ color: 'rgb(236, 72, 153)' }}
                            className="text-pink-500"
                        >
                            {t('contact.email-send.title5')}
                        </span>
                        {t('contact.email-send.title6')}
                    </h1>
                    <p>
                        {t('contact.email-send.text1')} {firstname}
                        {lastname && ` ${lastname}`}
                        {t('contact.email-send.text2')}
                    </p>
                    <p>{t('contact.email-send.text3')}</p>
                    <pre
                        style={{
                            fontFamily: 'arial',
                            padding: '1rem',
                            borderRadius: '0.5rem',
                            backgroundColor: 'rgb(249, 250, 251)',
                            border: 'solid 1px rgb(243, 244, 246)',
                            marginTop: '0.5rem',
                            marginBottom: '0.5rem',
                        }}
                    >
                        {message}
                    </pre>
                    <p>{t('contact.email-send.text4')}</p>
                    <p>{t('contact.email-send.text5')}</p>
                    <div
                        style={{
                            marginTop: '0.75rem',
                            marginBottom: '0.75rem',
                            width: '100%',
                            borderTop: 'solid 1px rgb(209, 213, 219)',
                        }}
                    ></div>
                    <table style={{ borderSpacing: '0.25rem 0' }}>
                        <tbody>
                            <tr>
                                <td rowSpan={2}>
                                    <img
                                        style={{
                                            width: '2.5rem',
                                            height: '2.5rem',
                                            borderRadius: '9999px',
                                        }}
                                        src="https://lh3.googleusercontent.com/ogw/AKPQZvxY7U-LG9sWgSKd9N87c087P8ZpgCLf33MfMOYZvQ=s32-c-mo"
                                    ></img>
                                </td>
                                <td>
                                    <p style={{ margin: '0' }}>Pierre Faber.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div style={{ marginTop: '-0.5rem' }}>
                                        <a
                                            style={{ marginRight: '0.5rem' }}
                                            href="https://www.linkedin.com/in/pierrefaber/"
                                        >
                                            Linkedin
                                        </a>
                                        <a
                                            style={{ marginRight: '0.5rem' }}
                                            href="https://www.github.com/LeMoineau/"
                                        >
                                            github
                                        </a>
                                        <a
                                            style={{ marginRight: '' }}
                                            href="https://dribbble.com/pierrot552"
                                        >
                                            dribbble
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
