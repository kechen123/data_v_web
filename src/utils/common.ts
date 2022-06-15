export const getObjByPath = (field: string, value: any) => {
  let obj = {}
  if (typeof field === 'undefined' || typeof value === 'undefined') {
    return undefined
  }
  if (typeof field === 'string' && field.indexOf('.') === -1) {
    obj[field] = { $set: value }
    return obj
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

export const getUrlParam = (name: string) => {
  let url = window.location.hash
  let obj = {}
  if (url.indexOf('?') !== -1) {
    let startIndex = url.indexOf('?') + 1
    let str = url.substr(startIndex)
    let strs = str.split('&')
    for (let i = 0; i < strs.length; i++) {
      obj[strs[i].split('=')[0]] = strs[i].split('=')[1]
    }
    return obj[name]
  }
  return undefined
}

export const equalArr = (arr1: any[], arr2: any[]) => {
  if (arr1.length !== arr2.length) {
    return false
  }
  return arr1.length === arr2.length && arr1.sort().toString() === arr2.sort().toString()
}
