import { atom } from "recoil";
import Participante from "../types/Participante";

const listaParticipantesState = atom<Participante[]>({
    key: "listaParticipantesState",
    default: []
})

const erroState = atom<string>({
    key: "erroState",
    default: ""
})

export {  listaParticipantesState, erroState }