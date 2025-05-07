import styles from './Sorteio.module.css';

import { useState } from 'react';
import { useListaParticipante } from '../../state/hooks/useListaParticipante';
import { useResultadoSorteio } from '../../state/hooks/useResultadoSorteio';
import Card from '../../components/Card/Card';
import Participante from '../../types/Participante';
import Footer from '../../components/Footer/Footer';

const Sorteio: React.FC = () => {
    
    const participantes = useListaParticipante();
    const resultadoSorteio = useResultadoSorteio();

    const [idParticipanteSelecionado, setIdParticipanteSelecionado] = useState<string>("");
    const [amigoSecreto, setAmigoSecreto] = useState<Participante | null>(null);
    
    const sortear = (event: React.FormEvent) => {
        
        event.preventDefault();
        if (!resultadoSorteio.has(idParticipanteSelecionado)) return

        const amigoSecreto = resultadoSorteio.get(idParticipanteSelecionado)!;
        setAmigoSecreto(amigoSecreto);        
    };

    const selecionarParticipante = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const participante = participantes.find(participante => participante.id === event.target.value);
        if (!participante) {
            setIdParticipanteSelecionado("");            
        } else {           
            setIdParticipanteSelecionado(participante.id);
        }            
    };

    const participanteSelecionado = participantes.find(participante => participante.id === idParticipanteSelecionado);

    return (
        <Card>
            <section className={styles.sorteio}>
                <h2>Quem vai tirar o papelzinho?</h2>
                <form onSubmit={sortear}>
                    <select 
                        name="participanteSelecionado" 
                        id="participanteSelecionado"
                        data-testid="participanteSelecionado"                    
                        value={idParticipanteSelecionado}
                        onChange={selecionarParticipante}
                        required>
                        <option value="" disabled hidden>Selecione um participante</option>
                        {participantes.map(participante => (
                            <option key={participante.id} value={participante.id}>
                                {participante.nome}
                            </option>
                        ))}
                    </select>
                    <button type="submit" className={styles.botaoSortear}>Sortear</button>
                </form>
                {amigoSecreto && (
                    <p role="alert" className={styles.resultado}>
                        O amigo secreto de {participanteSelecionado!.nome} é {amigoSecreto.nome}
                    </p>
                )}
                <Footer>
                    <img src="/imagens/aviao.png" className="aviao" alt="Um desenho de um avião de papel" />
                </Footer>
            </section>
        </Card>
    );
};

export default Sorteio;