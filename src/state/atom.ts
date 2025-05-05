import { atom } from "recoil";
import Participante from "../types/Participante";

const listaParticipantes = atom<Participante[]>({
    key: 'listaParticipantes',
    default: []
})

export default listaParticipantes