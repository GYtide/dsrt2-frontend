// let colormap = require('colormap')

import colormap from 'colormap'

let colors = colormap({
  colormap: 'hot',
  nshades: 255,
  format: 'rgb',
  alpha: 1
})

console.log(colors)