import React from "react";
import Cadastro from "../components/Participante/Cadastro/Cadastro";
import Lista from "../components/Participante/Lista/Lista";
import Footer from "../components/Footer/Footer";

const Configuracao: React.FC = () => {

    return (
        <>
            <h1>Configuração</h1>
            <Cadastro />
            <Lista />
            <Footer />
        </>
    );
};

export default Configuracao;