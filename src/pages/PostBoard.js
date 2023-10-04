import React from "react";
import './PostBoardStyle.css';
import Avatar from 'react-avatar';
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import { Outlet, Link } from "react-router-dom";
// import ReadMore from 'read-more-react';
// import ReadMore from "../components/ReadMore";
import data from './data/PostBoardData.json';
// import data from './data/PostBoardDataTest.json';

class PostBoard extends React.Component{
    constructor(){
        super();
        this.state = {
            showAndHide:false
        };
        this._hiddenDisplay = this._hiddenDisplay.bind(this);
    }
    _hiddenDisplay(){
        this.setState({showAndHide:!this.state.showAndHide});
    }
    render(){
        const {showAndHide} = this.state;
        return(
            <div class='g-center'> {/*หน่ากรอกข้อมูลโพสต์*/}
                <div class='i-center left'>
                <select id='category' class='select-style'>
                    {data.category_kanomthai.map((kanom) => {
                        return <option value={kanom.id}>{kanom.name}</option>
                    })}
                    {/* <option value='defult' selected>ประเภทขนมไทย</option>
                    <option value='1'>ประเภทขนมไทย 1</option>
                    <option value='2'>ประเภทขนมไทย 2</option>
                    <option value='3'>ประเภทขนมไทย 3</option> */}
                </select>
                </div>
                <div class='i-center conten'>
                    <div class='top-title'>
                        <div class='title-text'><button class='btn-post'>POST</button><hr></hr></div>
                        <div class='area-conten'><textarea class='text-areas' placeholder="What are you thinking?"></textarea></div>
                        <div class='under-conten'><button class='btn-share'>SHARE</button></div>
                    </div>
                {data.profile_kanomthai.map((pf) => {
                        return  <div class='footed-title'> {/*หน่าโพสต์*/}
                                        <div class='title-post'>
                                            <div class='avtars'>
                                                <Avatar name={pf.nick_name} round="180px" size="60"/>
                                            </div>
                                            <div class='namespacs'>
                                                <h4 class='namespacs-nickname'>{pf.tag_name}</h4>
                                                <span class='namespacs-name'>{pf.name}</span>
                                            </div>
                                            <Popup trigger={<div class='button-profile'><button>...<i class="fas fa-caret-down" /></button></div>} position="bottom center">
                                                <div className="popup-profile">
                                                    <div className="popup-profile-btn">
                                                        <Link id='stylelink' to="/profile">ข้อมูลบัญชี</Link>
                                                    </div>
                                                    <div className="popup-profile-btn">
                                                        <button>ออกจากระบบ</button>
                                                    </div>
                                                    <Outlet />
                                                </div>
                                            </Popup>
                                            {/* <div class='button-profile'><button>...<i class="fas fa-caret-down" /></button></div> */}
                                        </div>
                                    <hr></hr>
                                        <div class='conten-center'>
                                            <div class='time-conten'><i class='fas fa-clock'/><span>{pf.timeline}</span></div>
                                        <div class='title-conten'>
                                            <h3>{pf.title}</h3>
                                        </div>
                                    <div class='text-conten'>
                                        {/* {console.log(pf.text_conten.toString().length)} */}
                                       {pf.text_conten.map((lt,i) => (
                                            <p key={i}>{lt}</p> 
                                        ))}            
                                    </div>
                                        <div class='img-content'>
                                            {pf.imgc ? <img src={pf.imgsrc} alt={pf.imgc} /> : <p>maime</p> }
                                        </div>
                                    <hr></hr>
                                        <div class='comment-conten'>
                                            <button class='likebtn'><i id='like' class='fas fa-heart'/>Like</button>
                                            <button class='componentbtn' onClick={this._hiddenDisplay}><i id='comment' class='fas fa-comment'/> Component</button>
                                        </div>
                                        <hr></hr>
                                        { showAndHide && (                                        
                                        <div className="comment-use">
                                            <div className="user-comment">
                                            {/* <span className="text-comment"></span> 
                                            <Avatar name={pf.commnet_User.name} round="180px" size="30"/>*/}
                                            {console.log(Object.keys(pf.commnet_User).length)}
                                            {Object.keys(pf.commnet_User).length < 0 ? (
                                                <span>ไม่มีคอมเม้น</span>
                                            ) : (<div>{pf.commnet_User.map((e) => {
                                                return <div><Avatar name={e.name} round="180px" size="30"/><span className="text-comment">{e.comment}</span></div>
                                            })}</div>)}
                                            </div>
                                        </div>)}
                                    </div>
                                </div>
                })}
                </div>
                <div class='i-center'>
                    <div className="i-search">
                        <input className="i-input-search" placeholder="Search"></input><i class='fas fa-search'></i>
                    </div>
                    {data.img_advert.map((imc) => {
                        return <div className="i-advert">
                                    <img src={imc.imgsrc} alt="A" />
                               </div>
                    })}
                </div>
            </div>
        )
    }
}
export default PostBoard;