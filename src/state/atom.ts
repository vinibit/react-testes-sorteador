import { atom } from "recoil";
import Participante from "../types/Participante";

const listaParticipantesState = atom<Participante[]>({
    key: "listaParticipantesState",
    default: []
})

const resultadoSorteioState = atom<Map<string, Participante>>({
    key: "resultadoSorteioState",
    default: new Map<string, Participante>()
})

const erroState = atom<string>({
    key: "erroState",
    default: ""
})

export {  listaParticipantesState, resultadoSorteioState, erroState }