import React from 'react';
import { useListaParticipante } from '../state/hooks/useListaParticipante';

const Sorteio: React.FC = () => {
    
    const participantes = useListaParticipante()   

    return (
        <section>
            <form>
                <select name="participanteSelecionado" id="participanteSelecionado">
                    {participantes.map(participante => (
                        <option key={participante.id}>
                            {participante.nome}
                        </option>
                    ))}
                </select>
            </form>
        </section>
    );
};

export default Sorteio;