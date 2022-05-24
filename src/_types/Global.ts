export interface ContextMenu {
  id: string
  label: string
  disabled?: boolean
  icon?: string
  handler?: (...params: any[]) => void
  keyPress?: '' | 'ctrl' | 'shift' | 'alt' | 'meta'
  keyCode?: number
  submenu?: ContextMenu[]
}
