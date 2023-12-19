import { ref } from 'vue';
import { useRouter } from 'vue-router';

interface Produto {
  id: number;
  nome: string;
  descricao: string;
  quantidade_atual: number;
  quantidade_minima: number;
  validade: string;
  preco_unitario: number;
  category_id: number;
}

const produto = ref<Produto>({
  id: 0,
  nome: '',
  descricao: '',
  quantidade_atual: 0,
  quantidade_minima: 0,
  validade: '',
  preco_unitario: 0,
  category_id: 0,
});

const router = useRouter();

const updateProduto = async () => {
  try {
    await fetch(`http://localhost:3000/produtos/${produto.value.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${localStorage.getItem('accessToken')}`, // Replace yourAuthToken with the actual token
      },
      body: JSON.stringify(produto.value),
    });
    alert('Produto atualizado com sucesso!')
    router.push('/home');
  } catch (error) {
    console.error('Error updating produto:', error);
  }
};

export { produto, updateProduto };
