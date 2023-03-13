/**
 * 存储当前查看的fits文件的状态 
 */

import { makeAutoObservable } from 'mobx'
import { http } from '@/utils'

class CurrentImageFits {

  constructor() {
    makeAutoObservable(this)
    this.filename = ''
    this.header = []
    /**
     * 
     */
    this.data = { 'stokesi': [], 'stokesv': [] }
  }

  openFile = async () => {
    // const res = await axios.get('http://geek.itheima.net/v1_0/channels')
    // this.channelList = res.data.data.channels
    if (this.filename) {
      const res = await http.get(
        `/data/imagefile/?type=openfile&fname=${this.filename}`
      )
      console.log(JSON.stringify(res[0]))
      this.header = res[0]
      this.data[res[1]['stokes']][res[1].index] = res[1].frame
    }

  }

  addFrame = async () => {

  }


}


export { CurrentImageFits }