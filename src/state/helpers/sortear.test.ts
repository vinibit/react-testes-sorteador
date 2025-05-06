import { sortear } from "./sortear"

describe("Ao realizar o sorteio", () => {
    
    test("Não deve sortear o mesmo participante", () => {
        
        const participantes = [
            { nome: "Ana", id: "1" },
            { nome: "Bia", id: "2" },
            { nome: "Carlos", id: "3" },
            { nome: "Davi", id: "4" },
            { nome: "Elena", id: "5" },
            { nome: "Felipe", id: "6" },
            { nome: "Gustavo", id: "7" },
            { nome: "Helena", id: "8" },
            { nome: "Karina", id: "9" },
            { nome: "Vini", id: "10" }
        ]

        const resultado = sortear(participantes)        

        participantes.forEach(participante => {
            const amigo = resultado.get(participante.id)
            expect(amigo).not.toBeUndefined()
            expect(amigo?.nome).not.toEqual(participante.nome)
        })
    })
})   