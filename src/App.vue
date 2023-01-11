<template>
  <v-app id="app" class="">
    <header class="bg-dark d-flex flex-column flex-sm-row justify-content-between px-5 py-2 d-print-none">
      <nav class="nav">
        <v-tabs dark>
          <v-tab
            class="bg-dark"
            to="/"
          >
            Home
          </v-tab>
          <v-tab
          class="bg-dark"
            to="/about"
          >
            About
          </v-tab>
        </v-tabs>
      </nav>
      <a href="/albums.json" target="_blank" class="my-1 btn btn-secondary text-white py-3">
        albums.json
      </a>
      <a href="/images.json" target="_blank" class="my-1 btn btn-secondary text-white py-3">
        images.json
      </a>
      <div class="d-flex justify-content-center">
        <button v-if="user.name" class="my-1 btn btn-primary text-light">{{ user.name }}</button>
        <router-link class="d-flex" v-else to="/login">
          <button type="button" class="my-1 btn btn-primary text-light">Login</button>
        </router-link>
        <button v-if="user.name" class="my-1 btn btn-warning ml-2" @click="logout">Log out</button>
        <button v-else class="my-1 btn btn-warning ml-2">Register</button>
      </div>
    </header>
    <v-main>
      <router-view />
    </v-main>
    <v-footer
      color="dark  lighten-1"
      padless
    >
      <v-card
        dark
        class="d-flex w-100"
      >
        <v-card-text class="py-2 text-center">
          {{ new Date().getFullYear() }} — <strong>Mospolytech</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
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
