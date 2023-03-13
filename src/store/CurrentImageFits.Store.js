/**
 * 存储当前查看的fits文件的状态 
 */

import { makeAutoObservable } from 'mobx'
import { http } from '@/utils'

class CurrentImageFits {

  filename = null
  header = null
  data = { 'stokesi': [], 'stokesv': [] }
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
      this.data[res[1]['stokes']][res[1].index] = res[1].frame
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

  
}


export { CurrentImageFits }