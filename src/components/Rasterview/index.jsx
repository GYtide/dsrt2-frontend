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
  const [canvasInstance, setCanvasInstance] = useState(null)
  const domRef = useRef()

  useEffect(() => {
    const myChart = echarts.init(domRef.current, null, {
      renderer: 'svg',
    })
    setCanvasInstance(myChart)
    myChart.setOption({
      ...option,
      series: [
        {
          type: 'custom',
          geoIndex: 0,
          renderItem: function (params, api) {
            var x = myChart.convertToPixel('grid', [2.5])[0]
            var y = myChart.convertToPixel('grid', [100, 3.5])[1]

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

  useEffect(() => {
    if (canvasInstance) {
      canvasInstance.setOption({
        ...option,
        xAxis: [
          {
            type: 'category',
            position: 'top',
            axisLine: { onZero: false },
            // axisLine: { lineStyle: { width: -0.1 } },
            axisLabel: {
              // 隐藏X轴刻度数字
              show: false,
            },
            axisTick: {
              // 隐藏X轴刻度
              show: true,
              alignWithLabel: true,
              length: -5,
            },
          },
          {
            type: 'category',
            position: 'bottom',
            axisLine: { onZero: false },
            axisTick: {
              // 隐藏X轴刻度
              show: true,
              alignWithLabel: true,
              length: -5,
            },
          },
        ],
        yAxis: [
          {
            type: 'catagroy',
            axisLine: { onZero: false },
            axisTick: {
              // 隐藏X轴刻度
              show: true,
              alignWithLabel: true,
              length: -5,
            },
          },
          {
            type: 'category',
            position: 'right',
            axisLabel: {
              // 隐藏X轴刻度数字
              show: false,
            },
            axisTick: {
              // 隐藏X轴刻度
              show: true,
              alignWithLabel: true,
              length: -5,
            },
            axisLine: { onZero: false },
          },
        ],
        series: [
          {
            type: 'custom',
            geoIndex: 0,
            renderItem: function (params, api) {
              var x = myChart.convertToPixel('grid', [-1])[0]
              var y = myChart.convertToPixel('grid', [0, 1])[1]

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
    }
  }, [currentImageFits.frame.canvasInstance])

  return <div className="rasterchart" style={{ flex: 25 }} ref={domRef}></div>
}

export default observer(Rasterview)
