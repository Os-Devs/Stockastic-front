import { Ref, ref } from 'vue';

interface UseCadastro {
  nomeUsuarioLogin: Ref<string>;
  nomeUsuario: Ref<string>;
  email: Ref<string>;
  senha: Ref<string>;
  Salvar: () => void;
}

function useCadastro(): UseCadastro {
  const nomeUsuarioLogin = ref('');
  const nomeUsuario = ref('');
  const email = ref('');
  const senha = ref('');

  async function Salvar(this: any) {
    const requestBody = {
      nomeUsuarioLogin: nomeUsuarioLogin.value,
      nomeUsuario: nomeUsuario.value,
      email: email.value,
      senha: senha.value,
    };

    try {
      const response = await fetch('http://localhost:3307/api/usuarios/cadastro', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        alert('Cadastro bem-sucedido!');
        this.$router.push('/');
      } else {
        console.error('Erro no cadastro');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  }

  return {
    nomeUsuarioLogin,
    nomeUsuario,
    email,
    senha,
    Salvar,
  };
}

export default useCadastro;