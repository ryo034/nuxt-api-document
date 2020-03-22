<template>
  <div>
    <div id="scroll-target" style="max-height: 100vh" class="overflow-y-auto">
      <div v-scroll:#scroll-target="scrollSpy">
        <div
          v-for="(project, projectIndex) in $store.state.sections.sections"
          :key="projectIndex"
        >
          <div
            v-for="(section, sectionIndex) in project.item"
            :key="sectionIndex"
          >
            <api-section
              :id="section.name"
              :request="section.request"
              :response="section.response"
            ></api-section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

// https://programmer-beginner.com/scroll-spy
<script>
import _ from 'lodash'
import ApiSection from '~/components/document/ApiSection.vue'

export default {
  components: {
    ApiSection
  },

  layout: 'sample',

  async fetch({ store, params }) {
    const data = await getAllDocs(params.name)
    store.commit('sections/setSections', data)
  },

  beforeMount() {
    window.addEventListener('scroll', this.scrollSpy)
  },

  methods: {
    scrollSpy: _.debounce(function(e) {
      const els = document.getElementsByClassName('scroll-spy')
      const vm = this
      // const hash = this.$route.hash
      Array.prototype.forEach.call(els, function(el) {
        const hightAdjustment = 10
        const elTop = el.getBoundingClientRect().top
        const elBottom = el.getBoundingClientRect().bottom - hightAdjustment
        if (elTop <= 0 && elBottom >= 0) {
          if (el.id !== vm.$route.params.name) {
            // vm.$router.push({ name: 'docs-api-name', params: { name: el.id } })
            vm.$router.push({
              name: 'docs-api-name',
              params: { name: vm.$route.params.name },
              hash: `#${el.id}`
            })
          }
        }
      })
    }, 10)
  }
}

// get all documents
function getAllDocs(name) {
  const obj = []
  const requireComponent = require.context('~/assets/api/', true, /^.*\.json$/)
  requireComponent.keys().forEach((fileName) => {
    if (fileName.includes(name)) {
      //   console.log('match')
      const data = requireComponent(fileName)

      // setting.jsがあるなら設定する
      // const sectionHead = {
      //   name: data.info.name,
      //   request: {
      //     description: data.info.description,
      //     header: []
      //   },
      //   response: []
      // }
      //   data.item.unshift(sectionHead)

      obj.push(data)
    }
  })
  return obj
}
</script>
