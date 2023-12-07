import React from "react";
import {useState} from "react";
import './ProfileStyle.css';

const Profile = () => {
  const [hide ,setHide]=useState(false);
  const hideButtonA = ()=>{
      setHide(true);
     
  };
  const  hideButtonB =()=>{
    setHide(false);

  }
  return (
    <div>
      
      <div className="p-grid-container">
        <div className="p-box">
          <div class="p-h2">
            <h2 >Name</h2>
          </div>
        
          {/* <div class=" content-img">
            <img src="images/8747741.jpg"  class="p-img-fluid" alt="profile"/>
            <div class="p-padding-problem">
              <a class="p-button fa fa-envelope" href="i#"> 
              แจ้งปัญหา
              </a>
              <a class="p-button fa fa-envelope" href="i#"> 
              แจ้งปัญหา
              </a>
            </div>
          </div> user*/}

          <div class=" content-img">
            <img src="images/8747741.jpg"  class="p-img-fluid" alt="profile"/>
            <div class="btn-group-amind ">
              <a class="a-button fa fa-user" href="i#"> 
              ข้อมูลส่วนตัว
              </a>
              <a class="a-button fa fa-exclamation-triangle" href="i#"> 
              จัดการปัญหา
              </a>
              <a class="a-button fa fa-exclamation-circle" href="i#"> 
              โพสต์ที่ไม่เหมาะสม
              </a>
            </div>
          </div>
        </div>

        

        <div class="">
          <h3 class="p-h3"> ข้อมูลส่วนตัว</h3>
          <div class='p-padding-eadit'>
          <button class='p-button-edit fa fa-pencil-square ' onClick={hideButtonA}>
            แก้ไขโปรไฟล์ 
           </button>
          </div>
          <div class='p-margin'>
            <label>
              <h5> ชื่อผู้ใช้งาน : </h5>    
            </label> 
            <label>
               Meow
            </label>
            <br></br>
            <label>
              <h5> ชื่อ :</h5> 
            </label>
            <label>
               เหมี้ยว
            </label>
            <br></br>
            <label>
              <h5> นามสกุล :</h5> 
            </label>
            <label>
               เหมี้ยวเล็ก
            </label>
            <br></br>
            <label>
              <h5> เพศ :</h5> 
            </label>
            <label>
               หญิง
            </label>
            <br></br>
            <label>
              <h5> วันเกิด :</h5> 
            </label>
            <label>
              15/01/2544
            </label>
            <br></br>
            <label>
             <h5> อีเมล :</h5> 
            </label>
            <label>
               neow@gmail.com
            </label>
            <br></br>
            <label>
              <h5> รหัส :</h5>
            </label>
            <label>
               *************
            </label>
            <br></br>

          
          
          </div>
        
        
          <div className="p-padding-eadit">
          {hide ? <button className="p-button-save fas fa-circle-check" onClick={hideButtonB}>
              บันทึกโปรไฟล์
            </button> : null}

          </div>
          
           </div>
         
     

        

      </div>
    

  
    </div>
  );
};

Profile.className = "profile";

export default Profile;
