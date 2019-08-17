import request from '@/router/axios'
export function hallList (query) {
  return request({
    url: '/hall/problem/page',
    method: 'get',
    params: query
  })
}
