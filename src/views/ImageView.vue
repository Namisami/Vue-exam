<template>
  <div class="container">
    <h1 class="text-center my-2">
      Image Element
    </h1>
    <img 
      class="rounded mx-auto d-block"
      v-if="image.cover !== null"
      :src="image.cover && require(`../../public/images/${image.cover}`)"
      width="500"  
      alt="Big version of picture"
    />
    <div class="alert alert-info my-2">
      <p class="m-0 text-center">{{ image.desc }}</p>
      <p class="m-0 text-right">{{ image.date }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ImageView',
  components: {

  },
  data() {
    return {
      image: {},
    }
  },
  async mounted() {
    await this.$store.dispatch('loadImages');
    this.image = this.$store.getters.getImageById(this.$route.params.id);
  },
}
</script>
