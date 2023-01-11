<template>
  <div class="my-5 border rounded d-print-none">
    <p class="text-center bg-dark text-light rounded-top">Создать новый альбом</p>
    <form
      class="p-3"
      @submit="postEntry"
    >
      <div class="form-group">
        <label for="coverInput">
          Обложка
        </label>
        <input
          id="coverInput"
          class="form-control-file"
          type="file"
          accept="image/*"
          required
          @change="changeCover"
        />
      </div>
      <div class="form-group">
        <label for="nameInput">
          Название
        </label>
        <input
          id="nameInput"
          class="form-control"
          required
          inputmode="text"
          v-model="name"
        />
      </div>
      <div class="form-group">
        <label for="descriptionInput">
          Описание
        </label>
        <input
          id="descriptionInput"
          class="form-control"
          required
          inputmode="text"
          v-model="description"
        />
      </div>
      <button 
        type="submit" 
        class="btn btn-primary text-light" 
      >
        Создать
      </button>
    </form>
    <v-snackbar
      v-model="snackbar"
    >
      Создан новый альбом
      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Закрыть
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "FormElement",
  data() {
    return {
      snackbar: false,
      errorMessage: '',
      cover: {
        name: '',
        data: '',
      },
      name: 'New Album',
      description: "Without description",
    }
  },
  methods: {
    changeCover (e) {
      if (!e.target.files.length) return;
      
      this.cover = {
          name: e.target.files[0].name,
          data: e.target.files[0]
      };
    },
    async postEntry (e) {
      e.preventDefault();
      this.errorMessage = '';
      if (this.name.length > 0 || this.description.length > 0) {
        this.errorMessage += '<br>Название альбома и его описание не могут быть пустыми.';
      }
      if (this.cover == {}) {
        this.errorMessage += '<br>Альбому необходима обложка.'
      }
      if (this.errorMessage === '') {
        return
      } else {
        let formData = new FormData()
        formData.append('cover', this.cover.data, this.cover.name)
        formData.append('name', this.name)
        formData.append('description', this.description)
        formData.append('date', Date.now())
        await axios
          .post('https://eodzf3dkszyjh1w.m.pipedream.net', formData)
          .then(res => console.log(res))
      }
      this.snackbar = true
      return this.createExample()
    },
    createExample () {
      this.$store.commit('addAlbum', {
        'cover': 'placeholder.webp',
        'name': 'Example',
        'desc': 'ExampleExampleExampleExampleExampleExampleExampleExampleExample',
        'date': Date.now(),
      })
    }
  }
}
</script>