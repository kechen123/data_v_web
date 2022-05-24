import { ContextMenu as ContextMenuType } from '@_types/Global'

export const tabContextMenu: Array<Array<ContextMenuType>> = [
  [
    {
      id: 'copy',
      label: '复制',
    },
  ],
  [
    {
      id: 'top',
      label: '置顶',
      keyPress: 'ctrl',
      keyCode: 81,
    },
    {
      id: 'bottom',
      label: '置底',
      keyPress: 'ctrl',
      keyCode: 81,
    },
    {
      id: 'up',
      label: '上移一层',
    },
    {
      id: 'down',
      label: '下移一层',
      keyPress: 'ctrl',
      keyCode: 81,
    },
  ],
  [
    {
      id: 'group',
      label: '组合',
      keyPress: 'ctrl',
      disabled: true,
      keyCode: 81,
    },
    {
      id: 'hide',
      label: '隐藏',
      keyPress: 'ctrl',
      disabled: true,
      keyCode: 81,
    },
    {
      id: 'lock',
      label: '锁定',
      keyPress: 'ctrl',
      keyCode: 81,
    },
  ],
  [
    {
      id: 'del',
      label: '删除',
      keyPress: 'ctrl',
      keyCode: 81,
    },
  ],
]
