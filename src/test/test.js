// let colormap = require('colormap')

import colormap from 'colormap'

let colors = colormap({
  colormap: 'hot',
  nshades: 4,
  format: 'hex',
  alpha: 1
})

console.log(colors)