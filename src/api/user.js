import request from '../utils/request'

// Ero图
export function Ero(data) {
  return request({
    url: '/lolicon/searchPic',
    method: 'POST',
    headers: {
      isToken:true
    },
    data: data
  })
}
// Ero2图
export function Ero2(data) {
  return request({
    url: '/setu/searchPicByEzWay',
    method: 'POST',
    headers: {
      isToken:true
    },
    data: data
  })
}
// 登陆
export function Login(data) {
  return request({
    url: '/login/userLogin',
    method: 'POST',
    headers: {
      isToken:false
    },
    data:data
  
  })
}
// 注册
export function Register(data) {
  return request({
    url: '/login/registerSpring',
    method: 'POST',
    headers: {
      isToken:false
    },
    data:data
  
  })
}

//评论区
export function Tc(data) {
  return request({
    url: '/blogComment/addBlogComment',
    method: 'POST',
    headers: {
      isToken:true
    },
    data:data
  
  })
}
// 渲染评论
export function Pl(data) {
  return request({
    url: '/blogComment/searchBlogCommentById',
    method: 'POST',
    headers: {
      isToken:true
    },
    data:data
    
  })
}

// 博客
export function Blog(data) {
  return request({
    url: '/blog/editBlog',
    method: 'POST',
    headers: {
      isToken:true
    },
    data:data
    
  })
}
// 查询博客
export function findBlog(data) {
  return request({
    url: '/home/findAllBlog',
    method: 'POST',
    headers: {
      isToken:false
    },
    data:data
    
  })
}
// 新增留言
export function Board(data) {
  return request({
    url: '/board/editBoard',
    method: 'POST',
    headers: {
      isToken:true
    },
    data:data
    
  })
}
// 查询留言
export function findAllBoard(data) {
  return request({
    url: '/board/findAllBoard',
    method: 'POST',
    headers: {
      isToken:false
    },
    data:data
    
  })
}
// id查询用户信息
export  function showUserById(data) {
  return request({
    url: '/userActivity/showUserById',
    method: 'POST',
    headers: {
      isToken:true
    },
    data:data
    
  })
}

// 删除留言板
export  function deleteBoard(data) {
  return request({
    url: '/board/deleteBoard',
    method: 'POST',
    headers: {
      isToken:true
    },
    data:data
    
  })
}
// 准确查询博客
export  function searchBlogById(data) {
  return request({
    url: '/blog/searchBlogById',
    method: 'POST',
    headers: {
      isToken:false
    },
    data:data
    
  })
}