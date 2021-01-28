<template>
  <div class="framer"
  >
    <image-drop-zone />
    <div class="output-format-selector">
      <common-output-options />
      <output-format-selector />
    </div>
    <div
      class="start-process-btn"
    >
      <v-btn
        elevation="2"
        color="primary"
        :disabled="imgCount === 0 || !hasOutputPath"
        @click="onStartProcessing($event, 1)"
      >
        Start
      </v-btn>
    </div>
  </div>
</template>

<script>
 import { mapGetters } from 'vuex'
 import CommonOutputOptions from './CommonOutputOptions.vue'
 import ImageDropZone from './ImageDropZone'
 import OutputFormatSelector from './OutputFormatSelector'

 import { processImages } from '../utils/imageQueue.utils'

 export default {
   name: 'Framer',
   computed: {
     ...mapGetters({
       imgCount: 'images/imageCount',
       images: 'images/images',
       hasOutputPath: 'outputOptions/hasOutputPath',
       ouputOptions: 'outputOptions/options'
     })
   },
   components: {
     ImageDropZone,
     OutputFormatSelector,
     CommonOutputOptions
   },
   props: {
     msg: String
   },
   methods: {
     onStartProcessing() {
       console.log("Starting....")
       processImages(
         this.images,
         this.outputOptions
       )
     }
   }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .main {}
 .output-format-selector {
   width: 50%;
   margin: 0 auto;
 }
 .start-process-btn {
   margin-top: 20px;
   display: flex;
   place-items: center;
   place-content: center;
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
