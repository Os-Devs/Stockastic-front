<script setup lang="ts">
import { useRouter } from 'vue-router';
import NavBarVue from '../../components/navbar.vue';
import { novaCategoria, criarCategoria } from './useCategoria';

const router = useRouter();

const salvarCategoria = async () => {
  await criarCategoria(router);
};

</script>

<template>
  <NavBarVue></NavBarVue>
  <div class="flex-col items-center w-full mt-20">
    <div class="lg:mx-80 mx-1 flex-col items-center rounded-2xl border border-light-grey-50 bg-white shadow-100">
      <div class="flex-col justify-center mt-5 mb-8 text-center">
        <h1 class="text-3xl font-bold leading-9 text-gray-600">Cadastrar nova categoria</h1>
        <p class="mt-4 text-center text-slate-400">Preencha as seguintes informações abaixo.</p>
      </div>
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6">
          <div>
            <label for="nome" class="block text-sm font-medium leading-6 text-gray-900">Nome da categoria:</label>
            <div class="mt-2">
              <input v-model="novaCategoria.nome" id="nome" name="nome" type="text" autocomplete="nome" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <label for="descricao" class="block text-sm font-medium leading-6 text-gray-900">Descrição:</label>
            <div class="mt-2">
              <textarea v-model="novaCategoria.descricao" id="descricao" name="descricao" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
            </div>
          </div>

          <div>
            <button @click.prevent="salvarCategoria" class="flex w-full mb-10 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
