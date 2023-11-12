import React from "react";
import "./BulletinBoardStyle.css";
import { Link } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

class BulletinBoard extends React.Component {
  render() {
    return (
      <div>
        <div className="imgBulletinBoard">
          <div className="topic-b-new">
            <h1 className="topic"> ข่าว</h1>
          </div>
        </div>

        <div className="topicNew-later">
          <h2>ข่าวใหม่ล่าสุด&nbsp;</h2>
          <p>เว็บไซด์แชร์ขนมไทยครบเครื่องเรื่องข่าวสารขนมไทย</p>
        </div>

        <div class="Bulletin-grid-container ">
          <div class="Bulletin-card">
            <img
              src="https://img.pptvhd36.com/health/thumbor/2022/12/15/cusArticle-05a1235.avif"
              class="Bulletin-image  "
            />

            <div class="Bulletin-content ">
              <a href="#">
                <span class="Bulletin-title ">
                  ปริมาณน้ำตาลใน "ขนมไทย" กินได้แต่พอดี ลดเสี่ยงก่อโรคเบาหวาน
                </span>
              </a>

              <p class="desc">
                ขนมไทยในงานมงคลต่างๆ โดยเฉพาะใกล้เทศกาลปีใหม่
                มักมีขนมนมเนยและขนมไทยร่วมในลิสต์เฉลิมฉลอง
                เพราะรสชาติหวานที่ถูกใจ และคุ้ยเคย
              </p>

              <Link to="/BlogNews">
                <button class=" Bulletin-button "> อ่านเพิ่มเติม </button>
              </Link>
            </div>
          </div>
          <div class="Bulletin-card">
            <img
              src="https://static.cordonbleu.edu/Files/MediaFile/77184.jpg"
              class="Bulletin-image  "
            />

            <div class="Bulletin-content ">
              <a href="#">
                <span class="Bulletin-title ">
                  เชฟบีม ภวินวัชร์ ท็อปเชฟไทยแลนด์ ขนมหวานคนแรกของประเทศไทย
                </span>
              </a>

              <p class="desc">
                เชฟบีม - ภวินวัชร์ โชคเศรษฐปวินท์
                ศิษย์เก่าหลักสูตรการประกอบขนมอบชั้นสูงจากเลอ กอร์ดอง เบลอ ดุสิต
                Top Chef Thailandขนมหวาน คนแรกของประเทศไทย
              </p>

              <Link to="/BlogNews2">
                <button class=" Bulletin-button "> อ่านเพิ่มเติม </button>
              </Link>
            </div>
          </div>
          <div class="Bulletin-card">
            <img
              src="https://media.komchadluek.net/uploads/images/contents/w1024/2022/08/8h1cVt9sCpmlQkumfRAp.webp"
              class="Bulletin-image  "
            />

            <div class="Bulletin-content ">
              <a href="#">
                <span class="Bulletin-title ">
                  ลูกชุบ" ขนมไทย ทำไมถึงดังไกล ครองใจผู้บริโภคชาวจีน ทำขายราคาดี
                </span>
              </a>

              <p class="desc">
                ครจะรู้ว่าขนมไทย ที่มีความโดดเด่นด้วยรูปลักษณ์ มีสีสันที่สวยงาม
                หน้าตาน่ารับประทานสุด ๆ และมีรสชาติหวานหอมอร่อยมากเช่นกัน
                อย่างขนม "ลูกชุบ"
              </p>

              <Link to="/BlogNews3">
                <button class=" Bulletin-button "> อ่านเพิ่มเติม </button>
              </Link>

             
             
            </div>
          </div>
          <div class="Bulletin-card">
            <img
              src="https://static.thairath.co.th/media/Dtbezn3nNUxytg04aiHunbJ3Ckv9avYOwdKFKrWfZ73BOF.webp"
              class="Bulletin-image  "
            />

            <div class="Bulletin-content ">
              <a href="#">
                <span class="Bulletin-title ">
                  สุดยอดนักปั้นบัวลอย มือวางอันดับหนึ่งเมืองโอ่ง เร็วสุดวินาทีละ
                  2 เม็ด
                </span>
              </a>

              <p class="desc">
                ที่ร้านบัวลอยอรวรรณ บริเวณหน้าวัดโรงช้าง อ.เมือง จ.ราชบุรี
                มีสุดยอดนักปั้นบัวลอยเร็ววินาทีละ 2 เม็ด แถมรสชาติอร่อย
                จนมีลูกค้าติดอกติดใจ มาอุดหนุนกันเป็นจำนวนมากm
              </p>

              <Link to="/BlogNews4">
                <button class=" Bulletin-button "> อ่านเพิ่มเติม </button>
              </Link>
             
            </div>
          </div>
          <div class="Bulletin-card">
            <img
              src="https://image.bangkokbiznews.com/uploads/images/md/2022/10/xOhyh3Rj0dLW8Z4t5Und.webp?x-image-process=style/LG-webp"
              class="Bulletin-image  "
            />

            <div class="Bulletin-content ">
              <a href="#">
                <span class="Bulletin-title ">
                  ร้านขนมไทย “หวานไทย” ผู้สืบสานภูมิปัญญาไทย
                </span>
              </a>

              <p class="desc">
                ร้านขนมไทย หวานไทย (Waan Thai) โดย เชฟชุมพล แจ้งไพร
                เปิดใหม่ติดกับร้าน อาหาร (R-HAAN) เพื่อต่อยอด อาหารไทย และ
                ขนมไทย ในดีไซน์สวย ฯ
              </p>

              <Link to="/BlogNews5">
                <button class=" Bulletin-button "> อ่านเพิ่มเติม </button>
              </Link>
       
            </div>
          </div>
          <div class="Bulletin-card">
            <img
              src="https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5BYc4mGUmcA0Hf2QtYIgKPrZG9coNQyDuSfzclfp2W9dWlqJtzj.webp"
              class="Bulletin-image  "
            />

            <div class="Bulletin-content ">
              <a href="#">
                <span class="Bulletin-title ">
                  ขนมใส่ไส้” สูตรไม่ธรรมดา ขายดิบขายดีมากว่า 10 ปี
                </span>
              </a>

              <p class="desc">
                ขนมใส่ไส้ ตรงข้ามโรงเรียนประชาราษฎร์อุปถัมภ์วิทยา
                ใกล้สี่แยกลำกะโหลก ถนนพระยาสุเรนทร์ แขวงบางชัน กทม.
                ยืนหนึ่งเรื่องความอร่อยมานานนับ 10 ปีเต็มแล้ว
              </p>

              <Link to="/BlogNews6">
                <button class=" Bulletin-button "> อ่านเพิ่มเติม </button>
              </Link>
              
            </div>
          </div>
        </div>

        {/* <div class="blog-detail">
                            <img src="public\images\stuff-img-01.jpg"/>
							<h4>เชฟบีม ภวินวัชร์ ท็อปเชฟไทยแลนด์ ขนมหวานคนแรกของประเทศไทย</h4>

                            <p>6 กันยายน 2566 </p>
						
							<a>เชฟบีม - ภวินวัชร์ โชคเศรษฐปวินท์ ศิษย์เก่าหลักสูตรการประกอบขนมอบชั้นสูงจากเลอ กอร์ดอง เบลอ ดุสิต Top Chef Thailandขนมหวาน คนแรกของประเทศไทย</a>
							<a class="btn btn-lg btn-circle btn-outline-new-white" href="blog-details1.html">อ่านเพิ่มเติม</a>
						</div> */}
      </div>
    );
  }
}

export default BulletinBoard;
