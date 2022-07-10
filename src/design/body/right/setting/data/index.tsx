import React, { useState, useEffect, useCallback } from 'react'
import { Select, Modal, Button, Form } from 'antd'
import update from 'immutability-helper'
import { DataSheetGrid, textColumn, keyColumn } from 'react-datasheet-grid'
import eventBus from '@utils/eventBus'
import { WidgetObj } from '@_types/Plugin'
import ContextMenu from './components/contextMenu'

import 'react-datasheet-grid/dist/style.css'
import './index.less'

const { Option } = Select

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
}

const Data = (widgetObj: WidgetObj) => {
  const {
    widget: { dataConfig },
  } = widgetObj
  const [visible, setVisible] = useState(false)
  const [rowData, setRowData] = useState<any[]>()
  const [columnDefs, setColumnDefs] = useState<any[]>()
  const [ruler, setRuler] = useState<any>()
  const [rulerOption, setRulerOption] = useState<any[]>()

  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }

  const okModal = useCallback(() => {
    setVisible(false)
    eventBus.emit('changeSettingBase', 'dataConfig.staticData', rowData)
  }, [rowData])

  const chengeRuler = (val: string | string[], key: string) => {
    setRuler((ruler) => {
      return {
        ...ruler,
        [key]: val,
      }
    })
  }

  useEffect(() => {
    const data = dataConfig?.staticData
    const ruler = dataConfig?.ruler
    if (data) {
      let keys = Object.keys(data)
      if (Array.isArray(data)) {
        keys = Object.keys(data[0])
      }
      // const keys = Object.keys(data[0])
      const column = keys.map((item) => {
        return {
          ...keyColumn(item, textColumn),
          title: item,
        }
      })
      setRulerOption(keys)
      setRowData(data)
      setColumnDefs(column)
    }
    if (ruler) {
      setRuler(ruler)
    }
  }, [dataConfig])

  useEffect(() => {
    if (JSON.stringify(ruler) !== JSON.stringify(dataConfig?.ruler)) {
      eventBus.emit('changeSettingBase', 'dataConfig.ruler', ruler)
    }
  }, [ruler])

  const Ruler = () => {
    if (ruler && rulerOption) {
      return (
        <>
          {Object.keys(ruler).map((rulerItem, rIndex) => {
            return (
              <Form.Item key={rIndex} label={rulerItem}>
                <Select
                  mode="tags"
                  defaultValue={ruler[rulerItem]}
                  style={{ width: '100%' }}
                  onChange={(value: string | string[]) => {
                    chengeRuler(value, rulerItem)
                  }}
                >
                  {rulerOption.map((oItem, oIndex) => (
                    <Option key={oIndex} value={oItem}>
                      {oItem}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            )
          })}
        </>
      )
    }
    return <></>
  }

  return (
    <>
      <Form {...layout}>
        <Form.Item label="数据类型" style={{ marginBottom: 0 }}>
          <Form.Item style={{ display: 'inline-block', width: 'calc(100% - 60px)', marginRight: '10px' }}>
            <Select defaultValue="static" style={{ width: '100%' }} onChange={handleChange}>
              <Option value="static">静态数据</Option>
              {/* <Option value="api">API接入</Option> */}
            </Select>
          </Form.Item>
          <Form.Item style={{ display: 'inline-block' }}>
            <Button type="primary" style={{ background: 'var(--lightest-navy)', border: '1px solid var(--dark-slate)', lineHeight: '20px' }} onClick={() => setVisible(true)}>
              <i className="icon iconfont icon-bianji"></i>
            </Button>
          </Form.Item>
        </Form.Item>
        <Ruler />
      </Form>
      <Modal
        title="静态数据"
        maskClosable={false}
        closable={false}
        keyboard={false}
        visible={visible}
        centered
        width={760}
        footer={
          <div style={{ padding: '10px 0', textAlign: 'center' }}>
            <Button type="primary" onClick={okModal}>
              完成
            </Button>
          </div>
        }
      >
        <div className="sheetGrid" style={{ width: '100%', height: '446px' }}>
          <DataSheetGrid value={rowData} onChange={setRowData} columns={columnDefs} contextMenuComponent={ContextMenu} />
        </div>
      </Modal>
    </>
  )
}

export default Data
