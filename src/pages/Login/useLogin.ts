import { Ref, ref } from 'vue';

interface UseLogin {
  nomeUsuarioLogin: Ref<string>;
  senha: Ref<string>;
  useError: Ref<boolean>;
  Entrar: () => void;
}

function useLogin(): UseLogin {
  const nomeUsuarioLogin = ref('');
  const senha = ref('');
  const useError = ref<boolean>(false);

  async function Entrar(this: any) {
    const queryParams = new URLSearchParams();
    queryParams.append('nomeUsuarioLogin', nomeUsuarioLogin.value);
    queryParams.append('senha', senha.value);
    

    const url = `http://localhost:3307/api/usuarios/login?${queryParams.toString()}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
      });

      if (response.ok) {
        console.log('Login bem-sucedido!');
        this.$router.push('/home');
      } else {
        useError.value = true
        console.error('Erro no login');
      }
    } catch (error) {
        useError.value = true
        console.error('Erro na requisição:', error);
    }
  }

  return {
    nomeUsuarioLogin,
    senha,
    useError,
    Entrar,
  };
}

export default useLogin;