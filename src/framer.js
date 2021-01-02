const sharp = require('sharp')
const BaseElement = require('./base-element')

const LabelElement = require('./components/label-element')
const {ThumbnailList} = require('./components/thumbnaillist-element')
const Button = require('./components/button-element')
const Dropdown = require('./components/dropdown-element')


function getFileNameWOFormat(imgPath) {
  return path.parse(imgPath).name
}

class Framer extends BaseElement {
  create() {
    this.images = []
    this.setAttribute('class', 'framer-window')

    const title = new LabelElement().create({
      text: 'Photo Framer',
      type: 'h1'
    })

    this.addItem(title)

    this.thumbnails = new ThumbnailList().create([])
    this.addItem(this.thumbnails)

    this.exportMode = new Dropdown().create(
      'Output Format',
      [
        {label: 'JPG', value: 0},
        {label: 'PNG', value: 1}
      ],
      (event) => console.log(event)
    )

    this.addItem(this.exportMode)

    const buttonProps = {
      title: 'Start Framing',
      onClickCallback: this.onStartProcess
    }
    const startBtn = new Button().create(buttonProps)
    this.addItem(startBtn)

    return this
  }

  onAddImages(images) {
    this.images = images
    this.thumbnails.updateThumbnails(images.map((img) => img.path))
  }

  onStartProcess() {
    imageQueue.forEach((img, idx) => {
      const image = sharp(img.path)
      image.metadata()
        .then((meta) => {
          const desiredPadding = getPadding()
          const widerThanTall = meta.width > meta.height
          const paddingLR = widerThanTall ? desiredPadding : Math.floor((meta.height - meta.width) / 2) + desiredPadding
          const paddingTB = widerThanTall ? Math.floor((meta.width - meta.height) / 2 + desiredPadding) : desiredPadding
          return image.extend({
            top: paddingTB,
            bottom: paddingTB,
            left: paddingLR,
            right: paddingLR,
            background: {
              r: 255,
              g: 255,
              b: 255,
              alpha: 1
            }
          }).toFile(outpath + '/' + getFileNameWOFormat(img.path) + '_squared.png')
        })
        .then(info => {
          this.thumbnails.setThumbnailDone(idx)
          console.log(info)
        })
        .catch(error => {
          console.log(error)
        })
    })
  }
}
customElements.define('framer-container', Framer)
module.exports = Framer
