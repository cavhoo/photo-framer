<template>
  <div class='thumbnail-container'>
    <img :src='path' />
    <span v-if="status == 'pending'" class="thumbnail-status">
      <md-icon>schedule</md-icon>
    </span>
    <span v-if="status == 'done'" class="thumbnail-status">
      <md-icon>done</md-icon>
    </span>
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
   width: 120px;
   height: 120px;
   margin-right: 10px;
   position: relative;
   overflow: hidden;
   display: flex;
   place-content: center;
   place-items: center;
  }  
  .thumbnail-status {
    position: absolute;
  }

  .thumbnail-status > i {
    color: var(--md-theme-default-primary) !important;
  }

  img {
    width: 100%;
  }

</style>
