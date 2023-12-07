
import React from "react";
import {useState} from "react";
import './HomePagesStyle.css';

const HomePage = () =>{
    const getImg = [
         './images/slider-01.jpg',
         './images/slider-02.jpg',
         './images/slider-03.jpg'
    ];
    const [getSliderImg,setSliderImg] = useState(0);
    const nextSlideShow = () => {
        setSliderImg((getSliderImg + 1) % getImg.length);
      };//ขวา
      const prevSlideShow = () => {
        setSliderImg((getSliderImg- 1 + getImg.length) %  getImg.length);
      };//ซ้าย
  
    return(
        <div>

            <div className="img-slider ">
                <button onClick={prevSlideShow}  >
                    prev
                </button>
                <img className="img-slider-home" src={getImg[getSliderImg]} alt={`Slide ${getSliderImg+ 1}`} />
                <button onClick={nextSlideShow}>
                    Next
                </button>
    

            </div>

        
        
        </div>


    )
}





export default HomePage;