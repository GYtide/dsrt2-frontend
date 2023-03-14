/**
 * 
 * 对数据的渲染参数
 *
 */
import { makeAutoObservable } from 'mobx'

class RenderConfigStore {

  //  可选的colorMap
  COLOR_MAPS_SELECTED = [
    "gray",
    "hot",
    "jet",
  ];
  colorMapIndex = 0
  inverted = false // boolean; 是否反色

  constructor() {
    makeAutoObservable(this)
  }

  get colorMap () {
    return this.COLOR_MAPS_SELECTED[this.colorMapIndex]
  }

  // get colorMaps () {
  //   return this.COLOR_MAPS_SELECTED.map((value, index) => {
  //     return { key: index, label: value }
  //   })
  // }

  get colorMaps () {
    let key = 1
    let ListData = []
    this.COLOR_MAPS_SELECTED.forEach((obj, index) => {
      ListData.push({ key: index, label: obj })
    })
    return ListData
  }


}

export { RenderConfigStore }