<template>
  <div class="root">
    <v-select
      :items="options"
      label="Output Format"
      :value="format"
      @change='onSelectOutput($event, 1)'
    >
    </v-select>
    <JPGOutputOptions
      v-if="format === 'jpg'"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import JPGOutputOptions from './JPGOutputOptions.vue'

export default {
  components: { JPGOutputOptions },
  name: "OutputFormatSelector",
  data: () => ({
    options: [{ text: 'JPG', value: 'jpg'}, { text: 'PNG', value: 'png'}],
  }),
  computed: {
   ...mapGetters({
     format: 'outputOptions/format'
   })
  },
  methods: {
    ...mapActions('outputOptions', [
      'setFormatTo'
    ]),
    onSelectOutput(format) {
      this.setFormatTo(format)
    }
  }
}
</script>

<style scoped>
 .root {
   margin-top: 2.5rem;
 }
</style>
