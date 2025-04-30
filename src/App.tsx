import { BrowserRouter, Route, Routes } from 'react-router';
import { RecoilRoot } from 'recoil';

import Header from './components/Header/Header';
import Form from './components/Form';

function App() {
    return (        
        <>
            <Header />
            <BrowserRouter>
                <RecoilRoot>
                    <Routes>
                        <Route path="/" element={<Form />} />
                    </Routes>
                </RecoilRoot>                           
            </BrowserRouter>
        </>
    )
}

export default App
