<template>
  <div id="content" class="fill-width fill-height" style="background:#44A3C5;">
    <div class="fill-height d-flex">
      <p
        class="text-center ma-auto white--text font-weight-bold"
        style="font-size:64px;"
      >
        Hello, Codmon!!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    goAccountPage() {
      this.$router.push({ name: 'account' })
    }
  }
}
</script>

<style media="screen">
.fill-width {
  width: 100%;
}
</style>
