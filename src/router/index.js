import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'
import Friend from '@/components/Friend.vue'
import Note from '@/components/Note.vue'
import Header from '@/components/Header.vue'
import Ero from '@/components/Ero.vue'
import Register from '@/components/Register.vue'
import Msg from '@/components/Msg.vue'
import Demo from '@/components/demo.vue'
import Person from '@/components/Person.vue'
import Admin from '@/components/Admin.vue'
import Homepage from '@/menus/Homepage.vue'
import Article from '@/menus/Article.vue'
import Title from '@/menus/Title.vue'
import QQ from '@/components/QQ.vue'
import Board from '@/menus/Board.vue'
import Blog from '@/components/Blog.vue'
Vue.use(VueRouter)



const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    {path: '/home', component: Home},
    {path:'/header',component:Header},
    { path: '/friend', component: Friend},
    {
      path: '/note', component: Note, children:[
      {path:'blog',component:Blog},
    ]},
    { path: '/login', component: Login },
    { path: '/ero', component: Ero },
    { path: '/register', component: Register },
    { path: '/demo', component: Demo },
    { path: '/msg', component: Msg },
    { path: '/person', component: Person },
    { path: '/title', component: Title },
    {
      path: '/admin', component: Admin,
      redirect:'/admin/homepage',
      children:[
        { path: 'homepage', component: Homepage },
        { path: 'article', component: Article },
        { path: 'board', component: Board }
        
      ]
    },
    {
      path:'/qq',component:QQ,
    }
    
    
 ]
})
// 全局守卫
// router.beforeEach(function (to, from, next) {
//   next()
//   if (to.path === '/ero')
//   {
//   const token = localStorage.getItem('token')
//     if (token) {
//       next()
//     }
//     else if (token === null) {
//       next('/home')
//       next('/login')
//       alert('此功能需要登入后才能使用')
     
//     } 
//   }
// })
router.beforeEach(function (to, from, next) {
  const pathArr =['/ero','/admin/homepage','/admin/article']
  if (pathArr.indexOf(to.path)!=-1) {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next(
        alert('此功能需要登入后才能使用'),
        next('/login')
        
      )
    }
  } else {
    next()
  }
})
export default router
