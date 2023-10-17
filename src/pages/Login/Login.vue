<script lang="ts">
import { defineComponent } from 'vue';
import useLogin from './useLogin'

export default defineComponent({
    name: "Login",
    setup() {
    const { nomeUsuarioLogin, senha, useError, Entrar } = useLogin();

    return {
      nomeUsuarioLogin,
      senha,
      useError,
      Entrar,
    };
  },
})
</script>

<template>
    <div class="flex min-h-screen items-stretch bg-light">
        <div class="relative hidden flex-1 flex-col items-center justify-center overflow-hidden p-8 lg:flex">
            <div class="text-center">
                <div class="relative z-30 px-4 2xl:px-0">
                    <img class="ml-10" src="../../assets/estoque-1.png">
                </div>
            </div>
        </div>    
        <div class="flex w-full items-center justify-center p-6 lg:w-1/2 xl:w-1/2 ">
            <div class="w-full max-w-sm">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <div class="flex space-x-3 justify-center">
                        <img class="h-10 w-auto" src="../../assets/box.png" alt="Stockastic" />
                        <span>
                            <h1 class="text-3xl font-bold leading-9  text-gray-600">Stockastic</h1>
                        </span>
                    </div>
                    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Olá, Bem vindo!</h2>
                    <p class="mt-4 text-center text-slate-400">Informe os dados abaixo para efetuar o login.</p>
                </div>
        
                <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form class="space-y-6" @submit.prevent="Entrar">
                        <div class="sm:col-span-3">
                            <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Tipo de usuário:</label>
                            <div class="mt-2">
                                <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                    <option>Empresa</option>
                                    <option>Funcionário</option>
                                </select>
                            </div>
                        </div>
                        
                        <div>
                            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Nome de Usuário:</label>
                            <div class="mt-2">
                                <input id="email" name="email" type="text" v-model="nomeUsuarioLogin" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
            
                        <div>
                        <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Senha</label>
                            <div class="text-sm">
                                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Esqueceu a senha?</a>
                            </div>
                        </div>
                            <div class="mt-2">
                                <input id="password" name="password" type="password" v-model="senha" autocomplete="current-password"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div v-if="useError">
                            <p class="text-red-900 text-[13px] font-semibold mt-1 text-center">Usuário ou senha não conferem, verifique os dados.</p>
                        </div>
        
                        <div>
                            <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Entrar</button>
                        </div>
                    </form>
            
                    <p class="mt-10 text-center text-sm text-gray-500">
                        Não possui cadastro?
                        {{ ' ' }}
                        <router-link to="/cadastro">
                            <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Cadastre-se agora</a>
                        </router-link>
                        
                    </p>
                </div>
            </div>
      </div>
    </div>
</template>