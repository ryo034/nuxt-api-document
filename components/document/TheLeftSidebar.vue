<template>
  <v-navigation-drawer
    v-model="getNavigationDrawer"
    :floating="primaryDrawer.floating"
    :mini-variant="primaryDrawer.mini"
    app
    clipped
  >
    <template v-slot:prepend>
      <nav-head />
    </template>
    <div>
      <div class="sidebar-items">
        <v-list nav expand dense>
          <div v-for="item in getSections" :key="item.title">
            <v-list-group
              v-if="item.type === 'dir'"
              v-model="item.active"
              no-action
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title
                    class="pa-0"
                    v-text="item.title"
                  ></v-list-item-title>
                </v-list-item-content>
              </template>

              <div
                v-for="(listItem, listItemIndex) in item.items"
                :key="listItemIndex"
              >
                <nav-list :section="listItem"></nav-list>
              </div>
            </v-list-group>
            <div v-else>
              <nav-list :section="item"></nav-list>
            </div>
          </div>
        </v-list>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
import NavList from './NavList.vue'
import NavHead from './NavHead.vue'

export default {
  components: {
    NavList,
    NavHead
  },
  data: () => ({
    primaryDrawer: {
      clipped: false,
      floating: false,
      mini: false
    },
    designSetting: {
      header: {
        display: false,
        border: false
      },
      leftSidebar: {
        border: false
      }
    }
  }),
  computed: {
    getNavigationDrawer: {
      get() {
        return this.$store.getters['drawer/getNavigationDrawer']
      },
      set(newValue) {
        this.$store.commit('drawer/setNavigationDrawerStatus', newValue)
      }
    },
    getSections() {
      return this.$store.getters['drawer/getSections']
    }
  },
  watch: {
    '$route.hash'(to, from) {
      const targetText = to.replace('#', '')
      const index = this.getSections.findIndex((section) => {
        return section.items.some((item) => {
          return item.title === targetText
        })
      })
      if (index >= 0) {
        this.$store.commit('drawer/toggleSectionDrawer', {
          index,
          status: true
        })
      }
    }
  },
  created() {
    const vm = this
    const index = this.$store.state.drawer.sections.findIndex((section) => {
      if (section.type === 'dir') {
        return section.items.some((item) => {
          return item.title === vm.$route.params.name
        })
      }
    })
    if (index >= 0) {
      this.$store.commit('drawer/toggleSectionDrawer', {
        index,
        status: true
      })
    }
  },
  mounted() {
    // タブレット以上のサイズならドロワーを表示
    if (this.$vuetify.breakpoint.lg || this.$vuetify.breakpoint.xl) {
      this.$store.commit('drawer/setNavigationDrawerStatus', true)
    }
  },
  methods: {
    scrollTo(title) {
      location.hash = '#' + title
    }
  }
}
</script>
