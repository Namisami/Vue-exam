<template>
  <div id="app" class="">
    <header class="bg-dark d-flex justify-content-between px-5 py-2">
      <nav class="nav">
        <li class="nav-item">
          <router-link 
            class="nav-link text-light"
            to="/">
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link 
            class="nav-link text-light"
            to="/about">
            About
          </router-link>
        </li>
      </nav>
      <div>
        <button v-if="user.name" class="btn btn-primary text-light">{{ user.name }}</button>
        <router-link v-else to="login">
          <button type="button" class="btn btn-primary text-light">Login</button>
        </router-link>
        <button v-if="user.name" class="btn btn-warning ml-2" @click="logout">Log out</button>
        <button v-else class="btn btn-warning ml-2">Register</button>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // user: 0
    }
  },
  methods: {
    logout () {
      this.$store.commit('userLogin', {})
    }
  },
  computed: {
    user: function () {
      return this.$store.getters.getUser;
    }
  },
  // mounted() {
  //   this.user = this.$store.getters.getUser;
  // }
}
</script>
