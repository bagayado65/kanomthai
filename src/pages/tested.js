import React from "react";
// import axios from "axios";
import "./testedStyle.css";

class tested extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        cdn: 0,
        maxCdn: 512,
        box_model: false,
      };
    }
    componentDidCatch() {}
    model_check = () => {
      this.setState({ box_model: !this.state.box_model });
    };
    countLebgth = (event) => {
      this.setState({
        cdn: event.target.value.length,
      });
    };
    render() {
      return (
        <div className="Reserve-space">
          {/* <div className="top-title-admin">
                  <div>{this.state.cdn} / {this.state.maxCdn}</div>
                  <div><textarea type="text" onChange={this.countLebgth} maxlength="512" /></div>
              </div> */}
          <button onClick={this.model_check}> showpopup </button>
          {this.state.box_model === true && (
            <div className="background-shadow">
              <div className="Model-popup">
                <i
                  className="back-del fa-solid fa-xmark"
                  onClick={this.model_check}
                />
                <div className="text-topin-Problem"> 
                  <h2> แจ้งปัญหา</h2>
                </div>
                <div className="chang-format-center">
                  <label>ชื่อผู้ใช้งาน : {this.props}</label>
                </div>
                <div className="chang-format-center-radio ">
                  <label>หัวข้อปัญหา ?</label>
                  <br></br>
                  <div className="radio-format">
                    
                    <input className="radio-paning"
                      type="radio"
                      id="post"
                      name="problem_topic"
                      value="post"
                    ></input>
                    <label htmlFor="post">โพสต์</label>
                    <input className="radio-paning"
                      type="radio"
                      id="private"
                      name="problem_topic"
                      value="private"
                    ></input>
                    <label htmlFor="private">ข้อมูลส่วนตัว</label>
                    <input className="radio-paning"
                      type="radio"
                      id="other"
                      name="problem_topic"
                      value="other"
                    ></input>
                    <label htmlFor="other">อื่นๆ</label>
                  </div>
                </div>
                <div className="format-button-img">
                   <input  type='file'/> 
                </div>
                <div className="box-message-format">
                  <label>รายละเอียด</label>
                  <textarea className="box-text"></textarea>
                  <p>0 / 512</p>
                </div>
                <div className="format-button" >
                  <button className="button-problem">
                     <h4>ส่งปัญหา</h4>
                    </button>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }
  }
  export default tested;