import { Ref, ref } from 'vue';

interface Produto {
  nome: string;
  descricao: string;
  quantidade_atual: number;
  quantidade_minima: number;
  validade: string;
  preco_unitario: number;
  category_id: number;
}

interface UseCadastroProduto {
  produto: Ref<Produto>;
  SalvarProduto: () => void;
}

function useCadastroProduto(): UseCadastroProduto {
  const produto = ref<Produto>({
    nome: '',
    descricao: '',
    quantidade_atual: 0,
    quantidade_minima: 0,
    validade: '',
    preco_unitario: 0,
    category_id: 1,
  });

  async function SalvarProduto(this: any) {
    const requestBody = {
      nome: produto.value.nome,
      descricao: produto.value.descricao,
      quantidade_atual: produto.value.quantidade_atual,
      quantidade_minima: produto.value.quantidade_minima,
      validade: produto.value.validade,
      preco_unitario: produto.value.preco_unitario,
      category_id: produto.value.category_id,
    };

    const accessToken = localStorage.getItem('accessToken');

    try {
      const response = await fetch('http://localhost:3000/produtos', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${accessToken}`,
        },
      });

      if (response.ok) {
        alert('Produto cadastrado com sucesso!');
        this.$router.push('/home');
      } else {
        console.error('Erro no cadastro do produto');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  }

  return {
    produto,
    SalvarProduto,
  };
}

export default useCadastroProduto;
