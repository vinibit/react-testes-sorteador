import { useRef, useState } from "react"

import { useAdicionaParticipante } from "../../../state/hooks/useAdicionaParticipante";
import { useErro } from "../../../state/hooks/useErro"

const Cadastro: React.FC = () => {
    
    const [name, setName] = useState("")
    const nameRef = useRef<HTMLInputElement>(null)

    const adicionar = useAdicionaParticipante()
    const erro = useErro()

    const adicionaParticipante = (e: React.FormEvent) => {
        e.preventDefault()
        if (name.trim()) {
            adicionar(name)
            setName("")
        }
        nameRef.current?.focus()
    };

    return (
        <form onSubmit={adicionaParticipante}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    ref={nameRef}
                    id="name"
                    type="text"
                    value={name}
                    placeholder="Insira o nome dos participantes"
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <button type="submit" disabled={!name}>
                Adicionar
            </button>
            {
                erro && 
                <p role="alert" 
                    style={{ color: 'red' }}>
                        {erro}
                </p>
            }
        </form>
    );
};

export default Cadastro;