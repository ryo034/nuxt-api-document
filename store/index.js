// ナビゲーションドロワーの回避策
export const strict = false

export const actions = {
  // 処理を記述（awaitの例なのでasyncを指定しています）
  async nuxtClientInit({ commit, state }, { app }) {
    const data = await getNavigations()
    commit('drawer/setSections', data)
  }
}

// get all navigations
function getNavigations() {
  const sections = []
  const requireComponent = require.context('~/assets/api', true, /^.*\.json$/)
  requireComponent.keys().forEach((fileName) => {
    const pathArray = fileName.split('/')
    const componentConfig = requireComponent(fileName)
    const name = componentConfig.info.name
    if (name) {
      if (pathArray[1].match(/^.*\.json$/)) {
        const data = {
          title: name,
          active: false,
          type: 'file',
          items: componentConfig.item
        }
        sections.push(data)
      } else {
        const child = {
          title: name,
          active: false,
          type: 'file',
          items: componentConfig.item
        }
        const data = {
          title: pathArray[1],
          active: false,
          type: 'dir',
          items: [child]
        }
        const sectionIndex = sections.findIndex(
          (section) => section.title === pathArray[1]
        )
        if (sectionIndex >= 0) {
          sections[sectionIndex].items.push(child)
        } else {
          sections.push(data)
        }
      }
    }
  })
  console.log(sections)
  return sections
}
