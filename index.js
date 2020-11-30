const path = require('path')

const sharp = require('sharp')

const allowedFormats = [
  'png',
  'jpg',
  'jpeg'
]

const imageQueue = []
const paddingInput = document.querySelector('#padding')

function blockInput() {
  paddingInput.disabled = true
}

function allowInput() {
  paddingInput.disabled = false
}

function getPadding() {
  return parseInt(paddingInput.value)
}

function getFileNameWOFormat(path) {
  return path.parse(path).name
}

function createThumbnail(image) {
  const thumb = document.createElement('img')
  thumb.width = 100
  thumb.height = 100
  thumb.src = image
  thumb.classList.add('thumbnail')
  return thumb
}

function generateThumbnailList() {
  const list = document.querySelector('#thumbs')
  list.children.length = 0
  imageQueue.forEach((img) => {
    list.appendChild(createThumbnail(img.path))
  })
}

function startQueue() {
  blockInput()
  imageQueue.forEach((img) => {
    const image = sharp(img.path)
    image.metadata()
      .then((meta) => {
        const desiredPadding = getPadding()
        const widerThanTall = meta.width > meta.height
        const paddingLR = widerThanTall ? desiredPadding : (meta.height - meta.width) + desiredPadding
        const paddingTB = widerThanTall ? (meta.width - meta.height) + desiredPadding : desiredPadding
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
        }).toFile(getFileNameWOFormat(img) + '_squared.png')
      })
      .then(info => {
        console.log('Done ' + info)
      })
      .catch(error => {
        console.log(error)
      })
  })

  allowInput()
}

function handleDrop(event) {
  event.stopPropagation()
  event.preventDefault()

  for (const img of event.dataTransfer.files) {
    const isAllowed = allowedFormats.includes(path.parse(img.path).ext.substring(1))
    if (isAllowed) {
      imageQueue.push(img)
    }
  }

  if (imageQueue.length > 0) {
    generateThumbnailList()
  }
}

function handleDragEnter(event) {

}

function handleDragLeave(event) {

}

document.addEventListener('drop', handleDrop)
document.addEventListener('dragenter', handleDragEnter)
document.addEventListener('dragleave', handleDragLeave)
document.addEventListener('dragover', (e) => {
  e.preventDefault()
  e.stopPropagation()
})
