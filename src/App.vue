<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
const darkMode = ref(false)

const toggleTheme = () => {
  theme.global.name.value = darkMode.value ? 'dark' : 'light'
  // Optional: Get value of current theme
  console.log(`Current theme is dark? ${theme.global.current.value.dark}`)
}
</script>
<template>
  <v-app>
    <v-toolbar density="compact" color="primary">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <v-switch
        inset
        color="info"
        v-model="darkMode"
        @change="toggleTheme()"
        class="d-flex align-center"
      >
      </v-switch>
    </v-toolbar>
    <v-content>
      <p>Test</p>
    </v-content>
  </v-app>
</template>
