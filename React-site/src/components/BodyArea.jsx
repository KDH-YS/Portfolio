import '../styles/BodyArea.css'
import {LeftMenuZone1} from './LeftmenuZone1'
import { ContentsZone } from './ContentsZone';
import { LeftmenuZone4 } from './LeftmenuZone4';
import { LeftmenuZone3 } from './LeftmenuZone3';
import { LeftmenuZone2 } from './LeftmenuZone2';
import { LeftmenuZone5 } from './LeftmenuZone5';
import { LeftmenuZone6 } from './LeftmenuZone6';
export function BodyArea({leftMenu}){
  const leftMenuPage =()=>{
    switch(leftMenu){
      case 1:
        return <LeftMenuZone1/>
      case 2:
        return <LeftmenuZone2/>
      case 3:
        return <LeftmenuZone3/>
      case 4:
        return <LeftmenuZone4/>
      case 5:
        return <LeftmenuZone5/>
      case 6:
        return <LeftmenuZone6/>
    }
  }
  return(
    <div id="bodyArea">
      {/* <LeftMenuZone/> */}
      {leftMenuPage()}
      <ContentsZone/>
      </div>
  );
}