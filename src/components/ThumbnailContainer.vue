<template>
  <div>
    <Thumbnail
      v-for='img in images'
      :key='img.name'
      :path='img.path'
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
   computed: {
     ...mapGetters({
       images: 'images/images',
       count: 'images/imageCount'
     })
   },
   name: 'ThumbnailContainer'
 }
</script>


<style>

</style>
