import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import Configuracao from './Configuracao';

const component = (
    <RecoilRoot>        
        <Configuracao />
    </RecoilRoot>    
)

const mockNavigate = jest.fn()
jest.mock("react-router", () => {
    return {
        useNavigate: () => mockNavigate
    }
})

describe("Configuracao Page", () => {
    
    test("Deve ser renderizada corretamente", () => {
        
        const { container } = render(component);
        expect(container).toMatchSnapshot();
    })
})