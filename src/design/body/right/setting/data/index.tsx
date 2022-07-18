import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Collapse, Select, Modal, Button, Form, Input } from 'antd'
import jspreadsheet from 'jspreadsheet-ce'
import eventBus from '@utils/eventBus'
import Code from './components/code'
import { postFetch } from '@utils/request'
import { Data as DataType } from '@_types/Plugin'

import 'jsuites/dist/jsuites.css'
import 'jspreadsheet-ce/dist/jspreadsheet.css'
import 'jspreadsheet-ce/dist/jspreadsheet.theme.css'
import './index.less'

const { Panel } = Collapse
const { Option } = Select

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
}
const options = {
  // minDimensions: [10, 10],
  columnSorting: false,
  allowExport: false,
  about: false,
  // defaultColWidth: 100,
  text: {
    insertANewColumnBefore: '在左侧插入列',
    insertANewColumnAfter: '在右侧插入列',
    deleteSelectedColumns: '删除选中列',
    renameThisColumn: '重命名列',
    insertANewRowBefore: '向上插入行',
    insertANewRowAfter: '向下插入行',
    deleteSelectedRows: '删除选中行',
    copy: '复制',
    paste: '粘贴',
    saveAs: '下载',
    about: '关于',
  },
}

const Data = (props: DataType) => {
  const [dataConfig, setDataConfig] = useState(props)
  const [active, setActive] = useState<string | string[]>([''])
  const [visible, setVisible] = useState(false)
  const [rowData, setRowData] = useState<any[]>()
  const [code, setCode] = useState('')
  const [fetchData, setFetchData] = useState('')
  const [columnDefs, setColumnDefs] = useState<any[]>()
  const [ruler, setRuler] = useState<any>()
  const [rulerOption, setRulerOption] = useState<any[]>()
  const jRef: any = useRef(null)
  const codeRef: any = useRef(null)
  const fetchDataCodeRef: any = useRef(null)

  const okModal = useCallback(() => {
    setVisible(false)
    if (dataConfig?.displayForm === 'table') {
      if (rowData && columnDefs) {
        let row: any = []
        for (let i = 0; i < rowData.length; i++) {
          const itemI = rowData[i]
          let b = false
          for (let j = 0; j < itemI.length; j++) {
            const itemJ = itemI[j]
            if (j === 0) {
              if (itemJ != '') {
                row[i] = []
              } else {
                b = true
                break
              }
            }
            if (itemJ === '') {
              break
            }
            row[i].push(itemJ)
          }
          if (b) {
            break
          }
        }

        let column = columnDefs.filter((item, index, array) => item.title !== '')
        // console.log(row)
        // console.log(column)
        const data = row.map((r) => {
          let obj = {}
          column.forEach((c, i) => {
            obj[c['title']] = r[i]
          })
          return obj
        })
        // console.log(data)
        eventBus.emit('changeSettingBase', 'dataConfig.widgetData', data)
      }
      jRef.current.jexcel.destroy()
      jRef.current.jspreadsheet = null
    }
    if (dataConfig?.displayForm === 'codeEdit') {
      const value = codeRef.current.getValue()
      try {
        const data = JSON.parse(value)
        setCode(data)
        eventBus.emit('changeSettingBase', 'dataConfig.widgetData', data)
      } catch (error) {
        console.log(error)
      }
    }
  }, [rowData, columnDefs, code])

  const okModalAPi = useCallback(() => {
    setVisible(false)
    const value = fetchDataCodeRef.current.getValue()
    try {
      const { data } = JSON.parse(value)
      eventBus.emit('changeSettingBase', 'dataConfig.widgetData', data)
    } catch (error) {
      console.log(error)
    }
  }, [fetchData])

  const fetch = useCallback(async () => {
    const data = await postFetch('/op/fetch', {
      url: dataConfig.apiUrl,
    })
    setFetchData(data)
  }, [dataConfig.apiUrl])

  const chengeRuler = (val: string | string[], key: string) => {
    setRuler((ruler) => {
      return {
        ...ruler,
        [key]: val,
      }
    })
  }

  useEffect(() => {
    setDataConfig(props)
  }, [props])

  useEffect(() => {
    const data = dataConfig?.widgetData
    const ruler = dataConfig?.ruler
    if (data) {
      let keys = Object.keys(data)
      if (Array.isArray(data)) {
        keys = Object.keys(data[0])
      }
      if (dataConfig?.type === 'static') {
        if (dataConfig?.displayForm === 'table') {
          const column = keys.map((item) => {
            return {
              type: 'text',
              title: item,
            }
          })
          const rows = data.map((dataI) => {
            return keys.map((keyI) => dataI[keyI])
          })
          setRowData(rows)
          setColumnDefs(column)
        } else if (dataConfig?.displayForm === 'codeEdit') {
          setCode(data)
        }
      } else if (dataConfig?.type === 'api') {
        setCode(data)
      }
      setRulerOption(keys)
    }
    if (ruler) {
      setRuler(ruler)
    }
  }, [dataConfig?.widgetData, dataConfig?.ruler])

  useEffect(() => {
    if (JSON.stringify(ruler) !== JSON.stringify(dataConfig?.ruler)) {
      eventBus.emit('changeSettingBase', 'dataConfig.ruler', ruler)
    }
  }, [ruler])

  useEffect(() => {
    if (visible && dataConfig.type === 'static' && dataConfig?.displayForm === 'table' && !jRef.current?.jspreadsheet) {
      jspreadsheet(jRef.current, {
        ...options,
        data: rowData,
        columns: columnDefs,
      })
    }
  }, [visible])

  const Ruler = () => {
    if (ruler && rulerOption) {
      return (
        <>
          {Object.keys(ruler).map((rulerItem, rIndex) => {
            return (
              <Form.Item key={rIndex} label={rulerItem}>
                {Array.isArray(ruler[rulerItem]) ? (
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
                ) : (
                  <Select
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
                )}
              </Form.Item>
            )
          })}
        </>
      )
    }
    return <></>
  }

  const StaticModalContent = () => {
    if (dataConfig?.displayForm === 'table') {
      return (
        <div className="jspreadsheet">
          <div ref={jRef} />
        </div>
      )
    } else if (dataConfig?.displayForm === 'codeEdit') {
      return <Code codeRef={codeRef} code={JSON.stringify(code, null, 2)} />
    }
    return <></>
  }

  return (
    <Collapse
      bordered={false}
      activeKey={active}
      expandIcon={({ isActive }) => (
        <span>
          <i className="icon iconfont icon-shouqijiantouxiao " style={{ transform: `rotate(${isActive ? 180 : 90}deg)` }} />
        </span>
      )}
      onChange={(key) => setActive(key)}
      className="collapse-1"
    >
      <Panel header="数据配置" key="1" className="panel">
        <Form {...layout}>
          <Form.Item label="数据类型" style={{ marginBottom: 0 }}>
            <Form.Item style={{ display: 'inline-block', width: 'calc(100% - 60px)', marginRight: '10px' }}>
              <Select
                value={dataConfig?.type}
                style={{ width: '100%' }}
                onChange={(value) => {
                  setDataConfig((config) => {
                    return {
                      ...config,
                      type: value,
                    }
                  })
                  eventBus.emit('changeSettingBase', 'dataConfig.type', value)
                }}
              >
                <Option value="static">静态数据</Option>
                <Option value="api">API接入</Option>
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
          visible={visible && dataConfig.type === 'static'}
          centered
          width={760}
          footer={
            <div style={{ padding: '10px 0', textAlign: 'center' }}>
              <Button onClick={() => setVisible(false)}>取消</Button>
              <Button type="primary" onClick={okModal}>
                完成
              </Button>
            </div>
          }
        >
          <div style={{ width: '100%', height: '446px' }}>
            <StaticModalContent />
          </div>
          {/* <div className="jspreadsheet" style={{ width: '100%', height: '446px', display: dataConfig?.displayForm === 'table' ? 'block' : 'none' }}>
            <div ref={jRef} />
          </div>
          <div style={{ width: '100%', height: '446px', display: dataConfig?.displayForm === 'codeEdit' ? 'block' : 'none' }}>
            <Code onChange={codeChange} code={JSON.stringify(rowData, null, 2)} />
          </div> */}
        </Modal>

        <Modal
          title="API"
          maskClosable={false}
          closable={false}
          keyboard={false}
          visible={visible && dataConfig.type === 'api'}
          centered
          width={760}
          footer={
            <div style={{ padding: '10px 0', textAlign: 'center' }}>
              <Button onClick={() => setVisible(false)}>取消</Button>
              <Button type="primary" onClick={okModalAPi}>
                完成
              </Button>
            </div>
          }
        >
          <div style={{ width: '100%', height: '446px' }}>
            <Form {...layout}>
              <Form.Item label="接口地址" style={{ marginBottom: 0 }}>
                <Form.Item style={{ display: 'inline-block', width: 'calc(100% - 100px)', marginRight: '10px' }}>
                  <Input
                    placeholder="请输入接口地址"
                    value={dataConfig.apiUrl}
                    onChange={(e) => {
                      const url = e.target.value
                      setDataConfig((config) => {
                        return {
                          ...config,
                          apiUrl: url,
                        }
                      })
                      eventBus.emit('changeSettingBase', 'dataConfig.apiUrl', url)
                    }}
                  />
                </Form.Item>
                <Form.Item style={{ display: 'inline-block' }}>
                  <Button type="primary" onClick={fetch}>
                    测试
                  </Button>
                </Form.Item>
              </Form.Item>
              <div style={{ width: '100%', height: '446px', padding: '10px 30px' }}>
                <Code codeRef={fetchDataCodeRef} code={JSON.stringify(fetchData, null, 2)} />
              </div>
            </Form>
          </div>
        </Modal>
      </Panel>
    </Collapse>
  )
}

export default Data
