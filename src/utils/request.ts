import { baseHost } from '@config/http'
import { message } from 'antd'

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
          window.location.href = '/#/login'
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
