import { render, screen } from "@testing-library/react"
import Form from "./Form"

test("Quando o input está vazio, novos participantes não podem ser adicionados", 
    () => {
        render(<Form />)

        const input = screen.getByPlaceholderText("Insira o nome dos participantes")
        const botao = screen.getByRole("button")

        expect(input).toBeInTheDocument()
        expect(botao).toBeDisabled()
    })