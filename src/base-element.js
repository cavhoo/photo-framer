class BaseElement extends HTMLElement {
  constructor(){
    super()
    this.initialize()
  }

  initialize() {
    this.setAttribute('class', 'base')
    this.setAttribute('tabIndex', -1)
    this.itemViews = document.createElement('div')
    this.appendChild(this.itemViews)
    this.itemViews.setAttribute('class', 'item-views')
    return this
  }

  addItem(item) {
    this.itemViews.appendChild(item)
    return this
  }

  clearItems() {
    this.itemViews.innerHTML = ''
  }

  removeItem(item) {
    // Noop
  }
}

customElements.define('base-element', BaseElement)
module.exports = BaseElement
