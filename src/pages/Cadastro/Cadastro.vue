<script lang="ts">
import { defineComponent, ref } from 'vue';
import useCadastro from './useCadastro'
import { useRouter } from 'vue-router';



export default defineComponent({
  name: 'Cadastro',
  setup() {
    const { user, Salvar } = useCadastro();
    const senhaErro = ref('');
    const router = useRouter();

    const validarSenha = () => {
        if (user.value.password.length < 6) {
            senhaErro.value = 'A senha deve ter pelo menos 6 caracteres.';
            return false;
        } else {
            senhaErro.value = '';
            return true;
        }
    };

    const salvarSeValido = () => {
        if (validarSenha()) {
            Salvar(router);
        }
    };

    return {
      user,
      Salvar,
      senhaErro,
      salvarSeValido
    };
  },
});
</script>

<template>
    <div class="flex-col items-center w-full mt-20 ">
        <div class="flex space-x-3 justify-center mb-10">
            <img class="h-10 w-auto" src="../../assets/box.png" alt="Stockastic" />
            <span>
                <h1 class="text-3xl font-bold leading-9  text-gray-600">Stockastic</h1>
            </span>
        </div>
        <div class="lg:mx-80 mx-1 flex-col items-center rounded-2xl border border-light-grey-50 bg-white shadow-100">
            <div class="flex-col justify-center mt-5 mb-8 text-center">
                <h1 class="text-3xl font-bold leading-9  text-gray-600">Crie sua conta</h1>
                <p class="mt-4 text-center text-slate-400">Preencha as seguintes informações abaixo.</p>

            </div>
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">

                <form class="space-y-6" >
                    <div class="sm:col-span-3">
                        <label for="tipo" class="block text-sm font-medium leading-6 text-gray-900">Tipo de usuário:</label>
                        <div class="mt-2">
                            <select v-model="user.tipo" id="tipo" name="tipo" autocomplete="tipo-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                <option value="empresa">Empresa</option>
                                <option value="funcionario">Funcionário</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label for="userName" class="block text-sm font-medium leading-6 text-gray-900">Nome:</label>
                        <div class="mt-2">
                            <input id="userName" name="userName" type="text" v-model="user.name" autocomplete="userName" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    
                    <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email:</label>
                        <div class="mt-2">
                            <input id="email" name="email" type="email" v-model="user.email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <label for="user" class="block text-sm font-medium leading-6 text-gray-900">Nome de Usuário:</label>
                        <div class="mt-2">
                            <input id="user" name="user" type="text" autocomplete="user" v-model="user.username" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
        
                    <div>
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Senha:</label>
                        <div class="mt-2">
                            <input id="password" name="password" type="password" v-model="user.password" autocomplete="current-password"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                        <div class="text-red-500 text-sm mt-1">{{ senhaErro }}</div>
                    </div>
                    <div>
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Repetir senha:</label>
                        <div class="mt-2">
                            <input id="password_confirmation" name="password" type="password" v-model="user.password_confirmation" autocomplete="current-password"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
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
