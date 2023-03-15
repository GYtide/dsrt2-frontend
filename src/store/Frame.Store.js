import { makeAutoObservable } from 'mobx'
import { RenderConfigStore } from './RenderConfig.Store'
import colormap from 'colormap'
/**
 * 
 * 维护一个canvas对象，在 echarts 图标的坐标系中显示。
 */

class FrameStore {

  frameData = [[255]] //原始的数据
  width = 1
  height = 1
  xAxis = [0, 1]
  yAxis = [0, 1]
  min = 255
  max = 0
  COLOR_MAPS_SELECTED = [
    "greys",
    "hot",
    "jet",
  ];
  colorMapIndex = 0
  inverted = false // boolean; 是否反色
  cursorValue = { position: { x: 0, y: 0 }, value: null, isInsideImage: false };//鼠标状态
  canvas = document.createElement('canvas')
  context = this.canvas.getContext('2d')

  constructor() {
    makeAutoObservable(this)
    // 用于显示的canvas对象以及其上下文
    this.colorMapIndex = this.colorMapIndex
    this.context.scale(1, -1)
    // 使用translate()函数调整y轴位置
    this.context.imageSmoothingEnabled = false
    this.context.translate(0, this.canvas.height)

  }

  /**
   * colorMapbar 返回用于渲染 colorbar的彩条
   * [
   *        { offset: 0, color: '#000000' }, 
   *       { offset: 0.7, color: '#e60000' }, 
   *       { offset: 1, color: '#ffffff' }, 
   *     ]
   */
  get colorMapbar () {
    var colorindex = this.colorMapIndex
    var colorMap = this.COLOR_MAPS_SELECTED[colorindex]
    let colors = colormap({
      colormap: colorMap,
      nshades: 256,
      format: 'hex',
      alpha: 255
    })

    return colors.map((value, index) => {
      return { offset: index / 255, color: value }
    })

  }


  get canvasInstance () {
    this.canvas.width = this.width
    this.canvas.height = this.height

    var crxData = this.frameData.flat()

    var min = this.min
    var max = this.max
    var colorindex = this.colorMapIndex

    var colorMap = this.COLOR_MAPS_SELECTED[colorindex]

    const normalized = crxData.map(value => (value - min) / (max - min))

    // // 缩放至0到255之间
    const scaled = normalized.map(value => Math.round(value * 255))

    // 添加色标

    let colors = colormap({
      colormap: colorMap,
      nshades: 256,
      format: 'rgb',
      alpha: 255
    })

    var rasterdata = []
    for (let i = 0; i < crxData.length; ++i) {
      rasterdata[i] = colors[scaled[i]]
    }

    rasterdata = rasterdata.flat()
    for (let i = 3; i < rasterdata.length; i += 4) {
      rasterdata[i] = 255
    }


    var imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height)
    imageData.data.set(rasterdata)
    this.context.imageSmoothingEnabled = false
    this.context.putImageData(imageData, 0, 0)

    return this.canvas

  }

  updateColorMap = (colormapkey) => {
    this.colorMapIndex = colormapkey
    this.canvasInstance
  }


  updateFrame = (frame, width, height, xAxis, yAxis) => {
    this.frameData = frame
    this.height = height
    this.width = width
    this.xAxis = xAxis
    this.yAxis = yAxis
    this.min = Math.min(...frame.flat())
    this.max = Math.max(...frame.flat())
  }

  get colorMap () {
    return this.COLOR_MAPS_SELECTED[this.colorMapIndex]
  }


}

export { FrameStore }