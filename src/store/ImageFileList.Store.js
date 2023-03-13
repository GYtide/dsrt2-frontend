/**
 * 成像文件的列表状态组件
 */
import { makeAutoObservable } from 'mobx'
import { http } from '@/utils'

class ImageFileList {
  fileList = []
  constructor() {
    makeAutoObservable(this)
  }

  setChannelList = async () => {
    // const res = await axios.get('http://geek.itheima.net/v1_0/channels')
    // this.channelList = res.data.data.channels

    const res = await http.get(
      `/data/filelist/`
    )
    this.fileList = res
  }

  //调整格式的计算属性

  get fileListdata () {
    let key = 1
    let fileListData = []
    this.fileList.forEach((obj, index) => {
      fileListData.push({ key: index, name: obj.name, tags: [obj.time_beg, obj.time_end] })
    })
    return fileListData
  }

}

export { ImageFileList }