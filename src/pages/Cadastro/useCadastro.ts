import { Ref, ref } from 'vue';
import { Router } from 'vue-router';

interface User {
  email: string;
  password: string;
  password_confirmation: string;
  username: string;
  name: string;
  tipo: string;
}

interface UseCadastro {
  user: Ref<User>;
  Salvar: (router: Router) => void;
}

function useCadastro(): UseCadastro {
  const user = ref<User>({
    email: '',
    password: '',
    password_confirmation: '',
    username: '',
    name: '',
    tipo: '',
  });

  async function Salvar(router: Router) {
    const requestBody = {
      user: {
        email: user.value.email,
        password: user.value.password,
        password_confirmation: user.value.password_confirmation,
        username: user.value.username,
        name: user.value.name,
        tipo: user.value.tipo,
      },
    };

    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        alert('Cadastro bem-sucedido!');
        router.push('/');
      } else {
        console.error('Erro no cadastro');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  }

  return {
    user,
    Salvar,
  };
}

export default useCadastro;
