import React, { useRef } from "react";
// import axios from "axios";
import "./testedStyle.css";

class tested extends React.Component {
  constructor() {
    super();
    this.state = {
      cdn: 0,
      maxCdn: 512,
      box_model: false,
      selectedFile: null, // Track the selected file
    };

    this.hiddenFileInput = React.createRef();
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

  handleClick = (event) => {
    this.hiddenFileInput.current.click();
  };

  handleChange = (event) => {
    const fileUploaded = event.target.files[0];

    // Update the state with the selected file
    this.setState({ selectedFile: fileUploaded });

    this.handleFile(fileUploaded);
  };

  handleFile = (file) => {
    console.log('File Uploaded:', file);
  };

    render() {
      return (
        <div className="Reserve-space-report-comment">
          <button onClick={this.model_check}> showpopup </button>
          {this.state.box_model === true && (
            <div className="background-shadow-report-comment">
              <div className="Model-popup">
                <i
                  className="back-del-report-comment fa-solid fa-xmark"
                  onClick={this.model_check}
                />
                <div className="text-topin-report-comment "> 
                  <h2>รายงานข้อความที่ไม่เหมาะสม</h2>
                </div>
                <div className="format-report-topic-comment">
                    <select className="report-comment-option-style" >
                              <option value="">รายงาน</option>
                              <option value="">ใช้ถ้อยคำหยาบคาย</option>
                              <option value="">มีการใช้ถ้อยคำเหยียดเพศ และ เหยียดเชื้อชาติ ศาสาน</option>
                              <option value="">มีการใช้ถ่อยคำที่รุนแรง</option>  
                        </select>

                </div>
               
                <div className="format-button-report-comment" >
                  <button className="button-report-comment">
                     <h4>รายงาน</h4>
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
