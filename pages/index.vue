<template>
  <div>
    <h1>Main Menu</h1>
    <button @click="signUp({ email: 'ravid1233@gmail.com', password: '123456' })">Add User</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

  export default {
    methods: {
      ...mapActions('user/user', ['signUp'])
    }
  }
</script>

<style lang="scss" scoped>

</style>