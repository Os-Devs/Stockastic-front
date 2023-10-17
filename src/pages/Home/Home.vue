<script lang="ts" setup>
import { ref } from 'vue';

const isOpen = ref(false);

</script>

<template>
    <nav class="h-16 text-white bg-indigo-600 flex items-center shadow">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center">
                <div class="flex">
                    <a href="#" class="text-white font-semibold rounded-lg px-4 py-2 | hover:bg-purple-500">
                        Produtos
                    </a>
                    <a href="#" class="text-white font-semibold rounded-lg px-4 py-2 | hover:bg-purple-500">
                        Dashboard
                    </a>
                </div>
                <div class="flex">
                    <div class="relative">
                        <button class="rounded-full overflow-hidden border-2 border-purple-500 w-10 h-10 flex justify-center items-center | hover:border-white focus:outline-none focus:border-white"
                                @click="isOpen = true"
                                >
                            <img src="https://www.shutterstock.com/image-vector/user-icon-vector-profile-solid-250nw-477682876.jpg" alt="User's avatar">
                        </button>
    
                        <div v-if="isOpen" class="fixed inset-0 w-full h-screen z-20 bg-black opacity-0" @click="isOpen = false"></div>
                        <div v-if="isOpen" class="absolute z-30 right-0 mt-2" :class="{'hidden': !isOpen}">
                            <div class="bg-white rounded-lg shadow-lg py-2 w-48">
                                <a href="#" class="block text-purple-600 font-semibold px-4 py-2 | hover:text-white hover:bg-purple-500">Configuraçõess</a>
                                <RouterLink to="/"><a href="#" class="block text-purple-600 font-semibold px-4 py-2 | hover:text-white hover:bg-purple-500">Sair</a></RouterLink> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <h2 class="mt-20 text-center text-2xl font-bold leading-9 tracking-tight text-gray-600">Nenhum produto cadastrado.</h2>
    <div class="relative z-30 flex justify-center">
        <img class=" w-1/4" src="../../assets/inventory.png">
    </div>
</template>
