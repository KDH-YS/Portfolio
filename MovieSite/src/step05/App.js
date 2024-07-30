// 3.Router적용
import './App.css';
import {Home} from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { Detail } from './pages/Detail';
import { Navigation } from './components/Navigation';
function App() {


  return (
    <>
    <BrowserRouter>
    <Navigation/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/Detail' element={<Detail/>}/>

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
