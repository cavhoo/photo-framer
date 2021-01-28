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
 * @property {string} filePattern
 * @property {string} format
 */

/**
 * Returns filename without file extension
 * @param {string} imgPath 
 */
const fileNameWithoutExtension = imgPath => path.parse(imgPath).name

/**
 * @oaram {[key: string]: string} values values to be inserted into new file name
 * @param {string} pattern Pattern to be used when saving a file
 */
const makeFileName = (values, pattern) => {
  let filename = pattern;

  Object.keys(values).forEach((key) => {
    filename.replace(`<${key}>`, values[key]);
  })

  return filename;
}

/**
 * Process an amount of images to add a frame around them
 * @param {ImageData[]} images 
 * @param {ExportOptions} options
 */
export const processImages = (images, options) => {
  images.forEach(image => {
    const sharpedImage = sharp(image.path)
    sharpedImage.metadata()
    .then(meta => {
      const {
        desiredPadding,
        outputPath,
        filePattern,
        format
      } = options
      
      const widerThanTall = meta.width > meta.height
      const paddingLeftRight = widerThanTall ? desiredPadding : Math.floor((meta.height - meta.width) / 2) + desiredPadding
      const paddingTopBottom = widerThanTall ? Math.floor((meta.width - meta.height) / 2 + desiredPadding) : desiredPadding

      const exportOptions = {
        name: fileNameWithoutExtension(image.path),
        format
      }

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
      }).toFile(`${outputPath}/${makeFileName(exportOptions, filePattern)}_squared.jpg`)
    })
  })
}
