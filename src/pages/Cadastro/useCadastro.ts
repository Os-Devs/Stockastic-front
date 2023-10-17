
type UseCadastro = {
    Salvar: () => void
}

function useCadastro(): UseCadastro {

    function Salvar(this: any): void {
        console.log('entrou')
        this.$router.push('/')
    }
    
    return { Salvar }
}

export default useCadastro;