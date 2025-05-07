import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from 'recoil';
import { useListaParticipante } from "../../state/hooks/useListaParticipante";
import Configuracao from './Configuracao';
import { useSorteador } from "../../state/hooks/useSorteador";

const component = (
    <RecoilRoot>        
        <Configuracao />
    </RecoilRoot>    
)

const mockNavigate = jest.fn()
const mockSorteio = jest.fn()

jest.mock("react-router", () => {
    return {
        useNavigate: () => mockNavigate
    }
})

jest.mock("../../state/hooks/useListaParticipante", () => {
    return {
        useListaParticipante: jest.fn()
    }
})

jest.mock("../../state/hooks/useSorteador", () => {
    return {
        useSorteador: jest.fn()
    }
})

describe("Na página de Configuração", () => {

    beforeEach(() => {
        (useListaParticipante as jest.Mock).mockReturnValue([])
    })
    
    test("Deve ser renderizada corretamente", () => {
        
        const { container } = render(component);
        expect(container).toMatchSnapshot();
    })

})


describe("Quando não existirem participantes suficientes", () => {

    beforeEach(() => {
        (useListaParticipante as jest.Mock).mockReturnValue([])
    })
    
    test("Deve renderizar o Rodapé", () => {
        
        render(component)

        const botao = screen.getByTestId("botao-iniciar")
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
        (useListaParticipante as jest.Mock).mockReturnValue(participantes);
        (useSorteador as jest.Mock).mockReturnValue(mockSorteio)
    })
    
    test("Pode iniciar a brincadeira", () => {
        
        render(component)

        const botao = screen.getByTestId("botao-iniciar")
        expect(botao).not.toBeDisabled()
    })

    test("A brincadeira foi iniciada", () => {
        
        render(component)

        const botao = screen.getByTestId("botao-iniciar")
        fireEvent.click(botao)

        expect(mockNavigate).toHaveBeenCalledTimes(1)
        expect(mockNavigate).toHaveBeenCalledWith("/sorteio")
        expect(mockSorteio).toHaveBeenCalledTimes(1)
    })
})