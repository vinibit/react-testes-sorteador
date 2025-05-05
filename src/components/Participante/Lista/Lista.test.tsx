import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"

import Lista from "./Lista"
import { useListaParticipante } from "../../../state/hooks/useListaParticipante"
import Participante from "../../../types/Participante"

const component = (
    <RecoilRoot>
        <Lista />
    </RecoilRoot>
)

jest.mock("../../../state/hooks/useListaParticipante", () => {
    return {
        useListaParticipante: jest.fn(() => [])
    }
})

describe("Lista de participantes vazia", () => {

    const participantes = [] as Participante[]

    beforeEach(() => {
        (useListaParticipante as jest.Mock).mockReturnValue(participantes)
    })
    
    test("Deve renderizar a lista vazia", () => {
        render(component)

        const itens = screen.queryAllByRole("listitem")
        expect(itens).toHaveLength(0)
    })
})

describe("Lista de participantes preenchida", () => {
    
    const participantes = [
        { id: 1, nome: "Participante 1" },
        { id: 2, nome: "Participante 2" },
    ]

    beforeEach(() => {
        (useListaParticipante as jest.Mock).mockReturnValue(participantes)
    })

    test("Deve renderizar a lista com um participante", () => {
        render(component)

        const itens = screen.queryAllByRole("listitem")
        expect(itens).toHaveLength(participantes.length)
    })
})