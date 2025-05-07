import styles from "./Configuracao.module.css";

import React from "react";
import { useNavigate } from "react-router";
import Cadastro from "../../components/Participante/Cadastro/Cadastro";
import Lista from "../../components/Participante/Lista/Lista";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import { useSorteador } from "../../state/hooks/useSorteador";
import { useListaParticipante } from "../../state/hooks/useListaParticipante";

const Configuracao: React.FC = () => {

    const navigate = useNavigate()
    const sortear = useSorteador()
    const participantes = useListaParticipante()
    const temParticipantesSuficientes = participantes.length >= 3

    const iniciar = () => {
        if (!temParticipantesSuficientes) {
            alert("É necessário ter pelo menos 3 participantes para iniciar a brincadeira.")
            return
        }

        sortear()
        navigate("/sorteio")        
    }

    return (
        <Card>
            <section>
                <h2>Vamos começar!</h2>
                <Cadastro />
                <Lista />
                <Footer>
                    <button 
                        type="button"
                        data-testid="botao-iniciar"
                        className={styles.botaoIniciar}
                        disabled={!temParticipantesSuficientes} 
                        onClick={iniciar}>                    
                            <span className="material-icons">play_circle_outline</span>
                            Iniciar brincadeira
                    </button>
                    <img src="/imagens/sacolas.png" alt="Sacolas de compras" />                
                </Footer>
            </section>
        </Card>
    )
}

export default Configuracao