import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import { useListaParticipante } from "../../state/hooks/useListaParticipante"
import { useResultadoSorteio } from "../../state/hooks/useResultadoSorteio"
import Sorteio from "./Sorteio"
import Participante from "../../types/Participante"

const pageComponent = (
    <RecoilRoot>
        <Sorteio />
    </RecoilRoot>
)

jest.mock("../../state/hooks/useListaParticipante", () => {
    return {
        useListaParticipante: jest.fn()
    }
})

jest.mock("../../state/hooks/useResultadoSorteio", () => {
    return {
        useResultadoSorteio: jest.fn()
    }
})


describe("Na página de Sorteio", () => {

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

    const resultadoSorteio = new Map<string, Participante>([
        ["1", { nome: "Bia", id: "2" }],
        ["2", { nome: "Carlos", id: "3" }],
        ["3", { nome: "Ana", id: "1" }]
    ])
    
    beforeEach(() => {
        (useListaParticipante as jest.Mock).mockReturnValue(participantes);
        (useResultadoSorteio as jest.Mock).mockReturnValue(resultadoSorteio);
    })

    test("Todos os participantes podem exibir o seu amigo secreto", () => {
        render(pageComponent)

        const opcoes = screen.queryAllByRole("option", { hidden: false })
        expect(opcoes).toHaveLength(participantes.length)
    })

    test("Amigo secreto é exibido quando solicitado", () => {
        render(pageComponent)

        const select = screen.getByTestId("participanteSelecionado")
        fireEvent.change(select, {
            target: {
                value: participantes[0].id
            }
        })

        const botao = screen.getByRole("button")
        fireEvent.click(botao)

        const alertaAmigoSecreto = screen.getByRole("alert")
        expect(alertaAmigoSecreto).toBeInTheDocument()
    })

})