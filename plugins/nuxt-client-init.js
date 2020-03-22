export default (context) => {
  return context.store.dispatch('nuxtClientInit', context)
}
