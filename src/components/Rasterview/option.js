const option = {
  grid: {
    top: '2%',
    bottom: '5%',
    left: '4%',
    right: '1%',
  },
  xAxis: [
    {
      min: -100,
      max: 100,
      type: 'value',
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
      min: -100,
      max: 100,
      type: 'value',
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
      min: 0,
      max: 128,
      type: 'value',
      axisLine: { onZero: false },
      axisTick: {
        // 隐藏X轴刻度
        show: true,
        alignWithLabel: true,
        length: -5,
      },
    },
    {
      min: 0,
      max: 128,
      type: 'value',
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

export default option