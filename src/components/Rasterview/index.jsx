import * as echarts from 'echarts/lib/echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/dataZoom'
import { useEffect, useRef, useState, createContext, useContext } from 'react'

import option from './option'
import './index.scss'

const Rasterview = () => {
  const domRef = useRef()

  useEffect(() => {
    const myChart = echarts.init(domRef.current, null, {
      renderer: 'svg',
    })
    myChart.setOption(option)
    console.log(myChart)
  }, [])

  return <div className="rastercharts" ref={domRef}></div>
}

export default Rasterview
