import sharp from 'sharp'
import path from 'path'

/**
 * ImageData
 * @typedef {Object} ImageData
 * @property {string} path
 * @property {string} name
 * @property {string} status
 */

/**
 * Default ExportOptions
 * @typedef {Object} ExportOptions
 * @property {number} desiredPadding
 * @property {string} outputPath 
 */

/**
 * Returns filename without file extension
 * @param {string} imgPath 
 */
const fileNameWithoutExtension = imgPath => path.parse(imgPath).name



/**
 * Process an amount of images to add a frame around them
 * @param {ImageData[]} images 
 * @param {ExportOptions} options
 */
const processImages = (images, options) => {
  images.forEach(image => {
    const sharpedImage = sharp(image.path)
    sharpedImage.metadata()
    .then(meta => {
      const {
        desiredPadding,
        outputPath
      } = options
      
      const widerThanTall = meta.width > meta.height
      const paddingLeftRight = widerThanTall ? desiredPadding : Math.floor((meta.height - meta.width) / 2) + desiredPadding
      const paddingTopBottom = widerThanTall ? Math.floor((meta.width - meta.height) / 2 + desiredPadding) : desiredPadding

      return sharpedImage.extend({
        top: paddingTopBottom,
        bottom: paddingTopBottom,
        left: paddingLeftRight,
        right: paddingLeftRight,
        background: {
          r: 255,
          g: 255,
          b: 255,
          alpha: 1
        }
      }).toFile(`${outputPath}/${fileNameWithoutExtension(image.path)}_squared.jpg`)
    })
  })
}

export default processImages