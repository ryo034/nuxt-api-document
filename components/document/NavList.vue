<template>
  <div>
    <div
      class="nav-section-title"
      @click="
        $router.push({
          name: 'docs-api-name',
          params: { name: section.title }
        })
      "
    >
      <div
        :class="{
          'nav-selected': $route.params.name === section.title
        }"
      >
        {{ section.title }}
      </div>
    </div>
    <div v-if="$route.params.name === section.title" class="pl-4">
      <v-list-item
        v-for="subItem in section.items"
        :key="subItem.title"
        dense
        inactive
      >
        <v-list-item-content class="pa-0">
          <v-list-item-title>
            <a
              class="sidebar-nav-item hoverable pl-0"
              :class="{ active: $route.hash === `#${subItem.name}` }"
              @click="scrollTo(subItem.name)"
              v-text="subItem.name"
            ></a>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    section: { type: Object, default: null }
  },
  methods: {
    scrollTo(title) {
      location.hash = '#' + title
    }
  }
}
</script>
