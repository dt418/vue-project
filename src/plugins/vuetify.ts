// Vuetify
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// Translations provided by Vuetify
import { en, vi } from 'vuetify/locale'

export default createVuetify({
  components,
  directives,
  ssr: true,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  locale: {
    locale: 'vi',
    fallback: 'vi',
    messages: { en, vi }
  },
  theme: {
    defaultTheme: 'dark'
  }
})
