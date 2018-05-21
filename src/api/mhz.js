import request from '@/utils/request'

export function getFast() {
  return request({
    url: '/fast',
    method: 'get'
  })
}
