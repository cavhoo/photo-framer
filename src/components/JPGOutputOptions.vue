<template>
  <div>
    <p
      class='title'
    >
      JPG Output Settings
    </p>
    <div class='quality'>
      <v-slider
        hint='JPG Quality'
        label='Quality'
        max="100"
        min="30"
        v-model="quality"
        thumb-label='always'
        @change="onQualityChange($event, 1)"
      >
      </v-slider>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
   name: 'JPGOutputOptions',
   data: () => ({
     quality: 80,
    
   }),
   computed: {
     ...mapGetters({
       options: 'outputOptions/options'
     })
   },
   methods: {
     ...mapActions('outputOptions', [
       'setOptionsTo'
     ]),
     onQualityChange(event) {
       this.setOptionsTo({
         quality: event
       })
     }
   }
}
</script>

<style scoped>
 .title {
   font-size: 1rem;
 }
 .quality {
   margin-top: 35px;
 }

</style>
