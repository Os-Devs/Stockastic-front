// loadCategoria.ts
import { ref, onMounted, Ref } from 'vue';

interface Categoria {
  id: number;
  nome: string;
  descricao: string;
  created_at: string;
  updated_at: string;
}

const categorias: Ref<Categoria[]> = ref([]);

async function loadCategorias(): Promise<Categoria[]> {
  try {
    const response = await fetch('http://localhost:3000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem('accessToken')}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      categorias.value = data;
      return data;
    } else {
      console.error('Erro ao carregar categorias');
      return [];
    }
  } catch (error) {
    console.error('Erro na requisição:', error);
    return [];
  }
}

onMounted(() => {
  loadCategorias();
});

export { categorias, loadCategorias };
