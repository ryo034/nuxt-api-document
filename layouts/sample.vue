<template>
  <v-app id="app">
    <v-app-bar
      v-if="!$vuetify.breakpoint.lg && !$vuetify.breakpoint.xl"
      color="white"
      dense
      app
      clipped-left
    >
      <v-app-bar-nav-icon
        @click.stop="$store.commit('drawer/toggleNavigationDrawer')"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Codmon API</v-toolbar-title>
    </v-app-bar>
    <the-left-sidebar></the-left-sidebar>
    <v-content>
      <v-container fluid class="pa-0">
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TheLeftSidebar from '../components/document/TheLeftSidebar.vue'

export default {
  components: {
    TheLeftSidebar
  },
  scrollToTop: false
}
</script>
