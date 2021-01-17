<template>
  <div
    class='main'
    @dragenter.prevent
    @dragover.prevent
    @drop='onDrop($event, 1)'
  >
    <p>
      Drop Images here
    </p>
  </div>
</template>


<script>
 import path from 'path'
 import { mapState, mapActions } from 'vuex'

 const allowedFormats = [
   '.png',
   '.jpg',
   '.jpeg'
 ]

 export default {
   computed: {
     ...mapState({
       images: state => state.images
     })
   },
   name: 'ImageDropZone',
   methods: {
     ...mapActions('images', [
       'addImages'
     ]),
     onDrop(event) {
       event.stopPropagation()
       event.preventDefault()
       let images = []
       for (const img of event.dataTransfer.files) {
         const isAllowed = allowedFormats.includes(path.extname(img.path))
         if (isAllowed) {
           images.push({
             path: `file:///${img.path}`,
             name: img.name
           })
         }
       }
       this.addImages(images)
     }
   }

 }
</script>

<style scoped>
 .main {
   width: 300px;
   height: 200px;
   background-color: green;
 }
</style>
