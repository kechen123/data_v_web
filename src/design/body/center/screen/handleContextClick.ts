import eventBus from '@utils/eventBus'
import { message, Modal } from 'antd'
import { v4 as uuidv4 } from 'uuid'
import { useAppSelector, useAppDispatch } from '@storeApp/hooks'
import { initWidget, setWidget, delWidget } from '@features/widgetSlice'

const copy = (text: string) => {
  console.log('', text)
  const uid: string = uuidv4().substring(0, 8)
  // const newWidgetObj = {
  // ...widgetObj,
}

const top = (text: string) => {}

const bottom = (text: string) => {}

const up = (text: string) => {}

const down = (text: string) => {}

const group = (text: string) => {}

const hide = (text: string) => {}

const lock = (text: string) => {}

const del = (args) => {
  console.log('del', args)
  Modal.confirm({
    title: '删除组件',
    centered: true,
    content: '删除后无法恢复！确定要删除?',
    okText: '确认',
    cancelText: '取消',
    onOk: () => {
      // dispatch(delWidget(args))
      // eventBus.emit('delActiveWidgets')
    },
  })
}

const Click = (params: any) => {
  const { ev, group, item, data } = params
  const { id, label } = item
  const dispatch = useAppDispatch()
  switch (id) {
    case 'copy':
      copy(data)
      break
    case 'top':
      top(label)
      break
    case 'bottom':
      bottom(label)
      break
    case 'up':
      up(label)
      break
    case 'down':
      down(label)
      break
    case 'group':
      group(label)
      break
    case 'hide':
      hide(label)
      break
    case 'lock':
      lock(label)
      break
    case 'del':
      del(data.acitveWidget)
      break
    default:
      break
  }
}

export default Click
