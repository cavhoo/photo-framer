<template>
  <div class="common-options">
    <v-slider
      label="Padding(px)"
      min="0"
      max="500"
      thumb-label="always"
      @change="onPaddingChange($event, 1)"
    />
    <v-switch
      label="Customfilename"
      inset
      :value="customFilename"
      @change="enableCustomFilename($event, 1)"
    />
    <v-text-field
      label="Custom Filename"
      :disabled="customFilename !== true"
      :value="customFilename ? options.filePattern : ''"
      @change="onCustomFilename($event, 1)"
    />
    <div class="output-folder">
      <v-text-field
        label="Output Directory"
        :value="options.outputPath"
        @change="onOutputFolderChanged($event, 1)"
      />
    </div>
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
            filePattern: '<name>_squared.<format>'
          })
        }
      },
      onCustomFilename(event) {
        this.setOptionsTo({
          ...this.options,
          filePattern: event
        })
      },
      onPaddingChange(padding) {
        this.setOptionsTo({
          ...this.options,
          desiredPadding: padding
        })
      },
      onOutputFolderChanged(folder) {
        this.setOptionsTo({
          ...this.options,
          outputPath: folder
        })
      }
    }
  }
</script>

<style scoped>
 .common-options {
   margin-top: 50px;
 }
 .output-folder {
   display: flex;
 }
</style>
