import { Client } from './client'

export interface ProjectData {
    title: string
    desc: { [locale: string]: string }
    imgs: string[]
    tags: string[]
    date: Date
    stack: string[]
    link?: string
    repository?: string
    client?: Client[]
    color?: string
    details?: { [locale: string]: string }
}
