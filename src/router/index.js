import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "@/views/HomePage";
import accountPage from "@/views/AccountPage";
import RegisterPage from "@/views/RegisterPage";
import ClassPage from "@/views/ClassPage";
import MoneyPage from "@/views/MoneyPage";
import AdminPage from "@/views/AdminPage";

Vue.use(VueRouter)

const routes = [
  {path:'/', component:HomePage },
  {path:'/account', component: accountPage},
  {path: '/register', component: RegisterPage},
  {path:'/classes',component: ClassPage},
  {path:'/moneythingy',component: MoneyPage},
  {path:'/admins',component: AdminPage}
]

const router = new VueRouter({
  routes
})

export default router
