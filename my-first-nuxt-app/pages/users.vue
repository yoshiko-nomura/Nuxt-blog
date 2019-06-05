<template>
  <div>
    <input type="text" v-model="userId">
    <button @click="onLoadUser">Load Uer</button>
    <nuxt-child />
    <!-- 子コンポーネントを表示する -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: ''
    }
  },
  methods: {
    onLoadUser() {
      this.$router.push('/users/' + this.userId)
    }
  },
  layout: 'users'
}
</script>

<style scoped>

</style>
