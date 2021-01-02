const path = require('path')

const sharp = require('sharp')

const Framer = require('./src/framer')

const allowedFormats = [
  'png',
  'jpg',
  'jpeg'
]

const framerMain = new Framer()
const imageQueue = []

// Global Event Listeners
function addDocumentListeners(dropHandler) {
  document.addEventListener('drop', dropHandler)
  document.addEventListener('dragenter', handleDragEnter)
  document.addEventListener('dragleave', handleDragLeave)
  document.addEventListener('dragover', (e) => {
    e.preventDefault()
    e.stopPropagation()
  })

  //document.querySelector('#start').addEventListener('click', startQueue)
}
const handleDropImages =(images) => (event) => {
  images.length = 0
  event.stopPropagation()
  event.preventDefault()

  for (const img of event.dataTransfer.files) {
    const isAllowed = allowedFormats.includes(path.parse(img.path).ext.substring(1))
    if (isAllowed) {
      if (!fileAlreadyAdded(images, img.path)) {
        images.push(img)
      }
    }
  }
  framerMain.onAddImages(images)
}


// Main function
function main() {
  const images = []
  framerMain.create()

  addDocumentListeners(handleDropImages(images))
  const content = document.querySelector('#content')
  content.appendChild(framerMain)
}

main()

function getPaddingField() {
  return document.querySelector('#padding')
}

function blockInput() {
  getPaddingField().disabled = true
}

function allowInput() {
  getPaddingField().disabled = false
}

function getPadding() {
  return parseInt(getPaddingField().value, 10)
}

function getFileNameWOFormat(imgPath) {
  return path.parse(imgPath).name
}

function fileAlreadyAdded(images, path) {
  return images.some(img => img.path === path)
}

function createThumbnail(id, image) {
  const thumb = document.createElement('div')
  const imgSource = document.createElement('img')
  imgSource.src = image
  imgSource.width = 100
  imgSource.height = 100
  thumb.append(imgSource)
  thumb.id = id
  thumb.classList.add('thumbnail', 'waiting')
  return thumb
}

function generateThumbnailList() {
  const list = document.querySelector('#thumbs')
  list.children.length = 0
  imageQueue.forEach((img, idx) => {
    list.appendChild(createThumbnail(`thumb-${idx}`, img.path))
  })
}

function startQueue() {

  const outpath = document.querySelector('#output').value

  blockInput()
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
        const imageThumb = document.querySelector(`#thumb-${idx}`)
        imageThumb.classList.remove('waiting')
        imageThumb.classList.add('done')
        console.log('Done ', info)
      })
      .catch(error => {
        console.log(error)
      })
  })

  imageQueue.length = 0

  allowInput()
}

function handleDrop(event) {}


function handleDragEnter(event) {

}

function handleDragLeave(event) {

}
