import React from "react";
import "./AdminPageStyle.css";

class AdminPage extends React.Component {
    constructor(){
        super();
        this.state = {
            defaultAvatar: './jpgs/defaultAvatar.jpg',
            host_url: "http://localhost:8800",
            auth_id: null,
            user_selected: [],
        }
    }
    render(){
        return(
            <div className="Reserve-space">
            <div className="top-title-admin">
                <div className="top-content-admin">
                    <div className="admin-img" >
                        <img className="border-img" src="./pngs/3.png" width='100'height='100' alt="profile"/>
                    </div>
                    <div className="text-admin">
                        <p>Admin</p>
                        <p>Admin@gmail.com</p>
                    </div>
                    
                </div>
                <div className="top-content-admin-topin" >
                    <h2>กล่องจัดการปัญหา</h2>
                </div>
                
            </div>
            <div className="content-admin">
                <div className="content-admin-problem">
                    <button className="button-admin"><i className="coloricon-padding fa-solid fa-circle-exclamation" > </i> จัดการปัญหา</button>
                    <button className="button-admin"><i className="coloricon fa-solid fa-triangle-exclamation"></i> รายงานโพสต์ที่ไม่เหมาะสม</button>
                    <button className="button-admin"><i className="coloricon-like fa-solid fa-solid fa-thumbs-up"></i> โพสต์ที่แอดมินแนะนำ</button>
                    <button className="button-admin"><i className="coloricon-padding fa-solid fa-solid fa-bars"></i> ข่าวสาร</button>
                    <button className="button-admin"><i className="coloricon-new fa-solid fa-circle-plus"></i> เพิ่มข่าวสาร</button>

                </div>
                <div className="content-admin-problem-table"> ตาราง</div>

            </div>
        </div>
        )
    }
}
export default AdminPage;