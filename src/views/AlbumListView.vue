<template>
  <div class="container">
    <h1 class="text-center my-2">Album List</h1>
    <div class="row row-cols-3 mb-5">
      <div
        class="col p-2"
        v-for="album in albums"
        :key="album.id"
      >
        <router-link 
          :to="{ name: 'album', params: { id: album.id } }"
        >
          <album-element
            :album="album"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import AlbumElement from '@/components/AlbumElement.vue';

export default {
  name: 'AlbumListView',
  components: {
    AlbumElement,
  },
  data() {
    return {
      albums: [],
    }
  },
  async mounted() {
    await this.$store.dispatch('loadAlbums');
    this.albums = this.$store.getters.getAlbums;
  },
}
</script>
