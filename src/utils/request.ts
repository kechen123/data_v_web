import { message, Modal } from 'antd'

let showModal = false
const baseHost = window.gConfig.baseHost

export const baseFetch = (url, options) => {
  const path = baseHost + url
  return fetch(path, options)
    .then((response) => {
      if (response.status === 200) {
        return response.json()
      }
      const error = new Error(response.statusText)
      throw error
    })
    .then((data) => {
      if (data.status === 200) {
        return data
      } else if (data.status === 400 || data.status === 413) {
        setTimeout(() => {
          const pathname = window.location.pathname
          const search = window.location.search
          if (!showModal) {
            showModal = true
            Modal.confirm({
              title: '提示',
              centered: true,
              content: '您的登录状态已过期，请重新登录',
              okText: '确认',
              cancelText: '取消',
              onOk() {
                window.location.href = '/login?path=' + pathname + search
              },
              onCancel() {
                showModal = false
              },
            })
          }
        }, 1000)
      } else {
        const error = new Error(data.message)
        throw error
      }
    })
}

export const getFetch = (url) => {
  return baseFetch(url, {
    headers: {
      token: localStorage.getItem('userToken') || '',
      'content-type': 'application/json',
    },
    method: 'GET',
  })
}

export const postFetch = (url, data) => {
  return baseFetch(url, {
    headers: {
      token: localStorage.getItem('userToken') || '',
      'content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export const putFetch = (url, data) => {
  return baseFetch(url, {
    headers: {
      token: localStorage.getItem('userToken') || '',
      'content-type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify(data),
  })
}

export const deleteFetch = (url) => {
  return baseFetch(url, {
    headers: {
      token: localStorage.getItem('userToken') || '',
      'content-type': 'application/json',
    },
    method: 'DELETE',
  })
}
export const upload = (url, data) => {
  return baseFetch(url, {
    headers: {
      token: localStorage.getItem('userToken') || '',
      // 'content-type': 'application/json',
    },
    method: 'POST',
    body: data,
  })
}
