import React from "react";
import './PostBoardStyle.css';
import Avatar from 'react-avatar';
import data from './data/PostBoardData.json';

class PostBoard extends React.Component{
    render(){
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
                                            <div class='button-profile'><button>...<i class="fas fa-caret-down" /></button></div>
                                        </div>
                                    <hr></hr>
                                        <div class='conten-center'>
                                            <div class='time-conten'><i class='fas fa-clock'/><span>{pf.timeline}</span></div>
                                        <div class='title-conten'>
                                            <h3>{pf.title}</h3>
                                        </div>
                                    <div class='text-conten'>
                                        <p>{pf.text_conten}</p>
                                    </div>
                                        <div class='img-content'>
                                            {pf.imgc ? <img src={pf.imgsrc} alt={pf.imgc} /> : <p>maime</p> }
                                        </div>
                                    <hr></hr>
                                        <div class='comment-conten'>
                                            <button class='likebtn'><i id='like' class='fas fa-heart'/>Like</button>
                                            <button class='componentbtn'><i id='comment' class='fas fa-comment'/> Component</button>
                                        </div>
                                    </div>
                                </div>
                })}
                </div>
                <div class='i-center'>3</div>
            </div>
        )
    }
}
export default PostBoard;