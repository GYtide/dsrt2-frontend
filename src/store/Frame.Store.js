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
  }

  

}

export { FrameStore }