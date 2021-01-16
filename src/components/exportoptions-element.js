const BaseElement = require('../base-element')
const PngOptions = require('./pngoptions-element')
const JpgOptions = require('./jpgoptions-element')
const Dropdown = require('./dropdown-element')

class ExportOptions extends BaseElement {
  create() {
    this.exportMode = 0

    this.pngExport = new PngOptions().create()
    this.pngExport.style.display = 'none'
    this.jpgExport = new JpgOptions().create()

    const modeSelect = new Dropdown().create(
      'Output Format',
      [
        {label: 'JPG', value: 0},
        {label: 'PNG', value: 1}
      ],
      this.onSelectExportMode
    )



    this.addItem(modeSelect)
    this.addItem(this.pngExport)
    this.addItem(this.jpgExport)
    return this
  }

  onSelectExportMode = (event) => {
    this.exportMode = event.currentTarget.value

    switch(this.exportMode) {
      case '0': {
        this.pngExport.style.display = 'none'
        this.jpgExport.style.display = 'block'
        break
      }
      case '1': {
        this.pngExport.style.display = 'block'
        this.jpgExport.style.display = 'none'
        break
      }
    }

  }
}

customElements.define('exportoptions-element', ExportOptions)
module.exports = ExportOptions
