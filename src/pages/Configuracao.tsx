import React from "react";
import Cadastro from "../components/Participante/Cadastro/Cadastro";
import Lista from "../components/Participante/Lista/Lista";
import Footer from "../components/Footer/Footer";
import Card from "../components/Card/Card";

const Configuracao: React.FC = () => {

    return (
        <Card>
            <section>
                <h2>Vamos começar!</h2>
                <Cadastro />
                <Lista />
                <Footer />
            </section>
        </Card>
    )
}

export default Configuracao