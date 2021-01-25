<template>
  <v-app>
    <div id="app">
      <h1 class="app-title">Photo-Framer</h1>
      <Framer />
    </div>
  </v-app>
</template>

<script>
import Framer from './components/Framer.vue';
export default {
  components: { Framer },
  name: 'App',
  data: () => ({
    //
  }),
};
</script>

<style scoped>
 .app-title {
   text-align: center;
   font-size: 4rem
 }
</style>
<style>
 html {
   font-size: 18px;
 }
</style>
