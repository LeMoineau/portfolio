import axios, { AxiosResponse } from 'axios'

const MAILSENDER_API_URL = import.meta.env.VITE_MAILSENDER_API_URL ?? ''
export const OWN_MAIL_ADDRESS = import.meta.env.VITE_OWN_MAIL_ADDRESS ?? ''

export async function sendMail({
    to,
    subject,
    text,
    html,
}: {
    to: string
    subject: string
    text?: string
    html?: string
}): Promise<AxiosResponse> {
    return await axios.post(`${MAILSENDER_API_URL}/mail`, {
        to: to,
        subject: subject,
        text: text,
        html: html,
    })
}
