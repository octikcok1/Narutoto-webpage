import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Introduce from '../views/Introduce.vue'
import Beta_Login from '../bata/Login.vue'
import Beta_Register from '../bata/Register.vue'
import Beta_Admin from '../bata/Admin.vue'
import Beta_Admin_User from '../bata/admin-user.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/', name: 'Home', component: Home},
        {path: '/Introduce', name: 'Introduce', component: Introduce},
        // {path: '/Q&A', name: 'Q&A', component: QA},
        // {path: '/education', name: 'education', component: Education},
        // {path: '/Mod-download', name: 'download', component: Download},
        {path: '/login', name: 'Login', component: Beta_Login},
        {path: '/register', name: 'Register', component: Beta_Register},
        {path: '/admin', name: 'Admin', component: Beta_Admin},
        {path: '/admin-user', name: 'Admin-user', component: Beta_Admin_User}
    ]
})

export default router