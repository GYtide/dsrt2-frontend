// let colormap = require('colormap')

import colormap from 'colormap'

let colors = colormap({
  colormap: 'greys',
  nshades: 255,
  format: 'rgb',
  alpha: 255
})

console.log(colors)