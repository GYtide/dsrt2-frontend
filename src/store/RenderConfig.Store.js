/**
 * 
 * 对数据的渲染参数
 *
 */

class RenderConfigStore {

  //  可选的colorMap
  COLOR_MAPS_SELECTED = [
    "gray",
    "hot",
    "jet",
  ];
  colorMapIndex = 0
  inverted = false // boolean; 是否反色

}

export { RenderConfigStore }