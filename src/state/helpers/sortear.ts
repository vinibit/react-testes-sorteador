import shuffle from "just-shuffle"
import Participante from "../../types/Participante"

export function sortear(participantes: Participante[]) {
    
    const total = participantes.length
    const embaralhados = shuffle(participantes)
    const resultado = new Map<string, Participante>()

    for (let i = 0; i < total; i++) {

        let indiceAmigo = i + 1
        if (i === total - 1) indiceAmigo = 0
        resultado.set(embaralhados[i].id, embaralhados[indiceAmigo])            
    }
    
    return resultado
}