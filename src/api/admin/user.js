/*
 *    Copyright (c) 2018-2025, lengleng All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * Neither the name of the cloud.com developer nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 * Author: lengleng (wangiegie@gmail.com)
 */

import request from '@/router/axios'

export function fetchList (query) {
  return request({
    url: '/admin/user/page',
    method: 'get',
    params: query
  })
}
export function hallList (query) {
  return request({
    url: '/hall/problem/page',
    method: 'get',
    params: query
  })
}
//便民查询**
export function peoHeaList (query) {
  return request({
    url: '/hall/convenientsearch/page',
    method: 'get',
    params: query
  })
}
//便民查询结束
//最热查询*
export function headList (query) {
return request({
    url: '/hall/convenientsearch/page',
    method: 'get',
    params: query
})
}
//最热查询结束*
//政府入口**
export function govList (query) {
return request({
    url: '/hall/govportal/map',
    method: 'get',
    params: query
})
}
//政府入口结束*
export function noticeList (query) {
  return request({
    url: '/hall/notice/page',
    method: 'get',
    params: query
  })
}

//按个人,业务**
export function personList (query) {
  return request({
    url: '/hall/affair/page',
    method: 'get',
    params: query
  })
}
//点击量**
export function throug (query) {
  return request({
    url: '/hall/convenientsearch/'+query,
    method: 'get',
  })
}
//头部按个人,业务**
export function headperList (query) {
  return request({
    url: '/hall/affair/page',
    method: 'get',
    params: query
  })

}

//EventQuery 事件办理，业务
export function EventQueryList (query) {
  return request({
    url: '/hall/affair/page',
    method: 'get',
    params: query
  })
}
export function addObj (obj) {
  return request({
    url: '/admin/user',
    method: 'post',
    data: obj
  })
}


export function getObj (id) {
  return request({
    url: '/admin/user/' + id,
    method: 'get'
  })
}

export function delObj (id) {
  return request({
    url: '/admin/user/' + id,
    method: 'delete'
  })
}

export function putObj (obj) {
  return request({
    url: '/admin/user',
    method: 'put',
    data: obj
  })
}

export function getDetails (obj) {
  return request({
    url: '/admin/user/details/' + obj,
    method: 'get'
  })
}


//水上水下post提交**
//http://198.10.33.15:9999/hall/windowapply/page?token=1214
export function getHandleData (obj) {
return request({
    url: '/hall/windowapply/page',
    method: 'post',
    data: obj
})
}

//窗口申请暂存和提交**
//const headers = {
//	'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
//  'Authorization': '7613d259-d5a0-45a3-9920-d4e6e8cab358',
//}
export function tijiaoList (obj) {
  return request({
    url: '/hall/windowapply',
//  headers:headers,
    method: 'post',
    data: obj
  })

}
//传token接口**
//export function Dictionaries (query) {
//return request({
//  url: '/admin/dict/page',
//  method: 'get',
//  params: query
// 
//})
//}


