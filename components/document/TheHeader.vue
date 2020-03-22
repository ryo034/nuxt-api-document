<template>
  <v-app-bar
    v-if="designSetting.header.display"
    :class="{ 'design-header-border-none': !designSetting.header.border }"
    :color="designSetting.header.color"
    app
    clipped-left
    dense
    flat
  >
    <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" light /> -->
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    designSetting: {
      header: {
        display: true,
        color: 'white',
        border: true
      }
    }
  })
}
</script>
