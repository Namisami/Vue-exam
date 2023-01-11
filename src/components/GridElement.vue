<template>
  <div>
    <div 
      class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mb-5" 
      v-if="elementsType === 'albums'"
    >
      <div
        class="col p-2"
        v-for="element in elements"
        :key="element.id"
      >
        <router-link
          :to="{ name: 'album', params: { id: element.id } }"
        >
          <album-element :album="element"></album-element>
        </router-link>
      </div>
    </div>
    <div v-else class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mb-5">
      <div
        class="col p-2"
        v-for="image in elements"
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
import AlbumElement from '@/components/AlbumElement.vue'
import ImageElement from '@/components/ImageElement.vue'

export default {
  name: "GridElement",
  components: {
    AlbumElement,
    ImageElement
  },
  props: ['elements', 'elementsType'],
  // computed: {
  //   elementType: function () {
      
  //   }
  // }
}
</script>