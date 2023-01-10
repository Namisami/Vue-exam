import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    albums: [],
    images: [],
  },
  getters: {
    getAlbums: state => {
      return state.albums;
    },
    getAlbumById: state => id => {
      return state.albums.find(album => album.id == id);
    },
    getImages: state => {
      return state.images;
    },
    getImageById: state => id => {
      return state.images.find(image => image.id == id);
    }
  },
  mutations: {
    setAlbums (state, albums) {
      state.albums = albums
    },
    addAlbum (state, album) {
      state.albums.push(album)
    },
    setImages (state, images) {
      state.images = images
    },
  },
  actions: {
    async loadAlbums({ commit }) {
      let albums
      await axios
        .get('albums.json')
        .then(res => albums = res.data);
      commit('setAlbums', albums);
    },
    async loadImages({ commit }) {
      let images
      await axios
        .get('images.json')
        .then(res => images = res.data);
      commit('setImages', images);
    }
  },
});
