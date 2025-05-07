import { BrowserRouter, Route, Routes } from 'react-router';
import { RecoilRoot } from 'recoil';

import Header from "./components/Header/Header";
import Configuracao from "./pages/Configuracao";
import Sorteio from './pages/Sorteio/Sorteio';

function App() {
    return (        
        <>
            <Header />
            <BrowserRouter>
                <RecoilRoot>
                    <Routes>
                        <Route path="/" element={<Configuracao />} />
                        <Route path="/sorteio" element={<Sorteio />} />
                    </Routes>
                </RecoilRoot>                           
            </BrowserRouter>
        </>
    )
}

export default App
