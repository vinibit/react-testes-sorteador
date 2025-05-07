import { useRecoilValue } from 'recoil'
import { resultadoSorteioState } from '../atom'

export const useResultadoSorteio = () => {
    return useRecoilValue(resultadoSorteioState)
}