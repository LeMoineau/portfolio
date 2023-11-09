// import { create } from 'zustand'
// import fr from '../config/u18n/fr'
// import en from '../config/u18n/en'

// type Locale = 'fr' | 'en'
// const DEFAULT_LOCALE: Locale = 'fr'
// export const LOCALSTORAGE_LOCALE_KEY = 'current-locale'
// const dictionaries = {
//     fr: fr,
//     en: en,
// }
// export type LocalStoreState = {
//     locale: Locale
//     messages: { [key: string]: any }
//     setLocale: (locale: Locale) => void
// }

// export const useLocaleStore = create((set) => ({
//     locale: DEFAULT_LOCALE,
//     messages: dictionaries[DEFAULT_LOCALE],
//     setLocale: (locale: Locale) => {
//         set({ locale: locale })
//         set({ messages: dictionaries[locale] })
//     },
// }))
