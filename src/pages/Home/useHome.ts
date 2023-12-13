import { ref, onMounted } from 'vue';

interface Produto {
    id: number;
    status: string;
    nome: string;
    validade: string;
    descricao: string;
    preco_unitario: number;
    quantidade_minima: number;
    quantidade_atual: number;
    created_at: string;
    updated_at: string;
    category_id: number;
    category: string;
    notifications: string[];
}

export default function useHome() {
  const produtos = ref<Produto[]>([]);
  const accessToken = localStorage.getItem('accessToken');

  const carregarProdutos = async () => {
    try {
      const response = await fetch('http://localhost:3000/produtos', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${accessToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        produtos.value = data;
      } else {
        console.error('Erro ao carregar produtos');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  onMounted(() => {
    carregarProdutos();
  });

  return {
    produtos,
  };
}
