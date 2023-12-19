import { RouteRecordRaw, createRouter, createWebHistory  } from "vue-router";
import Login from '../pages/Login/Login.vue';
import Home from '../pages/Home/Home.vue'
import { Cadastro } from "../pages";
import { CadastroProduto } from "../pages";
import { CriarCategoria } from "../pages";
import { AtualizarProduto } from "../pages";

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
    {
        path: '/categoria',
        name: 'categoria',
        component: CriarCategoria,
        props: true,
    },
    {
        path: '/atualizar-produto/:id',
        name: 'atualizar-produto',
        component: AtualizarProduto,
        props: true,
      },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
