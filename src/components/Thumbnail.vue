<template>
  <div class='thumbail-container'>
    <img :src='path' />
  </div>
</template>


<script>
 export default {
   name: 'Thumbnail',
   props: {
     path: String,
     status: String
   }
 }
</script>

<style scoped>
 .thumbnail-container {
   width: 100px;
   height: 100px;
 }

 img {
   width: 100%;
   height: 100%;
 }
</style>
