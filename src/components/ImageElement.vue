<template>
  <div class="card shadow text-dark">
    <img 
      class="card-img-top"
      height="300"
      :style="{ 'object-fit': 'cover' }"
      v-if="image.cover !== null"
      :src="image.cover && require(`../../public/images/${image.cover}`)"
      width="300"
    />
    <div class="card-body py-2">
      <p class="card-text">{{ image.desc }}</p>  
    </div>
  </div>  
</template>

<script>

export default {
  name: "ImageElement",
  props: ["imageId"],
  data() {
    return {
      image: {},
    }
  },
  async mounted() {
    await this.$store.dispatch('loadImages');
    this.image = this.$store.getters.getImageById(this.imageId)
  }
};
</script>
