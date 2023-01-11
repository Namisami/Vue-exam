<template>
  <div class="container">
    <h1 class="text-center my-2">
      Изображение
    </h1>
    <img 
      class="rounded mx-auto d-block w-75"
      v-if="image.cover !== null"
      :src="image.cover && require(`../../public/images/${image.cover}`)"
      alt="Big version of picture"
    />
    <div class="alert alert-info my-2">
      <p class="m-0 text-center">{{ image.desc }}</p>
      <p class="m-0 text-right">{{ image.date }}</p>
    </div>
    <div>
      <h2 class="text-center">
        Комментарии
      </h2>
      <div class="my-5">
        <div 
          v-for="comment in image.comments" 
          :key="comment.id"
          class="my-2 p-2 shadow border rounded"
        >
          <p class="m-0"><strong>{{ comment.author }}</strong></p>
          <p class="m-0 ml-2">{{ comment.text }}</p>
        </div>
      </div>
      <h3 class="text-center d-print-none">Новый комментарий</h3>
      <form class="my-4 d-flex flex-column justify-content-center d-print-none" @submit="newComment">
        <div class="form-group">
          <label for="commentInput">Текст комментария</label>
          <input id="commentInput" v-model="commentText" class="form-control" placeholder="Пишите свой комментарий здесь" />
        </div>
        <button type="submit" class="btn btn-primary text-light">Отправить комментарий</button>
      </form>
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
      image: {
        comments: []
      },
      commentText: '',
    }
  },
  methods: {
    newComment () {
      this.image.comments.push({
        'author': "Me",
        'text': this.commentText
      })
    }
  },
  async mounted() {
    await this.$store.dispatch('loadImages');
    this.image = this.$store.getters.getImageById(this.$route.params.id);
  },
}
</script>
