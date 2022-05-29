import { baseHost } from '@config/http'

export const baseFetch = (url, options) => {
  const path = baseHost + url
  return fetch(path, options).then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response.json()
    }
    const error = new Error(response.statusText)
    throw error
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
