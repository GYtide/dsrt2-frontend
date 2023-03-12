import { makeAutoObservable } from 'mobx'

/**
 * 
 * 维护一个canvas对象，在 echarts 图标的坐标系中显示。
 */

class FrameStore {

  frameData = [] //原始的数据

  constructor() {
    makeAutoObservable(this)
  }


  get
}

export { FrameStore }