<template>
  <v-card
    elevation="5"
    class="main"
    @dragenter.prevent
    @dragover.prevent
    @drop='onDrop($event, 1)'
  >
    <template
      v-if="count === 0"
    >
      <md-empty-state
        md-icon="add_photo_alternate"
        md-label="Drop Images here"
        md-description="Drag and drop images from your computer here to add them" />
    </template>
    <template
      v-if="count > 0"
    >
      <div
        class="pending-images"
      >
        <h3>Pending Images</h3>
        <thumbnail-container />
      </div>
    </template>
    </v-card>
</template>


<script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  import ThumbnailContainer from './ThumbnailContainer'
  export default {
    computed: {
      ...mapState({
        images: state => state.images
      }),
      ...mapGetters({
        count: 'images/imageCount'
      })
    },
    components: {
      ThumbnailContainer
    },
    name:
      'ImageDropZone',
    methods: {
      ...mapActions('images', [
        'addImages'
      ]),
      onDrop(event) {
        event.stopPropagation()
        event.preventDefault()
        
        this.addImages(event.dataTransfer.files)
      }
    }

  }
</script>

<style scoped>
 .main {
   width: 80vw;
   min-height: 400px;
   margin: 0 auto;
 }

 .pending-images {
   padding: 10px;
 }
</style>
