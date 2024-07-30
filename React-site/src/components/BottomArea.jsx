import { AddrZone } from "./AddrZone";
import { HotmenuZone } from "./HotmenuZone";
export function BottomArea(){
  return(
    <div className="bottomArea">
      <HotmenuZone/>
      <AddrZone/>
    </div>
  );
}