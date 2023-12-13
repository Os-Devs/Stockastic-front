<script lang="ts" setup>
import { NavBarVue } from '../../components';


</script>

<template>
    <NavBarVue></NavBarVue>
    <div class="mt-8 flex justify-center">
        <router-link to="/produto">
            <button class="mt-3 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:border-indigo-300">
                Cadastrar Novo Produto
            </button>
        </router-link>
    </div>
    <h2 class="mt-20 text-center text-2xl font-bold leading-9 tracking-tight text-gray-600">Nenhum produto cadastrado ainda.</h2>
    <div class="relative z-30 flex justify-center">
        <img class=" w-1/4" src="../../assets/inventory.png">
    </div>
</template>
