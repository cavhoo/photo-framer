<template>
  <div class="thumbnail-container">
    <Thumbnail
      v-for='img in images'
      :key='img.name'
      :path='img.path'
      :status='img.status'
    />
  </div>
</template>

<script>
 import { mapGetters } from 'vuex'
 import Thumbnail from './Thumbnail'

 export default {
   components: {
     Thumbnail
   },
   props: {

   },
   computed: {
     ...mapGetters({
       images: 'images/images',
       count: 'images/imageCount'
     })
   },
   name: 'ThumbnailContainer'
 }
</script>


<style scoped>
  .thumbnail-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
