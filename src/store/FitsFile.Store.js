/**
 * 存储当前查看的fits文件的状态 
 */

import { makeAutoObservable } from 'mobx'
import { http } from '@/utils'

class CurrentFits {

  constructor() {
    makeAutoObservable(this)
    this.filename = ''
    this.header = []
    this.data = []
  }

  openFile = async () => {
    // const res = await axios.get('http://geek.itheima.net/v1_0/channels')
    // this.channelList = res.data.data.channels
    if (this.filename) {
      const res = await http.get(
        `/data/imagefile/?type=openfile&fname=${this.filename}`
      )
      console.log(res[0])
    }

  }


}


export { CurrentFits }