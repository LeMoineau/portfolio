import { Client } from './client'

export interface ProjectData {
    title: string
    desc: string
    img: string
    tags: string[]
    date: Date
    stack: string[]
    link?: string
    repository?: string
    client?: Client[]
    color?: string
}
