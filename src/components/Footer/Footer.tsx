import styles from "./Footer.module.css"

import { useNavigate } from "react-router"
import { useListaParticipante } from "../../state/hooks/useListaParticipante"
import { useSorteador } from "../../state/hooks/useSorteador"

const Footer: React.FC = () => {
    
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
        <footer className={styles.footer}>
            <button 
                type="button"
                className={styles.botaoIniciar}
                disabled={!temParticipantesSuficientes} 
                onClick={iniciar}>                    
                    <span className="material-icons">play_circle_outline</span>
                    Iniciar brincadeira
            </button>
            <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
        </footer>
    )
}

export default Footer