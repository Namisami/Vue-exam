<template>
  <div class="container">
    <h1 class="my-2 text-center">{{ album.name }}</h1>
    <div class="mx-auto">
      <img 
        class="rounded w-50 mx-auto my-3 d-block"
        :src="album.cover && require(`../../public/images/${album.cover}`)"
      />
      <div class="text-center alert alert-info my-1">
        <p class='m-0'>{{ album.desc }}</p>
        <p class='m-0 text-right'>{{ album.date }}</p>
      </div>
    </div>
    <grid-element :elements="album.images" elementsType='images'></grid-element>
  </div>
</template>

<script>
import GridElement from '@/components/GridElement.vue';

export default {
  name: 'AlbumView',
  components: {
    GridElement
  },
  data() {
    return {
      album: {},
    }
  },
  async mounted() {
    await this.$store.dispatch('loadAlbums');
    await this.$store.dispatch('loadImages');
    this.album = this.$store.getters.getAlbumById(this.$route.params.id);
  },
}
</script>
