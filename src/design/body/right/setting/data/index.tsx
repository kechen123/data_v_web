import React, { useState } from 'react'
import { Select, Modal, Button, Form } from 'antd'
import { AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import './index.less'

const { Option } = Select

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 22 },
}

const Data: React.FC = () => {
  const [visible, setVisible] = useState(false)
  const [rowData] = useState([
    { make: 'Toyota', model: 'Celica', price: 35000, price1: 35000, price2: 35000, price3: 35000, price4: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000, price1: 35000, price2: 35000, price3: 35000, price4: 35000 },
    { make: 'Porsche', model: 'Boxster', price: 72000, price1: 35000, price2: 35000, price3: 35000, price4: 35000 },
  ])

  // const [columnDefs] = useState([{ field: 'make' }, { field: 'model' }, { field: 'price' }, { field: 'price1' }, { field: 'price2' }, { field: 'price3' }, { field: 'price4' }])
  const [columnDefs] = useState([{ field: 'make' }, { field: 'model' }, { field: 'price' }])

  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }

  const showModal = () => {
    setVisible(true)
  }

  const hideModal = () => {
    setVisible(false)
  }
  return (
    <>
      <Form {...layout}>
        <Form.Item label="尺寸" style={{ marginBottom: 0 }}>
          <Form.Item style={{ display: 'inline-block', width: 'calc(60% - 6px)', marginRight: '6px' }}>
            <Select defaultValue="lucy" style={{ width: '100%' }} onChange={handleChange}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
            </Select>
          </Form.Item>
          <Form.Item style={{ display: 'inline-block', width: 'calc(40% - 6px)', marginLeft: '6px' }}>
            <Button type="primary" style={{ background: 'var(--lightest-navy)', border: '1px solid var(--dark-slate)', lineHeight: '20px' }} onClick={() => setVisible(true)}>
              <i className="icon iconfont icon-bianji"></i>
            </Button>
          </Form.Item>
        </Form.Item>
      </Form>
      <Modal title="Modal" visible={visible} centered width={760} onOk={hideModal} onCancel={hideModal} okText="确认" cancelText="取消">
        <div className="ag-theme-alpine" style={{ width: '100%', height: '500px' }}>
          <AgGridReact defaultColDef={{ editable: true }} rowData={rowData} columnDefs={columnDefs}></AgGridReact>
        </div>
      </Modal>
    </>
  )
}

export default Data
