import Header from "../components/Header"
import Conteudo from "../components/conteudo"

function Painel() {
    return (
        <>
        <Header btn={true} />
        <Conteudo>
            <h2>Lista de Funcionarios</h2>
        </Conteudo>
        </>
    )
}

export default Painel