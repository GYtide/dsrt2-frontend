import * as echarts from 'echarts/lib/echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/grid'
import 'echarts/lib/chart/bar'
import { useEffect, useRef, useState } from 'react'
import { useStore } from '@/store'
import { observer } from 'mobx-react-lite'
/**
 * colorbar 使用Echarts实现：一个很窄的图标，colorbar的对应数值就是Y轴，
 * 没有X轴（X轴就是一个category），在数值区域显示一个渐变效果的条.
 */

const ColorBar = ({ currentFits }) => {
  const [canvasInstance, setCanvasInstance] = useState(null)
  const option = {
    animation: false,
    grid: {
      left: '1%',
      right: '4%',
      bottom: '10%',
      top: '2%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: [],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        min: currentFits.frame.min,
        max: currentFits.frame.max,
        axisTick: {
          alignWithLabel: true,
        },
        position: 'right',
        axisLabel: {
          rotate: 90,
          formatter: function (value, index) {
            return value.toExponential(1)
          },
        },
      },
    ],
    series: [
      {
        type: 'bar',
        barWidth: 70,
        data: [currentFits.frame.max, currentFits.frame.max],
        itemStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            1,
            0,
            0,
            currentFits.frame.colorMapbar
          ),
        },
      },
    ],
  }
  const domRef = useRef()
  const initChart = () => {
    const myChart = echarts.init(domRef.current, null, {
      renderer: 'svg',
    }) //初始化echarts

    //设置options
    myChart.setOption(option)
    setCanvasInstance(myChart)
    window.onresize = function () {
      myChart.resize()
    }
  }
  useEffect(() => {
    initChart()
  }, [])

  useEffect(() => {
    if (canvasInstance) {
      canvasInstance.setOption(option)
    }
  }, [option])

  return <div ref={domRef} style={{ flex: 1 }}></div>
}

export default observer(ColorBar)
