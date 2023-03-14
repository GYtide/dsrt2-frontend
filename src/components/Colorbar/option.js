import * as echarts from 'echarts/lib/echarts'

const option = {
  animation: false,
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    top: '2%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      data: ['Hot'],
      axisTick: {
        alignWithLabel: true,
      },
    },
  ],
  yAxis: [
    {
      data: [30, 49, 26, 60, 26], //数据
      type: 'value',
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
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#06B5D7' }, //柱图渐变色
            { offset: 0.5, color: '#44C0C1' }, //柱图渐变色
            { offset: 1, color: '#71C8B1' }, //柱图渐变色
          ]),
        },
        emphasis: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#71C8B1' }, //柱图高亮渐变色
            { offset: 0.7, color: '#44C0C1' }, //柱图高亮渐变色
            { offset: 1, color: '#06B5D7' }, //柱图高亮渐变色
          ]),
        },
      },
    },
  ],
}

export default option