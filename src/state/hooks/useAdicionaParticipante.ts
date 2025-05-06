import { useRecoilValue, useSetRecoilState } from "recoil"
import { listaParticipantesState, erroState } from "../atom"
import Participante from "../../types/Participante"

export const useAdicionaParticipante = () => {

    const setListaParticipantes = useSetRecoilState(listaParticipantesState)
    const listaAtual = useRecoilValue(listaParticipantesState)
    const setErro = useSetRecoilState(erroState)

    return (nome: string) => {
        
        if (listaAtual.some(participante => participante.nome === nome)) {
            setErro("Participante já adicionado na lista!")
            setTimeout(() => {
                setErro("")
            }, 5000)
            return
        }

        const id = Math.random().toString(36).substring(2, 9)
        const novoParticipante: Participante = { id, nome }
        setListaParticipantes(listaAtual => [ ...listaAtual, novoParticipante])
    }    
}