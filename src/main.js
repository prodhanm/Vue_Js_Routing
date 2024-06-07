import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import User from './components/user/User.vue'
import { routes } from './routes'

/* eslint-disable */
const router = createRouter({
    history: createWebHistory(),
    routes:routes
})

const app = createApp(App)
app.use(router)


app.mount('#app')
