<template>
  <div class="main"
  >
    <ImageDropZone />
    <ThumbnailContainer />
  </div>
</template>

<script>
 import ImageDropZone from './ImageDropZone'
 import ThumbnailContainer from './ThumbnailContainer'

 export default {
   name: 'Framer',
   components: {
     ImageDropZone,
     ThumbnailContainer
   },
   props: {
     msg: String
   }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .main {
   width: 300px;
   height: 200px;
   background-color: green;
 }
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
