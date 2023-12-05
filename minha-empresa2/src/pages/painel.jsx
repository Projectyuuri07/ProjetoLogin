import React from "react"; // Add missing import

import Header from "../components/Header";
import Conteudo from "../components/conteudo";
import Tabela from "../components/tabela";

function Painel() {
    return (
        <>
        <Header btn={true} />
        <Conteudo>
            <h2>Lista de Funcionarios</h2>
            <Tabela />
        </Conteudo>
        </>
    );
}

export default Painel;
