const BaseElement = require('../base-element')

class JpgOptionsElement extends BaseElement {
  create() {
    const container = document.createElement('div')
      container.style.marginBottom = '20px'
    this.qualitySlider = document.createElement('input')
    this.qualitySlider.setAttribute('type', 'range')
    this.qualitySlider.setAttribute('min', 0)
    this.qualitySlider.setAttribute('max', 100)
    this.qualitySlider.setAttribute('value', 80)
    this.qualitySlider.setAttribute('id', 'jpgQuality')
    this.qualitySlider.setAttribute('class', 'form-range')
    this.qualitySlider.setAttribute('datalist', 'jpgQualityMarks')

    this.qualitySlider.addEventListener('change', this.onQualityChanged)
    const qualityLabel = document.createElement('label')
    qualityLabel.setAttribute('class', 'form-label')
    qualityLabel.htmlFor = this.qualitySlider.id
    qualityLabel.innerText = 'Quality'

    this.qualityValue = document.createElement('input')
    this.qualityValue.value = 80
    this.qualityValue.addEventListener('change', this.onQualityChanged)
    this.qualityValue.setAttribute('class', 'form-control')

    const inputGroup = document.createElement('div')
    inputGroup.setAttribute('class', 'input-group')
    inputGroup.appendChild(qualityLabel)
    inputGroup.appendChild(this.qualitySlider)
    inputGroup.appendChild(this.qualityValue)

    container.appendChild(inputGroup)

    this.addItem(container)

    return this
  }

  onQualityChanged = (event) => {
    const qual = event.currentTarget.value
    this.qualityValue.value = qual
    this.qualitySlider.value = qual
  }
}

customElements.define('jpgoptions-element', JpgOptionsElement)

module.exports = JpgOptionsElement
