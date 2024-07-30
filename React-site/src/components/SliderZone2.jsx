import '../styles/SliderZone.css'
import { useState,useEffect } from 'react'
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import leftbtn from '../images/left_btn.png'
import rightbtn from '../images/right_btn.png'
export function SliderZone(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = 3;
  const imgs=[img1,img2,img3]

  const handleArrowClisck = (direction) =>{
    let _index = currentIndex +direction;
    if(_index<imgs.length-imgs.length){_index=imgs.length-1}else if(_index>imgs.length-1){_index=imgs.length-imgs.length}
    setCurrentIndex(_index);
  }


    useEffect(()=>{
      const interval = setInterval(
        ()=>{
          setCurrentIndex((idx)=> (idx+1)%imgs.length);
        },2000);
        return()=>clearInterval(interval);
    },[imgs.length]);

    
  return(
    <div id="sliderZone">
    <div id="sub_photo_bg">
        <ul className="slider_panel" style={{ left: `-${currentIndex * 100}%` }}>
            {
              imgs.map(
                (img,index)=>(
             <li key={index} className="slider_image"><img src={img} alt=""/></li>

              )
              )
            }
            {/* <li className="slider_image"><img src={img1} alt=""/></li>
            <li className="slider_image"><img src={img2} alt=""/></li>
            <li className="slider_image"><img src={img3} alt=""/></li> */}

        </ul>
        <div className="control_panel">
        {[...Array(totalSlides).keys()].map((index) => (
          <div
            key={index}
            className={`control_btn ${index === currentIndex ? 'active' : ''}`}
          >
          </div>
        ))}
        </div>
        <div className="direct_btn">
            <div className="left_btn"><img src={leftbtn} alt="" onClick={()=>handleArrowClisck(-1)} /></div>
            <div className="right_btn"><img src={rightbtn} alt="" onClick={()=>handleArrowClisck(1)} /></div>
        </div>
    </div>
</div>

  );
}