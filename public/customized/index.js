//组件定制化

function customPlug(props) {
  const { React, ReactDOM, echarts, ref, config } = props

  if (ref.current) {
    return editWidget(props)
  }

  return config
}

function editWidget(props) {
  const { React, ReactDOM, echarts, ref, config } = props

  function setEchartOption() {
    if (ref.current) {
      ref.current.style.width = '100%'
      ref.current.style.height = '100%'
      var echart = echarts.init(ref.current)
      echart.setOption({
        title: {
          text: 'ECharts 入门示例',
        },
        tooltip: {},
        legend: {
          data: ['销量'],
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      })
    }
  }

  function appendDOm() {
    // ref.current.style.width = '100%'
    // ref.current.style.height = '100%'
    // const e = React.createElement
    // const root = ReactDOM.createRoot(ref.current)
    // root.render(e('div', null, 'hello world'))

    const dom = ref.current
    //错误代码示例 异常处理
    $(dom).cssra({
      width: '100%',
      height: '100%',
      background: 'rgb(255, 255, 255,0.5)',
    })
    const newDom = $(`<div >hello world</div>`)
    newDom.css({
      width: '100px',
      height: '100px',
      background: 'rgb(255, 255, 255,0.5)',
      position: 'absolute',
      top: '0px',
      left: '220px',
    })
    $(dom).append(newDom)
  }

  function changeOption() {
    const configCopy = JSON.parse(JSON.stringify(config))
    configCopy.widget.config.grid.top = '30%'
    return configCopy
  }

  if (config.widget.name === '基本柱图') {
    return changeOption()
  } else if (config.widget.name === '彩色柱图') {
    return appendDOm()
  }
  return config
}

;(function init() {
  const newDom = $(`<div >hello world</div>`)
  newDom.css({
    width: '100px',
    height: '100px',
    background: 'rgb(255, 255, 255,0.5)',
    position: 'absolute',
    top: '0px',
    left: '220px',
  })
  $('#preview').append(newDom)
})()
