import * as echarts from 'echarts/lib/echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/dataZoom'
import 'echarts/lib/chart/custom'
import { useEffect, useRef, useState, createContext, useContext } from 'react'
import { useStore } from '@/store'
// import option from './option'
import { observer } from 'mobx-react-lite'
import './index.scss'

const Rasterview = () => {
  const { currentImageFits } = useStore()
  const [canvasInstance, setCanvasInstance] = useState(null)
  const domRef = useRef()

  const option = {
    grid: {
      top: '1%',
      bottom: '7%',
      left: '10%',
      right: '10%',
      containLabel: true,
    },
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
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        position: 'top',
        axisLine: { onZero: false },
        data: currentImageFits.frame.xAxis,
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
        name: '角秒(arcsec)',
        nameLocation: 'middle',
        nameGap: 30,
        type: 'category',
        position: 'bottom',
        boundaryGap: false,
        data: currentImageFits.frame.xAxis.map((value) => value.toFixed(1)),
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
        name: '角秒(arcsec)',
        nameLocation: 'middle',
        boundaryGap: false,
        nameGap: 50,
        type: 'category',
        data: currentImageFits.frame.yAxis.map((value) => value.toFixed(1)),
        axisLabel: {
          interval: 3,
        },
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
        boundaryGap: false,
        position: 'right',
        data: currentImageFits.frame.xAxis,
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
    dataZoom: [
      {
        type: 'inside',
        xAxisIndex: [0, 1],
        filterMode: 'none',
      },
      {
        type: 'inside',
        yAxisIndex: [0, 1],
        filterMode: 'none',
      },
    ],
  }

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
            var x = myChart.convertToPixel('grid', [0])[0]
            var y = myChart.convertToPixel('grid', [
              100,
              currentImageFits.frame.width - 1,
            ])[1]

            return {
              type: 'image',
              style: {
                image: currentImageFits.frame.canvasInstance,
                x: x,
                y: y,
                width:
                  myChart.convertToPixel('grid', [
                    currentImageFits.frame.width,
                  ])[0] - myChart.convertToPixel('grid', [0])[0],
                height:
                  myChart.convertToPixel('grid', [
                    currentImageFits.frame.height,
                  ])[0] - myChart.convertToPixel('grid', [0])[0],
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
  })

  return <div className="rasterchart" style={{ flex: 25 }} ref={domRef}></div>
}

export default observer(Rasterview)
