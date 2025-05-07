import styles from "./Cadastro.module.css"

import { useRef, useState } from "react"

import { useAdicionaParticipante } from "../../../state/hooks/useAdicionaParticipante"
import { useErro } from "../../../state/hooks/useErro"

const Cadastro: React.FC = () => {
    
    const [name, setName] = useState("")
    const nameRef = useRef<HTMLInputElement | null>(null)

    const adicionar = useAdicionaParticipante()
    const erro = useErro()

    const adicionaParticipante = (e: React.FormEvent) => {
        e.preventDefault()
        if (name.trim()) {
            adicionar(name)
            setName("")
        }
        const el = nameRef.current
        if (el) el.focus()        
    };

    return (
        <form onSubmit={adicionaParticipante}>
            <div className={styles.grupoInputBotaoCadastro}>                
                <input
                    type="text"
                    className={styles.inputNome}
                    ref={nameRef}                    
                    value={name}
                    placeholder="Insira o nome dos participantes"
                    onChange={e => setName(e.target.value)}
                />
                <button type="submit" disabled={!name} data-testid="botao-adicionar">
                    Adicionar
                </button>
            </div>
            {
                erro && 
                    <p role="alert" className={styles.alerta + " " + styles.erro}>                    
                        {erro}
                    </p>
            }
        </form>
    )
}

export default Cadastro