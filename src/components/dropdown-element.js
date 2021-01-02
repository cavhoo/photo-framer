/**
 * @typedef DropdownOption
 * @property {string} label
 * @property {string|number|any} value
 * */

const Bootstrap = require('bootstrap')
const BaseElement = require('../base-element')



class DropdownElement extends BaseElement {

  /**
   * @param {string} label
   * @param {DropdownOption[]} options
   * @param {(event) => void} selectCallback
   */
  create(label, options, selectCallback) {

    const form = document.createElement('form')
    const formGroup = document.createElement('div')
    formGroup.setAttribute('class', 'form-floating')


    const select = document.createElement('select')
    select.id = `dropdown-${label.replace(' ', '_')}`
    select.setAttribute('class', 'form-select')
    const lbl = document.createElement('label')
    lbl.setAttribute('for', select.id)
    lbl.innerText = label

    select.addEventListener('change', selectCallback)
    options.forEach((option) => {
      const opt = document.createElement('option')
      opt.value = option.value
      opt.innerText = option.label

      select.appendChild(opt)
    })
    formGroup.appendChild(select)
    formGroup.appendChild(lbl)
    form.appendChild(formGroup)
    this.addItem(form)
    return this
  }
}

customElements.define('dropdown-element', DropdownElement)

module.exports = DropdownElement
