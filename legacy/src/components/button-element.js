const BaseElement = require('../base-element')

class ButtonElement extends BaseElement {
  create({
    title,
    onClickCallback
  }) {
    const btn = document.createElement('button')
    btn.innerText = title
    btn.setAttribute('class', 'btn btn-primary')
    btn.addEventListener('click', onClickCallback)
    this.addItem(btn)
    return this
  }

}

customElements.define('button-element', ButtonElement)

module.exports = ButtonElement
