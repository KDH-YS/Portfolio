import '../styles/TopArea.css'
import {TitleZone} from './TitleZone'
import {MenuZone} from './MenuZone'
import {SliderZone} from './SliderZone2'
export function TopArea({setLeftMenu}){
  return(
    <>
    <div className="topArea">
    <TitleZone/>
    <MenuZone setLeftMenu={setLeftMenu}/>
    <SliderZone/>
    </div>
    </>
  );
}