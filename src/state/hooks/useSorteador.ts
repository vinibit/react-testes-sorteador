
import { useSetRecoilState } from "recoil"
import { resultadoSorteioState } from "../atom"
import { useListaParticipante } from "./useListaParticipante"
import { sortear } from "../helpers/sortear"

export const useSorteador = () => {

    const setResultado = useSetRecoilState(resultadoSorteioState)    
    const participantes = useListaParticipante()

    return () => {
        const resultado = sortear(participantes)        
        setResultado(resultado)
    }
}