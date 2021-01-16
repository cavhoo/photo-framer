const BaseElement = require('../base-element')

class Thumbnail extends BaseElement {
  create(imgSource, index) {
    this.id = index
    this._isDone = false
    this.image = document.createElement('img')
    this.image.width = 100
    this.image.height = 100
    this.image.src = imgSource
    this.classList.add('thumbnail', 'waiting')
    this.addItem(this.image)
    return this
  }

  isDone(done) {
    if (done) {
      this.classList.remove('waiting')
      this.classList.add('done')
    } else {
      this.classList.remove('done')
      this.classList.add('waiting')
    }
  }

}

customElements.define('thumb-nail', Thumbnail)
module.exports = Thumbnail
