import * as echarts from 'echarts/lib/echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/dataZoom'
import 'echarts/lib/chart/custom'
import { useEffect, useRef, useState, createContext, useContext } from 'react'
import { useStore } from '@/store'
import option from './option'
import { observer } from 'mobx-react-lite'
import './index.scss'

const Rasterview = () => {
  const { currentImageFits } = useStore()
  const domRef = useRef()

  useEffect(() => {
    const myChart = echarts.init(domRef.current, null, {
      renderer: 'svg',
      forceUseOldCanvas: false,
    })

    myChart.setOption({
      ...option,
      tooltip: {
        // trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999',
          },
        },
        formatter: function (params) {
          return ``
        },
        position: function (point, params, dom) {
          // 指定 tooltip 的位置，可以根据需要调整
          return [point[0] + 10, point[1] - 50]
        },
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 5,
        textStyle: {
          color: '#333',
        },
      },
      series: [
        {
          type: 'custom',
          geoIndex: 0,
          renderItem: function (params, api) {
            var x = myChart.convertToPixel('grid', [-1])[0]
            var y = myChart.convertToPixel('grid', [100, 1])[1]

            return {
              type: 'image',
              style: {
                image: currentImageFits.frame.canvasInstance,
                x: x,
                y: y,
                width:
                  myChart.convertToPixel('grid', [2])[0] -
                  myChart.convertToPixel('grid', [0])[0],
                height:
                  myChart.convertToPixel('grid', [2])[0] -
                  myChart.convertToPixel('grid', [0])[0],
              },
              z: -1,
            }
          },
          clip: true,
          silent: true,
          data: [0],
        },
      ],
    })
  }, [])

  return <div className="rasterchart" style={{ flex: 25 }} ref={domRef}></div>
}

export default observer(Rasterview)
