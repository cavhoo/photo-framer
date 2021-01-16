const BaseElement = require('../base-element')

class LabelElement extends BaseElement {
  create({text, type}) {
    this.labelText = text
    this.labelType = type
    this.labelElement = document.createElement(type)
    this.labelElement.innerText = text

    this.addItem(this.labelElement)

    return this
  }

}
customElements.define('label-element', LabelElement)
module.exports = LabelElement
