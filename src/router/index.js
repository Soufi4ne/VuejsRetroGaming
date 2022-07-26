import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import AboutPage from '@/views/AboutPage.vue'
// import { create } from 'core-js/core/object';

const routes = [
    {
        name:'HomePage',
        path: '/HomePage',
        component:HomePage
    }, 
    {
        name:'AboutPage',
        path: '/AboutPage',
        component:AboutPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,

})

export default router