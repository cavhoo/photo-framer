<template>
  <div>
    <v-slider
      v-model="options.desiredPadding"
      label="Padding"
      min="0"
      max="500"
      thumb-label="always"
      @change="onPaddingChange($event, 1)"
    />
    <v-switch
      v-model="customFilename"
      inset
    />
    <v-text-field
      :disabled="customFilename !== true"
      label="Custom Filename"
    />
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: "CommonOutputOptions",
    data: () => ({
      customFilename: false
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
      enableCustomFilename() {
        this.customFilename = !this.customFilename
        if (!this.customFilename) {
          this.setOptionsTo({
            ...this.options,
            filename: '<name>_squared.<format>'
          })
        }
      },
      onCustomFilename(event) {
        this.setOptionsTo({
          ...this.options,
          filename: event
        })
      },
      onPaddingChange(padding) {
        this.setOptionsTo({
          ...this.options,
          desiredPadding: padding
        })
      }
    }
  }
</script>

<style scoped>

</style>
