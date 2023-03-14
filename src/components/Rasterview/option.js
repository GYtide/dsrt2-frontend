const option = {
  grid: {
    top: '1%',
    bottom: '4.1%',
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
      position: 'top',
      axisLine: { onZero: false },
      data: [-2, -1, 0, 1, 2, 3],
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
      data: [-2, -1, 0, 1, 2, 3],
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
      type: 'category',
      data: [-2, -1, 0, 1, 2, 3],
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
      data: [-2, -1, 0, 1, 2, 3],
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