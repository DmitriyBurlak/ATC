<template>
  <div class="auth-page">
        register
        <button @click="incCount">Inc counter</button>
        {{count}}
  </div>
</template>

<script>
export default {
  name: 'AppRegister',
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    incCount() {
      console.log('test')
      this.$store.commit('increment');
    }
  }
}
</script>

<style>
 .auth-page {
   color: blue;
   font-size: 30px;
 }
</style>