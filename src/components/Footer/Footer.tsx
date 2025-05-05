import { useNavigate } from "react-router";
import { useListaParticipante } from "../../state/hooks/useListaParticipante";

const Footer: React.FC = () => {
    
    const navigate = useNavigate()
    const participantes = useListaParticipante()
    const temParticipantesSuficientes = participantes.length >= 3

    const iniciar = () => {
        if (!temParticipantesSuficientes) {
            alert("É necessário ter pelo menos 3 participantes para iniciar a brincadeira.")
            return
        }

        navigate("/sorteio")        
    }

    return (
        <footer>
            <button type="button" disabled={!temParticipantesSuficientes} 
                onClick={iniciar}>
                    Iniciar brincadeira
            </button>
        </footer>
    );
}

export default Footer