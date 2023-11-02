import React from "react";
import './BulletinBoardStyle.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class BulletinBoard extends React.Component{
    render(){
        return(
            <div >
                <div className="imgBulletinBoard">
                    <div className="topic-b-new">
                        <h1 className="topic"> ข่าว</h1>
                       
                    </div>
                </div>
                
                <div className="topicNew-later">
                    <h2>ข่าวใหม่ล่าสุด&nbsp;</h2>
                    <p>เว็บไซด์แชร์ขนมไทยครบเครื่องเรื่องข่าวสารขนมไทย</p>
                </div>

                
                <div class="grid-container " >

                    <div>1</div>
                    <div>2</div>
                    <div>3</div>  
                   
                                        
  					
    				{/* <div class="blog-detail">
                            <img src="public\images\stuff-img-01.jpg"/>
							<h4>เชฟบีม ภวินวัชร์ ท็อปเชฟไทยแลนด์ ขนมหวานคนแรกของประเทศไทย</h4>

                            <p>6 กันยายน 2566 </p>
						
							<a>เชฟบีม - ภวินวัชร์ โชคเศรษฐปวินท์ ศิษย์เก่าหลักสูตรการประกอบขนมอบชั้นสูงจากเลอ กอร์ดอง เบลอ ดุสิต Top Chef Thailandขนมหวาน คนแรกของประเทศไทย</a>
							<a class="btn btn-lg btn-circle btn-outline-new-white" href="blog-details1.html">อ่านเพิ่มเติม</a>
						</div> */}
					
				</div>
                

              
             
                

            </div>

         
        )
        

    }
}

export default BulletinBoard;