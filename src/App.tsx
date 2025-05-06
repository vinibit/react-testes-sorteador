import { BrowserRouter, Route, Routes } from 'react-router';
import { RecoilRoot } from 'recoil';

import Header from "./components/Header/Header";
import Configuracao from "./pages/Configuracao";

function App() {
    return (        
        <>
            <Header />
            <BrowserRouter>
                <RecoilRoot>
                    <Routes>
                        <Route path="/" element={<Configuracao />} />
                    </Routes>
                </RecoilRoot>                           
            </BrowserRouter>
        </>
    )
}

export default App
