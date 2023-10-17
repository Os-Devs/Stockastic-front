type UseLogin = {
    Entrar: () => void
}

function useLogin(): UseLogin {

    function Entrar(this: any): void {
        console.log('entrou')
        this.$router.push('/home')
    }
    
    return { Entrar }
}

export default useLogin;