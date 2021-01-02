const BaseElement = require('./base-element')

class TextboxElement extends BaseElement {
  create(placeholder) {
    const textBox = document.createElement('input')
    textBox.setAttribute('class', 'textbox')
    textBox.setAttribute('placeholder', placeholder)
    this.itemViews.appendChild(textBox)
    return this
  }

}

module.exports = TextboxElement
