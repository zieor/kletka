import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'


import ru from './locales/ru.json'
import en from './locales/en.json'

const savedLang = localStorage.getItem('lang')
const browserLang = navigator.language?.split('-')[0] || 'ru'
const defaultLang = ['ru', 'en'].includes(savedLang)
    ? savedLang
    : ['ru', 'en'].includes(browserLang)
        ? browserLang
        : 'ru'

const i18n = createI18n({
    locale: defaultLang,
    fallbackLocale: 'en',
    messages: { ru, en },
    legacy: false,
    globalInjection: true
})

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')