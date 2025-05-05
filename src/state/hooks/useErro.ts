import { useRecoilValue } from "recoil"
import { erroState } from "../atom"

export const useErro = () => {
    const erro = useRecoilValue(erroState)
    return erro
}