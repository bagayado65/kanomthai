import React from "react";
import './UserProblem.css';

class UserProblem extends React.Component {
    render() {
      return (
        <div>
            <div className="grid-container-P">
            <div className="formbold-main-wrapper">
                <from className=" ">
                    <label for="topic">แจ้งปัญหาเรื่อง </label>
                    <br/>
                    <input type="Topic" />
                    <br/>
                </from>
            
            </div>
      
            

            <div className="formbold-main-wrapper ">
                
                    <p>ปัญหา</p>
                   
                    <label class="container-p">โพสต์
                        <input type="radio" checked="checked" name="radio"/> 
                        <span class="checkmark"></span>
                    </label>
                    <label class="container-p">ข้อมูลส่วนตัว
                        <input type="radio" name="radio"/>
                        <span class="checkmark"></span>
                    </label>
                    <label class="container-p">การใช้งาน
                        <input type="radio" name="radio"/>
                        <span class="checkmark"></span>
                    </label>
                    <label class="container-p">อื่นๆ
                        <input type="radio" name="radio"/>
                        <span class="checkmark"></span>
                    </label>
              
            </div>

            <div className="formbold-main-wrapper">
                <form>
                    <p>รายละเอียด</p>
                    <textarea>Some text...</textarea>
                </form>
            </div>
            

            </div>
           
            

        </div>
       
      );
    }
  }
  
  export default UserProblem ;
  