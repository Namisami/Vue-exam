<template>
  <div class="card shadow text-dark">
    <img 
      class="card-img-top"
      :style="{ 'object-fit': 'cover' }"
      height="300"
      :src="require(`../../public/images/${album.cover}`)"
    />
    <div class="card-body py-1">
      <p class="card-title border-bottom py-2 my-0">{{ album.name }}</p>
      <p class="card-text py-2">{{ album.desc }}</p>  
    </div>
  </div>  
</template>

<script>

export default {
  name: "AlbumElement",
  props: ["album"],
  data() {
    return {

    }
  },
};
</script>
