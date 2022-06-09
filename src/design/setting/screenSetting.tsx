import React, { useState } from 'react'
import { Popconfirm, Select, Tabs, Form, Row, Col, Input, InputNumber, Button } from 'antd'
import html2canvas from 'html2canvas'
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
  const { width, height, screenZoom, backgroundColor, backgroundImage, coverImage } = useAppSelector(screen)
  const dispatch = useAppDispatch()
  const colorChange = (e) => {
    let color = getColor(e.rgb)
    dispatch(setScreen(['backgroundColor', color]))
  }
  const screenshot = () => {
    let shareContent = document.getElementById('screen')
    if (!shareContent) return
    let width = shareContent.offsetWidth
    let height = shareContent.offsetHeight
    let canvas = document.createElement('canvas')
    let context = canvas.getContext('2d')
    if (!context) return
    let scale = 288 / width //将canvas的容器扩大PixelRatio倍，再将画布缩放，将图像放大PixelRatio倍。
    canvas.width = width * scale
    canvas.height = height * scale
    canvas.style.width = width * scale + 'px'
    canvas.style.height = height * scale + 'px'
    context?.scale(scale, scale)

    let opts = {
      useCORS: true,
      scale: 1,
      canvas: canvas,
      width: width * scale,
      height: height * scale,
      dpi: window.devicePixelRatio,
    }
    function canvasToImage(canvas) {
      try {
        let quality = 0.92
        let dataUrl = canvas.toDataURL('image/jpeg', quality)
        // 如想确保图片压缩到自己想要的尺寸,如要求在50-150kb之间，请加以下语句，quality初始值根据情况自定
        while (dataUrl.length / 1024 > 10 && 0 < quality && quality < 1) {
          quality -= 0.01
          dataUrl = canvas.toDataURL('image/jpeg', quality)
        }
        // 防止最后一次压缩低于最低尺寸，只要quality递减合理，无需考虑
        while (dataUrl.length / 1024 < 2 && 0 < quality && quality < 1) {
          quality += 0.001
          dataUrl = canvas.toDataURL('image/jpeg', quality)
        }
        return dataUrl
      } catch (e) {
        return canvas
      }
    }
    html2canvas(shareContent, opts).then(function (canvas) {
      if (!context) return
      // context.mozImageSmoothingEnabled = false
      // context.webkitImageSmoothingEnabled = false
      // context.msImageSmoothingEnabled = false
      context.imageSmoothingEnabled = false
      let dataUrl = canvasToImage(canvas)
      dispatch(setScreen(['coverImage', dataUrl]))
      // callback(dataUrl)
    })
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
          <Form.Item label="封面图片" style={{ marginTop: '20px' }}>
            <ImageBox
              imgData={{
                url: coverImage,
                opacity: 1,
              }}
              upImage={(val) => {
                dispatch(setScreen(['coverImage', val]))
              }}
            />
            <div className={style.screenshot}>
              <Popconfirm placement="bottomLeft" title="截图将会覆盖当前封面图片，确认截图吗?" onConfirm={screenshot} okText="确认" cancelText="取消">
                <Button type="dashed">截取封面图</Button>
              </Popconfirm>
            </div>
          </Form.Item>
        </Form>
      </TabPane>
    </Tabs>
  )
}

export default ScreenSetting
