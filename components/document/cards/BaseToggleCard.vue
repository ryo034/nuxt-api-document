<template>
  <v-card class="mx-2 my-6" outlined>
    <v-card-title class="pa-3">
      <p class="ma-0 caption font-weight-bold" style="color:#707070;">
        {{ title }}
      </p>
      <v-spacer></v-spacer>
      <v-icon v-if="show" @click="show = false">expand_more</v-icon>
      <v-icon v-else @click="show = true">expand_less</v-icon>
    </v-card-title>
    <v-divider v-if="show" style="border-color:#e0e0e0"></v-divider>

    <div v-if="show" :class="{ 'pa-4': padding }">
      <slot></slot>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    padding: { type: Boolean, default: true }
  },
  data: () => ({
    show: false
  }),
  created() {
    //
  }
}
</script>
