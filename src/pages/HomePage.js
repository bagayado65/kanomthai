import React from "react";
import { useState } from "react";
import "./HomePagesStyle.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  const getImg = [
    "./jpgs/home1.jpg",
    "./jpgs/home2.jpg",
    "./jpgs/home3.jpg",
  ];
  const [getSliderImg, setSliderImg] = useState(0);
  const nextSlideShow = () => {
    setSliderImg((getSliderImg + 1) % getImg.length);
  }; //ขวา
  const prevSlideShow = () => {
    setSliderImg((getSliderImg - 1 + getImg.length) % getImg.length);
  }; //ซ้าย

  return (
    <div>
        
  
        <div className="format-home-top">
            <div className="home-text-topin">
                <h1 className="home-text-topin-size">Welcome To <br/>
                    Share-KanomThai
                </h1>
                <br/><br/><br/><br/><br/>
                <p className="home-text-into-size"> เว็บไซต์แชร์ขนมไทย<br/>
                เว็บไซต์สำหรับรวบรวมข่าวสารและแลกเปลี่ยนสูตรการทำขนมไทย

                </p>
            </div>
            <button  className="button-style-img" onClick={prevSlideShow}>
                <i className="icon-arrow fa fa-angle-left"></i>
            </button>

            <img
            className="img-slider"
            src={getImg[getSliderImg]}
            alt={`Slide ${getSliderImg + 1}`}
            />
        
            <button  className="right-button-style-img" onClick={nextSlideShow}>
                        <i className="icon-arrow fa fa-angle-right"></i>
            </button>

        </div>

      

        


      
      <div className="format-home-about">
        <div className="home-about">
          <div className="home-about-img">
            <img src="./jpgs/about-img.jpg" className="home-about-box-shadow" />
          </div>
        </div>
        <div className="home-about-into">
          <div class="home-about-inner-column">
            <h1>
              Welcome To <span>Share-KanomThai</span>
            </h1>

            <p>
              ยินดีต้อนรับสู่เว็บไซต์ขนมไทยที่ทำให้คุณได้สัมผัสกับเสน่ห์ของวัฒนธรรมไทยอย่างแท้จริง
              ทีมงานของเรายินดีที่ได้มีเพื่อนรักขนมไทย
              ความอร่อยของขนมไทยนั้นสามารถเป็นพื้นฐานที่ทำให้คนมาร่วมมือกันสร้างสังคมที่เข้มแข็งการทำขนมไทยไม่เพียงแต่เป็นศิลปะของการทำอาหาร
              แต่ยังเป็นการถ่ายทอดวัฒนธรรมและความเป็นอยู่ของคนไทยผ่านอาหารที่อร่อยและอบอุ่น
              ทุกจานขนมนี้เต็มไปด้วยรสชาติที่เป็นเอกลักษณ์และทำให้คุณได้สัมผัสถึงความพิเศษของวัฒนธรรมไทย
              เมนูของเราครอบคลุมทุกรสชาติของขนมไทย ตั้งแต่ขนมต้ม ขนมนึ่ง
              ไปจนถึงขนมขนมกวนและขนมทอด
            </p>
            <Link to="/About">
                <button className="button-home-about">
                อ่านรายละเอียดเพิ่มเติม
                </button>
            </Link>
           
          </div>
        </div>
      </div>

      <div className="format-home-img">
        

      </div>

      <div className="format-home-like">
        <div className="home-post-like">
          <h2>สูตรขนมไทยยอดนิยม</h2>
          <h5>สูตรขนมไทยยอดนิยมจากกระดานโพสต์ของสมาชิกเว็บไซด์</h5>
          
         
          <button className="btu-populur-post"> โพสต์ยอดนิยม </button>
        
        
                  
          <div className="all-post-like-home">
            
            <div lassName=" img-margin-top" >
              <img className="img-post-populur" src='./images/img-01.jpg' />
            </div>
            <div lassName=" img-margin-top" >
              <img className="img-post-populur" src='./images/img-02.jpg' />
            </div>
            <div lassName=" img-margin-top">
              <img className="img-post-populur" src='./images/img-03.jpg' />
            </div>
            <div className=" img-margin-top">
              <img className="img-post-populur" src='./images/img-04.jpg' />
            </div>

            <div className=" img-margin-top">
              <img className="img-post-populur" src='./images/img-07.jpg' />
            </div>

            <div className=" img-margin-top">
              <img className="img-post-populur" src='./images/img-08.jpg' />
            </div>


          </div>
        </div>
      </div>

      <div className="home-topicNew-later">
          <h2>ข่าวใหม่ล่าสุด</h2>
        </div>

      <div className="format-home-new">
        <div className="home-new">
          <div className="home-new-img">
            <img
              src="https://static.cordonbleu.edu/Files/MediaFile/77184.jpg"
              className="home-new-box-shadow"
            />
          </div>
        </div>
        <div className="home-new-into">
          <div class="home-new-inner-column">
            <h1>เชฟบีม ภวินวัชร์ ท็อปเชฟไทยแลนด์ ขนมหวานคนแรกของประเทศไทย</h1>

            <p>
              ศิษย์เก่าหลักสูตรการประกอบขนมอบชั้นสูงจากเลอ กอร์ดอง เบลอ ดุสิต
              Top Chef Thailandขนมหวาน คนแรกของประเทศไทย
              ปัจจุบันเป็นเชฟเจ้าของร้านบ.ใบไม้ สัตหีบ by Chef Beam
              ร้านอาหารไทยร่วมสมัยกับเมนูเค้กนานาชนิดที่เป็นจุดขายของทางร้าน
              ขนมเค้กสูตรต้นตำหรับที่ใช้ผลไม้ตามฤดูกาลเข้ามาผสมผสานกันอย่างลงตัว
            </p>
            <Link to="/BlogNews2">
                <button className="button-home-new">
                    อ่านรายละเอียดเพิ่มเติม
                </button>
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
