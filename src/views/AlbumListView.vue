<template>
  <div class="container">
    <h1 class="text-center my-2">Album List</h1>
    <div class="d-print-none">
      <div class="d-flex justify-content-between">
        <div>
          <button
            class="btn btn-primary my-3"
            @click="loadAlbums"
          >
            Update
          </button>
          <button
            v-if="!isFiltered"
            class="btn btn-dark text-light my-3 mx-2"
            @click="filterEmpty"
          >
            Hide empty
          </button>
          <button
            v-else
            class="btn btn-dark text-light my-3 mx-2"
            @click="showAll"
          >
            Show all
          </button>
        </div>
        <div class="d-flex my-auto">
          <p class="m-0">Filter by:</p>
          <input @click="sortByCount" class="ml-1 px-1 bg-dark text-light rounded" type="button" value="Element count" />
        </div>
      </div>
      <div class="form-group">
        <label for="searchInput">Поиск</label>
        <input id='searchInput' class="form-control" placeholder="Введите запрос для поиска..." v-model="search" />
      </div>
    </div>
    <grid-element :elements="albums" elementsType="albums"></grid-element>
    <h2 class="text-center my-3">Создать альбом</h2>
    <p>Конструктор фотоальбомов "Имя" позволяет вам создать свой альбом онлайн и бесплатно делиться им с друзьями и со всем миром!</p>
    <p>Выше вы можете увидеть фотоальбомы, которые УЖЕ создали наши пользователи и которые увидели десятки тысяч людей. Почему мы?
      Потому что с нами фотоальбом - это просто: три поля, один клик - и ваш альбом готов!
    </p>
    <h3 class="text-center">Присоединяйтесь!</h3>
    <form-element></form-element>
  </div>
</template>

<script>
// import AlbumElement from '@/components/AlbumElement.vue';
import FormElement from '@/components/FormElement.vue';
import GridElement from '@/components/GridElement.vue';

export default {
  name: 'AlbumListView',
  components: {
    // AlbumElement,
    FormElement,
    GridElement,
  },
  data() {
    return {
      albums: [],
      isFiltered: false,
      isSorted: false,
      search: '',
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
      this.albums = this.$store.getters.getAlbums
      this.isFiltered = !this.isFiltered
    },
  },
  watch: {
    search: function (val) {
      this.albums = this.$store.getters.getAlbums
      this.albums = this.albums.filter((value) => value.name.toLowerCase().includes(val.toLowerCase()))
      if (this.isFiltered) {
        this.albums = this.albums.filter((value) => value.images.length !== 0)
      }
    },
  },
  mounted() {
    this.loadAlbums()
  },
}
</script>
