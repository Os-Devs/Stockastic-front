import { ref } from 'vue';
import { Router } from 'vue-router';

interface Categoria {
  nome: string;
  descricao: string;
}

const novaCategoria = ref<Categoria>({
  nome: '',
  descricao: '',
});

async function criarCategoria(router: Router) {
  try {
    const response = await fetch('http://localhost:3000/categories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify(novaCategoria.value),
    });

    if (response.ok) {
      alert('Categoria criada com sucesso!');
      router.push('/home');
      novaCategoria.value = { nome: '', descricao: '' };
    } else {
        alert('Erro ao criar categoria')
    }
  } catch (error) {
    console.error('Erro na requisição:', error);
  }
}

export { novaCategoria, criarCategoria };
