/**
 * 存储当前查看的fits文件的状态
 * 
 */

import { makeAutoObservable } from 'mobx'

class CurrentFits {

  header = []

  data = []

  constructor() {
    makeAutoObservable(this)
  }

}


export {CurrentFits}