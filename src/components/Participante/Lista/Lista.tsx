import React from 'react';
import Participante from '../../../types/Participante';
import { useListaParticipante } from '../../../state/hooks/useListaParticipante';

const Lista: React.FC = () => {

    const participantes: Participante[] = useListaParticipante()

    return (
        <ul role="list">
            {participantes.map(participante => (
                <li key={participante.id} role="listitem">
                    {participante.nome}
                </li>
            ))}
        </ul>
    );
};

export default Lista;