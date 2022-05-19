export const getObjByPath = (field: string, value: any) => {
  let obj = {}
  if (typeof field === 'undefined' || typeof value === 'undefined') {
    return undefined
  }
  if (typeof field === 'string' && field.indexOf('.') === -1) {
    return undefined
  }
  const ids = field.split('.')
  let th = ''
  for (let i = 0; i < ids.length; i++) {
    th += "['" + ids[i] + "']"
    if (!eval(`obj${th}`)) {
      eval(`obj${th}={}`)
    }
  }
  eval(`obj${th}={$set: value}`)
  return obj
}
