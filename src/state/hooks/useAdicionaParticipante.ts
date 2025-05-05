import { useSetRecoilState } from "recoil"
import listaParticipantesState from "../atom"
import Participante from "../../types/Participante"

export const useAdicionaParticipante = () => {

    const setListaParticipantes = useSetRecoilState(listaParticipantesState)
    return (novoParticipante: Participante) => {
        return setListaParticipantes(listaAtual => [ ...listaAtual, novoParticipante])
    }    
}