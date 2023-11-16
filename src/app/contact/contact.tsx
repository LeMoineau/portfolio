import StandardButton from '@/common/components/buttons/StandardButton'
import CustomInput from '@/common/components/form/CustomInput'
import CustomSelect from '@/common/components/form/CustomSelect'
import CustomTextArea from '@/common/components/form/CustomTextArea'
import Section from '@/common/components/misc/Section'
import Title from '@/common/components/text/Title'
import { OWN_MAIL_ADDRESS, sendMail } from '@/common/services/mailsender'
import { FormEvent, useState } from 'react'
import EmailSend from './email/email-send'
import ReactDOMServer from 'react-dom/server'
import { useTranslation } from 'react-i18next'
import { AxiosResponse } from 'axios'

export default function ContactPage() {
    const { t } = useTranslation()

    const subjects: string[] = [
        t('contact.subject-values.1'),
        t('contact.subject-values.2'),
        t('contact.subject-values.3'),
        '---',
    ]

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('3')
    const [message, setMessage] = useState('')

    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    const fieldsCorrect = (): boolean => {
        setSuccess(false)
        setError('')
        if (
            firstname.trim().length <= 0 ||
            email.trim().length <= 0 ||
            message.trim().length <= 0
        ) {
            setError(t('contact.missing-field-error-msg'))
            return false
        }
        if (subject === '3') {
            setError(t('contact.wrong-subject-error-msg'))
            return false
        }
        return true
    }

    const sendResult = (res: AxiosResponse) => {
        if (res.status === 200) {
            setSuccess(res.status === 200)
        } else {
            setError(res.data)
        }
    }

    const submit = async (evt: FormEvent) => {
        evt.preventDefault()
        if (fieldsCorrect()) {
            setLoading(true)
            await sendMail({
                to: OWN_MAIL_ADDRESS,
                subject: `[${
                    subjects[Number(subject)]
                }] ${email} - ${firstname} ${lastname}`,
                text: message,
                html: `<pre style="font-family: arial">${message}</pre>`,
            })
            const res = await sendMail({
                to: email,
                subject: `Email sent to Pierre Faber - [${
                    subjects[Number(subject)]
                }] ${email} - ${firstname} ${lastname}`,
                html: ReactDOMServer.renderToString(
                    EmailSend({ firstname, lastname, message, t })
                ),
            })
            sendResult(res)
            setLoading(false)
        }
    }

    return (
        <>
            <Section className="my-5 flex flex-col justify-center items-center w-full">
                <Title className="mb-1">
                    {t('contact.title1')}{' '}
                    <span className="font-medium text-green-500">
                        {t('contact.title2')}
                    </span>{' '}
                    {t('contact.title3')}{' '}
                    <span className="font-medium text-pink-500">
                        {t('contact.title4')}
                    </span>
                    {t('contact.title5')}
                </Title>
                <p className="mb-2 text-gray-500">{t('contact.subtitle')}</p>
                <form
                    action=""
                    onSubmit={submit}
                    className="flex flex-col justify-center items-center max-w-[35rem] w-full py-10"
                >
                    <div className="space-y-3 flex flex-col items-center w-full">
                        {!success && error && (
                            <p className="bg-red-100 rounded border border-red-200 p-2 w-full text-center text-red-800">
                                {error}
                            </p>
                        )}
                        {!error && success && (
                            <p className="bg-green-100 rounded border border-green-200 p-2 w-full text-center text-green-800">
                                {t('contact.success-msg')}
                            </p>
                        )}
                        <div className="flex flex-row flex-wrap md:flex-nowrap md:space-x-2 w-full">
                            <CustomInput
                                name="firstname"
                                label={`${t('contact.firstname-label')}*`}
                                className="w-full"
                                placeholder={t('contact.firstname-placeholder')}
                                onChange={(evt) =>
                                    setFirstname(evt.target.value)
                                }
                                required
                            ></CustomInput>
                            <CustomInput
                                name="lastname"
                                label={`${t('contact.lastname-label')}`}
                                className="w-full"
                                placeholder={t('contact.lastname-placeholder')}
                                onChange={(evt) =>
                                    setLastname(evt.target.value)
                                }
                            ></CustomInput>
                        </div>
                        <CustomInput
                            name="email"
                            label={`${t('contact.email-label')}*`}
                            type="email"
                            className="w-full"
                            placeholder={t('contact.email-placeholder')}
                            onChange={(evt) => setEmail(evt.target.value)}
                            required
                        ></CustomInput>
                        <CustomSelect
                            name="subject"
                            items={subjects}
                            value={Number(subject)}
                            label={`${t('contact.subject-label')}*`}
                            className="w-full"
                            onChange={(evt) => setSubject(evt.target.value)}
                            required
                        ></CustomSelect>
                        <CustomTextArea
                            name="content"
                            label={`${t('contact.message-label')}*`}
                            className="w-full"
                            placeholder={t('contact.message-placeholder')}
                            onChange={(evt) => setMessage(evt.target.value)}
                            required
                        ></CustomTextArea>
                        <div className="w-3"></div>
                        <StandardButton
                            className="w-fit"
                            reverseColor
                            onSubmit={(evt) => evt.preventDefault()}
                            disabled={loading}
                        >
                            {t('contact.send-btn')}
                        </StandardButton>
                    </div>
                </form>
                <p className="mt-2 text-sm text-gray-500">
                    <span className="underline">{t('contact.tips-title')}</span>{' '}
                    {t('contact.tips-content')}
                </p>
            </Section>
        </>
    )
}
