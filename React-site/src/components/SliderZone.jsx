import '../styles/SliderZone.css'
import { useState,useEffect } from 'react'
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import leftbtn from '../images/left_btn.png'
import rightbtn from '../images/right_btn.png'
export function SliderZone(){
    const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 3; // 슬라이드 총 개수
  const imgs=[img1,img2,img3]

  const updateSlider = (index) => {
    setCurrentIndex(index);
  };

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex < totalSlides - 1 ? prevIndex + 1 : totalSlides - 1));
  };

  const handleControlClick = (index) => {
    updateSlider(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides]);

    
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
            onClick={() => handleControlClick(index)}
          >
          </div>
        ))}
        </div>
        <div className="direct_btn">
            <div className="left_btn"><img src={leftbtn} alt="" onClick={handleLeftClick} /></div>
            <div className="right_btn"><img src={rightbtn} alt="" onClick={handleRightClick} /></div>
        </div>
    </div>
</div>

  );
}