<template>
  <v-app>
    <v-app-bar
      :clipped-left="clipped"
      flat
      color="transparent"
      absolute
      style="z-index:1"
    >
      <v-spacer></v-spacer>
      <div class="d-flex align-center pt-6 pr-6">
        <v-btn text dark @click="goDocumentPage()">
          Docsへ
        </v-btn>
      </div>
    </v-app-bar>
    <v-content class="pa-0 ma-0 default-content">
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    clipped: false,
    drawer: false,
    fixed: false,
    miniVariant: false,
    right: true,
    rightDrawer: false
  }),
  methods: {
    goDocumentPage() {
      this.$router.push({ name: 'docs-api-name', params: { name: 'sample' } })
    }
  }
}
</script>
