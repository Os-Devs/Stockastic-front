<script lang="ts" setup>
import navbar from '../../components/navbar.vue';
import useHome from './useHome';
import { format } from 'date-fns';
import dropdown  from '../../components/dropdown.vue';

const { produtos } = useHome();

</script>

<template>
    <navbar></navbar>
    <div class="mt-8 flex justify-evenly">
        <router-link to="/produto">
            <button class="mt-3 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:border-indigo-300">
                Cadastrar Novo Produto
            </button>
        </router-link>
        <router-link to="/categoria">
            <button class="mt-3 px-4 py-2 bg-slate-500 text-white font-semibold rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:border-indigo-300">
                Cadastrar categoria
            </button>
        </router-link>
    </div>
    <div v-if="produtos.length === 0" class="mt-20 text-center">
    <h2 class="text-2xl font-bold leading-9 tracking-tight text-gray-600">
      Nenhum produto cadastrado ainda.
    </h2>
    <div class="relative z-30 flex justify-center">
      <img class="w-1/4" src="../../assets/inventory.png" alt="No products image">
    </div>
  </div>

  <div v-else>
    <h2 class="mt-6 mb-10 text-2xl font-bold leading-9 tracking-tight text-gray-600 flex justify-center">
      Lista de Produtos Cadastrados
    </h2>
    <ul class="mt-4 space-y-3 p-10">
      <li v-for="produto in produtos" :key="produto.id" class="bg-white p-4 rounded-md shadow-md border border-light-grey-50">
        <h3 class="text-2xl font-bold text-gray-600">{{ produto.nome }}</h3>
        <p class="text-gray-500">{{ produto.descricao }}</p>
        <div class="flex justify-between items-center mt-2">
          <span class="text-gray-600 font-semibold">{{ produto.quantidade_atual }} unidades em estoque.</span>
          <span class="text-white font-semibold bg-sky-500 rounded-lg px-2">{{ produto.category }}</span>
          <span class="text-white font-semibold rounded-lg px-2" :class="{
            'bg-amber-300': produto.status === 'vencido',
            'bg-green-500 ': produto.status === 'disponivel'}">{{ produto.status }}</span>
          <dropdown :items="produto.notifications" />  
          <span class="text-gray-600 font-semibold">Data de validade: {{ format(new Date(produto.validade), 'dd/MM/yyyy') }}</span>
          <router-link :to="{ name: 'atualizar-produto', params: { id: produto.id } }">
            <img src="https://cdn-icons-png.flaticon.com/512/5996/5996831.png" alt="Icon" class="w-8" />
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>
