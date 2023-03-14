/**
 * 存储当前查看的fits文件的状态 
 */

import { makeAutoObservable } from 'mobx'
import { http } from '@/utils'
import { FrameStore } from './Frame.Store'


class CurrentImageFits {

  filename = null
  header = null
  data = []
  stokes = 'stokesi' //目前的偏振
  index = 1 // 目前的帧序号
  frame = new FrameStore() //帧的状态

  constructor() {
    makeAutoObservable(this)

  }

  openFile = async () => {
    // const res = await axios.get('http://geek.itheima.net/v1_0/channels')
    // this.channelList = res.data.data.channels
    if (this.filename) {
      const res = await http.get(
        `/data/imagefile/?type=openfile&fname=${this.filename}`
      )
      this.header = res[0]
      this.data[res[1].index] = res[1].frame
      this.index = 1
      this.frame.updataFrame(this.data[this.index][this.stokes],
        this.data[this.index][this.stokes].length,
        this.data[this.index][this.stokes][0].length,
        this.data[this.index]['sunx'],
        this.data[this.index]['suny'])
    }

  }

  addFrame = async () => {
    
  }

  /**
   * 计算属性，用于获得扩展表中的第三维度即每个偏振有几张图片
   */
  get NAXIS2 () {
    if (this.header) {
      return this.header['header1'].NAXIS2
      // console.log(this.header)
      // return 1
    }
    else {
      return 100
    }
  }

  /**
   * 计算属性，用于获得扩展表中的 TDIM4 即图片的宽高
   */

  get TDIM4 () {
    if (this.header) {
      return this.header['header1'].TDIM4
    }
    else {
      return 100
    }
  }

  get xAxis () {

  }


}


export { CurrentImageFits }