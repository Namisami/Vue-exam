<template>
  <div class="container my-2">
    <h1 class="text-center">Login view</h1>
    <form class="d-flex flex-column" @submit="userLogin">
      <div class="form-group">
        <label for="loginName">
          Name
        </label>
        <input id="loginName" v-model="user.name" required class="form-control" />
      </div>
      <div class="form-group">
        <label for="loginPassword">
          Password
        </label>
        <input id="loginPassword" type="password" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary text-light mx-auto">Login</button>
    </form>
  </div>
</template>

<script>

export default {
  name: "LoginView",
  data() {
    return {
      user: {
        name: '',
      }
    }
  },
  methods: {
    userLogin () {
      return this.$store.commit('userLogin', this.user)
    }
  }
}
</script>