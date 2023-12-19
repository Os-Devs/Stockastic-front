<script setup lang="ts">
import navbar from '../../components/navbar.vue';
import { useRouter } from 'vue-router';
import { loadCategorias } from '../CadastroProduto/loadCategoria';
import { produto, updateProduto,  } from './useAtualizarProduto';
import { onMounted, ref } from 'vue';

interface Categoria {
  id: number;
  nome: string;
  descricao: string;
  created_at: string;
  updated_at: string;
}

const categorias = ref<Categoria[]>([]);
const router = useRouter();

const loadProduto = async (id: number) => {
  try {
    const response = await fetch(`http://localhost:3000/produtos/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `${localStorage.getItem('accessToken')}`, 
      },
    });
    const data = await response.json();
    produto.value = data;
  } catch (error) {
    console.error('Error loading produto:', error);
  }
};

onMounted(async () => {
  categorias.value = await loadCategorias();
  const produtoId = Number(router.currentRoute.value.params.id);
  loadProduto(produtoId)  

});

const salvarSeValido = () => {
  updateProduto();
  router.push('/home');
};

</script>

<template>
    <navbar></navbar>
        <div class="flex-col items-center w-full mt-20 ">
            <div class="lg:mx-80 mx-1 flex-col items-center rounded-2xl border border-light-grey-50 bg-white shadow-100">
                <div class="flex-col justify-center mt-5 mb-8 text-center">
                    <h1 class="text-3xl font-bold leading-9  text-gray-600">Cadastrar novo produto</h1>
                    <p class="mt-4 text-center text-slate-400">Preencha as seguintes informações abaixo.</p>

                </div>
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <form class="space-y-6" >
                        <div>
                            <label for="category" class="block text-sm font-medium leading-6 text-gray-900">Categoria:</label>
                            <div class="mt-2">
                                <select v-model="produto.category_id" id="category" name="category"
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    <option value="" disabled selected>Selecione uma categoria</option>
                                    <option v-for="categoria in categorias" :key="categoria.id" :value="categoria.id">{{ categoria.nome }}</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label for="nome" class="block text-sm font-medium leading-6 text-gray-900">Nome do produto:</label>
                            <div class="mt-2">
                                <input v-model="produto.nome" id="nome" name="nome" type="text" autocomplete="nome" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        
                        <div>
                            <label for="descricao" class="block text-sm font-medium leading-6 text-gray-900">Descrição:</label>
                            <div class="mt-2">
                                <textarea v-model="produto.descricao" id="descricao" name="descricao" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                            </div>
                        </div>
                        
                        <div class="flex space-x-4">
                            <div class="w-1/2">
                                <label for="quantidade_atual" class="block text-sm font-medium leading-6 text-gray-900">Quantidade Atual:</label>
                                <div class="mt-2">
                                    <input v-model.number="produto.quantidade_atual" id="quantidade_atual" name="quantidade_atual" type="number" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div class="w-1/2">
                                <label for="quantidade_minima" class="block text-sm font-medium leading-6 text-gray-900">Quantidade Mínima:</label>
                                <div class="mt-2">
                                    <input v-model.number="produto.quantidade_minima" id="quantidade_minima" name="quantidade_minima" type="number" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Validade:</label>
                            <div class="mt-2">
                                <input v-model="produto.validade" id="validade" name="validade" type="date" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <label for="user" class="block text-sm font-medium leading-6 text-gray-900">Preço unitário:</label>
                            <div class="mt-2">
                                <input v-model.number="produto.preco_unitario" id="preco_unitario" name="preco_unitario" type="number" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button @click.prevent="salvarSeValido" class="flex w-full mb-10 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Salvar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
</template>
  

  