import { Ref, ref } from 'vue';

interface User {
  email: string;
  password: string;
}

interface UseLogin {
  user: Ref<User>;
  useError: Ref<boolean>;
  Entrar: () => void;
}

function useLogin(): UseLogin {
  const user = ref<User>({
    email: '',
    password: '',
  });
  const useError = ref<boolean>(false);

  async function Entrar(this: any) {
    const requestBody = {
      user: {
        email: user.value.email,
        password: user.value.password,
      }
    };
    
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const responseData = await response.json();

        if (responseData.status.code === 200) {
          localStorage.setItem('userData', JSON.stringify(responseData.status.data));

          const accessToken = response.headers.get('Authorization');
          if (accessToken) {
            localStorage.setItem('accessToken', accessToken);
          }
        }
        console.log('Login bem-sucedido!');
        this.$router.push('/home');
      } else {
        useError.value = true;
        console.error('Erro no login');
      }
    } catch (error) {
      useError.value = true;
      console.error('Erro na requisição:', error);
    }
  }

  return {
    user,
    useError,
    Entrar,
  };
}

export default useLogin;
