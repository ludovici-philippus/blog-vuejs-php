import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SobreView from "../views/SobreView.vue";
import PostView from "../views/PostView.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: "/sobre",
        name: "sobre",
        component: SobreView
    },
    {
        path: '/:slug',
        name: "categoria",
        component: HomeView
    },
    {
        path: "/:slug_categoria/:slug",
        name: "post",
        component: PostView
    }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
