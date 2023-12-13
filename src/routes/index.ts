import { RouteRecordRaw, createRouter, createWebHistory  } from "vue-router";
import Login from '../pages/Login/Login.vue';
// import Cadastro from '../pages/Cadastro/Cadastro.vue'
import Home from '../pages/Home/Home.vue'
import { Cadastro } from "../pages";
import { CadastroProduto } from "../pages";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'login',
        component: Login,
    },
    {
        path: '/cadastro',
        name: 'cadastro',
        component: Cadastro,
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        props: true,
    },
    {
        path: '/produto',
        name: 'produto',
        component: CadastroProduto,
        props: true,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
