const BaseElement = require('../base-element')

class PngOptionsElement extends BaseElement {
  create() {
    const container = document.createElement('div')

    const quality = document.createElement('input')
    quality.setAttribute('type', 'range')
    quality.setAttribute('min', 0)
    quality.setAttribute('max', 100)
    quality.setAttribute('id', 'pngQuality')

    const qualityLabel = document.createElement('label')
    qualityLabel.setAttribute('for', quality.id)

    container.appendChild(quality)
    container.appendChild(qualityLabel)

    this.addItem(container)
    return this
  }
}

customElements.define('pngoptions-element', PngOptionsElement)
module.exports = PngOptionsElement
