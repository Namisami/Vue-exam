<template>
  <div class="container">
    <h1 class="text-center my-2">Album List</h1>
    <div class="d-flex justify-content-between">
      <button
        class="btn btn-primary my-3"
        @click="loadAlbums"
      >
        Update
      </button>
      <button
        v-if="!isFiltered"
        class="btn btn-dark text-light my-3"
        @click="filterEmpty"
      >
        Hide empty
      </button>
      <button
        v-else
        class="btn btn-dark text-light my-3"
        @click="showAll"
      >
        Show all
      </button>
      <div class="d-flex my-auto">
        <p class="m-0">Filter by:</p>
        <input @click="sortByCount" class="ml-1 px-1 bg-dark text-light rounded" type="button" value="Element count" />
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mb-5">
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
    <form-element></form-element>
  </div>
</template>

<script>
import AlbumElement from '@/components/AlbumElement.vue';
import FormElement from '@/components/FormElement.vue';

export default {
  name: 'AlbumListView',
  components: {
    AlbumElement,
    FormElement,
  },
  data() {
    return {
      albums: [],
      isFiltered: false,
      isSorted: false,
    }
  },
  methods: {
    async loadAlbums() {
      await this.$store.dispatch('loadAlbums')
      this.albums = this.$store.getters.getAlbums
    },
    compare(a, b) {
      if (!this.isSorted) {
        if ( a.images.length < b.images.length ){
          return -1;
        }
        if ( a.images.length > b.images.length ){
          return 1;
        }
        return 0;
      } else {
        if ( a.images.length < b.images.length ){
          return 1;
        }
        if ( a.images.length > b.images.length ){
          return -1;
        }
        return 0;
      }
    },
    sortByCount() {
      this.albums.sort( this.compare )
      this.isSorted = !this.isSorted
    },
    filterEmpty() {
      this.albums = this.albums.filter((value) => value.images.length !== 0)
      this.isFiltered = !this.isFiltered
    },
    showAll() {
      this.loadAlbums()
      this.isFiltered = !this.isFiltered
    }
  },
  mounted() {
    this.loadAlbums()
  },
}
</script>
