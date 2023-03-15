import colormap from 'colormap'
/**
 * [
 *        { offset: 0, color: '#000000' }, 
 *       { offset: 0.7, color: '#e60000' }, 
 *       { offset: 1, color: '#ffffff' }, 
 *     ]
 */

let colors = colormap({
  colormap: 'hot',
  nshades: 256,
  format: 'hex',
  alpha: 255
})

let a = colors.map((value, index) => {
  return { offset: index / 255, color: value }
})

a.map((value,index)=>{
  console.log(index,value)
})
