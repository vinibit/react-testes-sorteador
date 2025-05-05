import { act, fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Cadastro from "./Cadastro"

const component = (
    <RecoilRoot>        
        <Cadastro />
    </RecoilRoot>
)
const placeholderText = "Insira o nome dos participantes"

function adicionaParticipante(nome: string, input: HTMLElement, botao: HTMLElement) {
    
    fireEvent.change(input, {
        target: {
            value: nome
        }
    })    
    fireEvent.click(botao)    
}

describe("Testes de comportamento do Form", () => {

    test("Quando o input está vazio, novos participantes não podem ser adicionados", () => {
        render(component)
    
        const input = screen.getByPlaceholderText(placeholderText)
        const botao = screen.getByRole("button")
    
        expect(input).toBeInTheDocument()
        expect(botao).toBeDisabled()
    })
    
    test("Adiciona um participante caso o nome seja válido",  () => {
        render(component)
    
        const input = screen.getByPlaceholderText(placeholderText)
        const botao = screen.getByRole("button")
    
        adicionaParticipante("Ana Catarina", input, botao)
    
        expect(input).toHaveFocus()
        expect(input).toHaveValue("")
    })
    
    test("O input deve estar vazio após o submit", () => {
        render(component)
    
        const input = screen.getByPlaceholderText(placeholderText)
        const botao = screen.getByRole("button")
    
        adicionaParticipante("Ana Catarina", input, botao)
    
        expect(input).toHaveFocus()
        expect(input).toHaveValue("")
    })
    
    test("Nomes duplicados não podem ser adicionados", () => {
        render(component)
    
        const input = screen.getByPlaceholderText(placeholderText)
        const botao = screen.getByRole("button")
    
        adicionaParticipante("Ana Catarina", input, botao)
        adicionaParticipante("Ana Catarina", input, botao)
    
        const mensagemErro = screen.getByRole("alert")
        
        expect(mensagemErro).toHaveTextContent("Participante já adicionado na lista!")    
    })
    
    test("A mensagem de erro deve desaparecer após um timer", () => {
        jest.useFakeTimers()
        render(component)
    
        const input = screen.getByPlaceholderText(placeholderText)
        const botao = screen.getByRole("button")
    
        adicionaParticipante("Ana Catarina", input, botao)
        adicionaParticipante("Ana Catarina", input, botao)
    
        let mensagemErro = screen.queryByRole("alert")
        expect(mensagemErro).toBeInTheDocument()
    
        act(() => {
            jest.runAllTimers()
        })
    
        mensagemErro = screen.queryByRole("alert");
        expect(mensagemErro).toBeNull();
        
    })
})