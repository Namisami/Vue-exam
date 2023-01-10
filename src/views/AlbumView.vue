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
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mb-5">
      <div
        class="col p-2"
        v-for="image in album.images"
        :key="image"
      >
        <router-link
          :to="{ name: 'image', params: { id: image } }"
        >
          <image-element :imageId="image"></image-element>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ImageElement from '@/components/ImageElement.vue';

export default {
  name: 'AlbumView',
  components: {
    ImageElement
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
