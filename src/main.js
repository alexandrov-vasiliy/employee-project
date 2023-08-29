import {createApp} from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'
import {employeeStore} from "@/store/employeeStore";
import EmployeeList from "@/components/pages/MainPage.vue";
import EmployeeEdit from "@/components/pages/EditPage.vue";

const routes = [
    { path: '/', component: EmployeeList },
    { path: '/edit/:id', component: EmployeeEdit }
]

const router = createRouter({
    history: createWebHistory(),
    routes

})



const app = createApp(App)
app.use(employeeStore)
app.use(router)
app.mount('#app')
