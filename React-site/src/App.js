import './App.css'
import { useState } from 'react'
import {TopArea} from './components/TopArea'
import {BottomArea} from './components/BottomArea'
import {BodyArea} from './components/BodyArea'
function App() {  
  const [leftMenu, setLeftMenu] = useState(4);
  return (
      <div className="site">
      <TopArea setLeftMenu={setLeftMenu}/>
      <BodyArea leftMenu={leftMenu}/>
      <BottomArea/>
      </div>
  );
}

export default App;