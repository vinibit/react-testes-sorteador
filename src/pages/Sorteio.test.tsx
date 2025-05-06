import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import { useListaParticipante } from "../state/hooks/useListaParticipante"
import Sorteio from "./Sorteio"
import Participante from "../types/Participante"

const pageComponent = (
    <RecoilRoot>
        <Sorteio />
    </RecoilRoot>
)

jest.mock("../state/hooks/useListaParticipante", () => {
    return {
        useListaParticipante: jest.fn(() => [])
    }
})

describe("Na página de Sorteiow", () => {

    const participantes: Participante[] = [
        {
            nome: "Ana",        
            id: "1"
        },
        {
            nome: "Bia",        
            id: "2"
        },
        {
            nome: "Carlos",      
            id: "3"
        }
    ]
    
    beforeEach(() => {
        (useListaParticipante as jest.Mock).mockReturnValue(participantes)
    })

    test("Todos os participantes podem exibir o seu amigo secreto", () => {
        render(pageComponent)

        const opcoes = screen.queryAllByRole("option")
        expect(opcoes).toHaveLength(participantes.length)
    })

})