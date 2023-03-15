import * as echarts from 'echarts/lib/echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/grid'
import 'echarts/lib/chart/bar'
import { useEffect, useRef, useState } from 'react'

/**
 * colorbar 使用Echarts实现：一个很窄的图标，colorbar的对应数值就是Y轴，
 * 没有X轴（X轴就是一个category），在数值区域显示一个渐变效果的条.
 */

const ColorBar = () => {
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
        min: 10,
        max: 70,
        axisTick: {
          alignWithLabel: true,
        },
        position: 'right',
        axisLabel: {
          rotate: 90,
          formatter: function (value, index) {
            // value = parseFloat(value)
            // //保留小数位数
            // return value.toFixed(1)
            return value.toExponential(1)
          },
        },
      },
    ],
    series: [
      {
        type: 'bar',
        barWidth: 70,
        data: [70],
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#000000' }, //柱图渐变色
              { offset: 0.5, color: '#e60000' }, //柱图渐变色
              { offset: 1, color: '#ffffff' }, //柱图渐变色
            ]),
          },
          emphasis: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#000000' }, //柱图高亮渐变色
              { offset: 0.7, color: '#e60000' }, //柱图高亮渐变色
              { offset: 1, color: '#ffffff' }, //柱图高亮渐变色
            ]),
          },
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
    window.onresize = function () {
      myChart.resize()
    }
  }
  useEffect(() => {
    initChart()
  }, [option])

  return <div ref={domRef} style={{ flex: 1 }}></div>
}

export default ColorBar
