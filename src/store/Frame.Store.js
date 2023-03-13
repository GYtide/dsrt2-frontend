import { makeAutoObservable } from 'mobx'
import RenderConfigStore from './RenderConfig.Store'
/**
 * 
 * 维护一个canvas对象，在 echarts 图标的坐标系中显示。
 */

class FrameStore {


  frameData = [] //原始的数据

  cursorValue = { position: { x: 0, y: 0 }, value: null, isInsideImage: false };//鼠标状态

  constructor() {
    makeAutoObservable(this)
    this.renderConfig = new RenderConfigStore() //渲染状态的实例化管理现在的渲染状态

    // 用于显示的canvas对象以及其上下文
    this.canvas = document.createElement('canvas')
    this.context = this.canvas.getContext('2d')
    this.context.scale(1, -1)
    // 使用translate()函数调整y轴位置
    this.context.translate(0, canvas.height)
  }

  get canvasInstance () {

    const normalized = this.frameData.map(value => (value - min) / (max - min))

    // 缩放至0到255之间
    const scaled = normalized.map(value => Math.round(value * 255))
    var rasterdata = []

    for (let i = 0; i < this.frameData.length; ++i) {
      rasterdata[4 * i] = scaled[i]
      rasterdata[4 * i + 1] = scaled[i]
      rasterdata[4 * i + 2] = scaled[i]
      rasterdata[4 * i + 3] = 255
    }
    var imageData = this.context.getImageData(0, 0, canvas.width, canvas.height)
    imageData.data.set(rasterdata)
    this.context.putImageData(imageData, 0, 0)

    return this.canvas

  }


}

export { FrameStore }