import axios from 'axios'
import qs from 'qs'

export const api = axios.create({
  // baseURL: config.apiUrl,
  // headers: {
  //   'X-User-Token': getLocalUser().authentication_token,
  //   'X-User-Email': getLocalUser().email
  // },
  paramsSerializer: function(params) {
    return qs.stringify(params)
  },
})
