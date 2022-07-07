import { useState } from 'react'
import { Collapse, Form, Input, InputNumber, Switch, Select } from 'antd'
import update from 'immutability-helper'
import eventBus from '@utils/eventBus'
import InputNumberUnit from '@components/form/inputNumberUnit'
import EchartColor from '@components/echartColor'
import { fontFamilyOption, borderTypeOption, symboltOption } from '@/utils/formData'
import { getObjByPath } from '@utils/common'
import { DataItem as DataItemType } from '../_types'

const { Panel } = Collapse
const DataList = (props: DataItemType[]) => {
  const layout1 = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  }
  const [dataList, setDataList] = useState<DataItemType[]>(props)

  const change = (key, value) => {
    const obj = getObjByPath(key, value)
    if (obj) {
      setDataList(update(dataList, obj))
      const path = 'dataItem.' + key
      eventBus.emit('changeSettingConfig', path, value)
    }
  }

  return (
    <>
      <Form {...layout1} initialValues={{ layout: 'Inline' }} labelAlign="right">
        <Collapse
          bordered={false}
          defaultActiveKey={['1']}
          expandIcon={({ isActive }) => (
            <span>
              <i className="icon iconfont icon-shouqijiantouxiao " style={{ transform: `rotate(${isActive ? 180 : 90}deg)` }} />
            </span>
          )}
          className="collapse-1-1"
        >
          {Object.values(dataList).map((item, index) => {
            return (
              <Panel header={item.name} key={index + 1} className="panel">
                <Form.Item label="标记图形">
                  <Select value={item.symbol} onChange={(value) => change(`${index}.symbol`, value)}>
                    {symboltOption}
                  </Select>
                </Form.Item>
                <Form.Item label="图形尺寸" style={{ marginBottom: 0 }}>
                  <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 10px)', marginRight: '6px' }}>
                    <InputNumber addonBefore="宽" value={item.symbolSize[0]} placeholder="图形宽度" onChange={(value) => change(`${index}.symbolSize.0`, value)} />
                  </Form.Item>
                  <span style={{ display: 'inline-block', width: '8px', lineHeight: '32px', textAlign: 'center' }}>*</span>
                  <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 10px)', marginLeft: '6px' }}>
                    <InputNumber addonBefore="高" value={item.symbolSize[1]} placeholder="图形高度" onChange={(value) => change(`${index}.symbolSize.1`, value)} />
                  </Form.Item>
                </Form.Item>
                <Form.Item label="图形颜色">
                  <EchartColor color={item.itemStyle.color} onChange={(value) => change(`${index}.itemStyle.color`, value)} />
                </Form.Item>
                <Form.Item label="区域颜色">
                  <EchartColor color={item.areaColor} onChange={(value) => change(`${index}.areaColor`, value)} />
                </Form.Item>
                <Form.Item label="线颜色">
                  <EchartColor color={item.lineStyle.color} onChange={(value) => change(`${index}.lineStyle.color`, value)} />
                </Form.Item>
                <Form.Item label="轴线宽度">
                  <InputNumber value={item.lineStyle.width} onChange={(value) => change(`${index}.lineStyle.width`, value)} />
                </Form.Item>
                <Form.Item label="边框类型">
                  <Select value={item.lineStyle.type} onChange={(value) => change(`${index}.lineStyle.type`, value)}>
                    {borderTypeOption}
                  </Select>
                </Form.Item>
              </Panel>
            )
          })}
        </Collapse>
      </Form>
    </>
  )
}
export default DataList
