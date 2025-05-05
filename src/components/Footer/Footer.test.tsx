import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"

import { useListaParticipante } from "../../state/hooks/useListaParticipante"
import Footer from "./Footer"


const component = (
    <RecoilRoot>
        <Footer />
    </RecoilRoot>
)

jest.mock("../../state/hooks/useListaParticipante", () => {
    return {
        useListaParticipante: jest.fn(() => [])
    }
})

const mockNavigate = jest.fn()
jest.mock("react-router", () => {
    return {
        useNavigate: () => mockNavigate
    }
})

describe("Quando não existirem participantes suficientes", () => {

    beforeEach(() => {
        (useListaParticipante as jest.Mock).mockReturnValue([])
    })
    
    test("Deve renderizar o Rodapé", () => {
        
        render(component)

        const botao = screen.getByRole("button")
        expect(botao).toBeDisabled()
    })

})

describe("Quando existirem participantes suficientes", () => {

    const participantes = [
        { id: 1, nome: "Participante 1" },
        { id: 2, nome: "Participante 2" },
        { id: 3, nome: "Participante 3" },
    ]

    beforeEach(() => {
        (useListaParticipante as jest.Mock).mockReturnValue(participantes)
    })
    
    test("Pode iniciar a brincadeira", () => {
        
        render(component)

        const botao = screen.getByRole("button")
        expect(botao).not.toBeDisabled()
    })

    test("A brincadeira foi iniciada", () => {
        
        render(component)

        const botao = screen.getByRole("button")
        fireEvent.click(botao)

        expect(mockNavigate).toHaveBeenCalledTimes(1)
        expect(mockNavigate).toHaveBeenCalledWith("/sorteio")
    })
})