import React, { useState } from 'react'
import { Menu, Select, Tabs, Form, Row, Col, Input, InputNumber } from 'antd'
import Color, { getColor } from '@components/color'
import { ImageBox } from '@components/upload/image'
import { useAppSelector, useAppDispatch } from '@storeApp/hooks'
import { screen, setScreen } from '@features/screenSlice'
import style from './screenSetting.module.less'
const { TabPane } = Tabs
const { Option } = Select
const margin = { marginBottom: '8px' }
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
}
const ScreenSetting = () => {
  const { width, height, screenZoom, backgroundColor, backgroundImage } = useAppSelector(screen)
  const dispatch = useAppDispatch()
  const colorChange = (e) => {
    let color = getColor(e.rgb)
    dispatch(setScreen(['backgroundColor', color]))
  }
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="大屏" key="1">
        <Form {...layout}>
          <Form.Item label="名称">
            <Input
              placeholder="大屏名称"
              onChange={(e) => {
                let name = e.target.value
                dispatch(setScreen(['name', name]))
              }}
            />
          </Form.Item>
          <Form.Item label="尺寸" style={{ marginBottom: 0 }}>
            <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 10px)', marginRight: '6px' }}>
              <InputNumber
                addonBefore="W"
                value={width}
                placeholder="宽度"
                onChange={(value) => {
                  dispatch(setScreen(['width', value]))
                }}
              />
            </Form.Item>
            <span style={{ display: 'inline-block', width: '8px', lineHeight: '32px', textAlign: 'center' }}>*</span>
            <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 10px)', marginLeft: '6px' }}>
              <InputNumber
                addonBefore="H"
                value={height}
                placeholder="高度"
                onChange={(value) => {
                  dispatch(setScreen(['height', value]))
                }}
              />
            </Form.Item>
          </Form.Item>
          <Form.Item label="缩放方式">
            <Select defaultValue={screenZoom}>
              <Option value="none">不缩放</Option>
              <Option value="scaling">全屏等比缩放(大屏/pc)</Option>
              <Option value="Hscaling">按高度适配(横向滚动)</Option>
              <Option value="Wscaling">按宽度适配(纵向滚动)</Option>
              <Option value="phone">移动端(建议宽度750)</Option>
            </Select>
          </Form.Item>
          <Form.Item label="背景色">
            <Color onChange={colorChange} color={backgroundColor} />
          </Form.Item>
          <Form.Item label="背景图片">
            <ImageBox
              imgData={{
                url: backgroundImage,
                opacity: 1,
              }}
              upImage={(val) => {
                dispatch(setScreen(['backgroundImage', val]))
              }}
            />
          </Form.Item>
        </Form>
      </TabPane>
    </Tabs>
  )
}

export default ScreenSetting
