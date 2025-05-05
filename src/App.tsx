import { BrowserRouter, Route, Routes } from 'react-router';
import { RecoilRoot } from 'recoil';

import Header from "./components/Header/Header";
import Cadastro from "./components/Participante/Cadastro/Cadastro";

function App() {
    return (        
        <>
            <Header />
            <BrowserRouter>
                <RecoilRoot>
                    <Routes>
                        <Route path="/" element={<Cadastro />} />
                    </Routes>
                </RecoilRoot>                           
            </BrowserRouter>
        </>
    )
}

export default App
