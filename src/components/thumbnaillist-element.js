const BaseElement = require('../base-element')

const Thumbnail = require('./thumbnail-element')
const Label = require('./label-element')
class ThumbnailList extends BaseElement {
  /**
   * @param {string[]} images
   **/
  create(images) {
    this.images = []
    this.addItem(new Label().create({
      text: 'Loaded Images',
      type:'h3'
    }))

    this.container = document.createElement('div')
    this.addItem(this.container)

    this.createThumbnails(images)


    return this
  }
  /**
   * @param {File[]} images
   * */
  createThumbnails(images) {
    this.container.innerText = ''
    images.forEach((img, index) => {
      const thumb = new Thumbnail().create(img, index)
      this.container.appendChild(thumb)
      this.images.push(thumb)
    })
  }

  updateThumbnails(images) {
    this.createThumbnails(images)
  }

  setThumbnailDone(id) {

  }
}

customElements.define('thumbnail-list', ThumbnailList)
module.exports = {
  ThumbnailList
}
