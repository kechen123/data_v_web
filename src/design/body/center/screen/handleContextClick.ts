import eventBus from '@utils/eventBus'

const copy = (text: string) => {}

const top = (text: string) => {}

const bottom = (text: string) => {}

const up = (text: string) => {}

const down = (text: string) => {}

const group = (text: string) => {}

const hide = (text: string) => {}

const lock = (text: string) => {}

const del = (text: string) => {
  eventBus.emit('delActiveWidgets')
}

const click = (params: any[]) => {
  const [ev, group, item] = params
  const { id, label } = item
  switch (id) {
    case 'copy':
      copy(label)
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
      del(label)
      break
    default:
      break
  }
}

export default click
