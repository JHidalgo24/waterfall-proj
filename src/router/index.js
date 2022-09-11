import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "@/views/HomePage";
import accountPage from "@/views/AccountPage";
import RegisterPage from "@/views/RegisterPage";
import ClassPage from "@/views/ClassPage";
import MoneyPage from "@/views/MoneyPage";
import AdminPage from "@/views/AdminPage";
import InstructorPage from "@/views/InstructorPage";
import CEOPage from "@/views/CEOPage";
import UserCourses from "@/views/UserCourses";

Vue.use(VueRouter)

const routes = [
  {path:'/', component:HomePage },
  {path:'/account', component: accountPage},
  {path: '/register', component: RegisterPage},
  {path:'/classes',component: ClassPage},
  {path:'/money-thingy',component: MoneyPage},
  {path:'/admins',component: AdminPage},
  {path:'/instructor',component: InstructorPage},
  {path:'/CEO',component: CEOPage},
  {path:'/user-courses',component: UserCourses}
]

const router = new VueRouter({
  routes
})

export default router
