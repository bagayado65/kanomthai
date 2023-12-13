import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import moment from "moment";
import "./ProfileStyle.css";
// import { format } from "date-fns";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      host_url: "http://localhost:8800",
      auth_id: JSON.parse(sessionStorage.getItem("auth")).user.username,
      user_selected: [],
      btn_edit: false,
      isUser_id: null,
      isUsername: "",
      isFristname: "",
      isLastname: "",
      isGender: "",
      isBirthday: null,
      picture: null,
      isEmail: "",
      cdn: 0,
      maxCdn: 512,
      box_model: false,
      typeReport: "",
      content: "",
      pictureReport: null,
    };
  }
  componentDidMount() {
    axios
      .get(this.state.host_url + "/user/" + this.state.auth_id)
      .then((response) => {
        console.log("data didM :" + response);
        this.setState({ user_selected: response.data });
        console.log(response.data[0].image);
        const blob = new Blob([new Uint8Array(response.data[0].image.data)], {
          type: "image/jpeg",
        });
        const blobUrl = URL.createObjectURL(blob);
        this.setState({ picture: blobUrl });
        return () => URL.revokeObjectURL(blobUrl);
        // document.queryselector("#myimage").src = blobData
      })
      .catch((error) => {
        console.error("Error!! หาข้อมูลไม่ได้", error);
      });
    // console.log(this.state.user_selected);
  }

  //trans to uservalue
  trans_datas = () => {
    this.state.user_selected.map((e) =>
      this.setState({
        isUser_id: e.user_id,
        isUsername: e.username,
        isFristname: e.fristname,
        isLastname: e.lastname,
        isGender: e.gender,
        isBirthday: e.birthday,
        isEmail: e.email,
      })
    );
  };

  //popup
  model_check = () => {
    this.setState({ box_model: !this.state.box_model });
    this.trans_datas();
    this.setState({ cdn: 0 });
  };
  countLebgth = (event) => {
    this.setState({
      cdn: event.target.value.length,
    });
  };
  sendReportProblem = (event) => {
    console.log(event.target.id);
    console.log(event.target.value);
    let tag_id = event.target.id;
    let value = event.target.value;
    if (tag_id === "post" || tag_id === "private" || tag_id === "other") {
      this.setState({ typeReport: value });
    } else if (tag_id === "contentText") {
      this.setState({ content: value });
    }
    console.log("typeReport :" + this.state.typeReport);
    console.log("centent :" + this.state.content);
    console.log("img :" + this.state.pictureReport);
    console.log(this.state.isUser_id);
  };
  savePicture = (event) => {
    const files = event.target.files[0];
    this.setState({ pictureReport: files });
    // const image = event.target.files[0];
    // const formData = new FormData();
    // formData.append('image',image);
    // axios.post(this.state.host_url+"/abcsss",formData);
  };
  submitReportProblem = () => {
    let user_id = this.state.isUser_id;
    // let problem_dateTime = new Date();

    let dt = moment(Date.now()).format();
    let problem = this.state.typeReport;
    let problem_info = this.state.content;
    let problem_status = 0;
    let image = this.state.pictureReport;
    const formData = new FormData();
    formData.append("user_id", user_id);
    formData.append("dt", dt);
    formData.append("problem", problem);
    formData.append("problem_info", problem_info);
    formData.append("problem_status", problem_status);
    formData.append("image", image);
    console.log(image);
    var trueInsert = false;
    if (problem !== "" && problem_info === "" && image) {
      trueInsert = true;
    } else if (problem !== "" && problem_info !== "" && image) {
      trueInsert = true;
    } else {
      Swal.fire({
        icon: "error",
        title: "กรุณาใส่หัวข้อปัญหาด้วย!!",
        showConfirmButton: false,
        timer: 1000,
      }).then((respon) => console.log(respon));
    }
    if (trueInsert === true) {
      axios
        .post(this.state.host_url + "/ReportProblem", formData)
        .then(
          Swal.fire({
            icon: "success",
            title: "บันทึกสำเร็จ!!",
            showConfirmButton: false,
            timer: 1000,
          }).then((e) => {
            window.location.reload(true);
          })
        )
        .catch((e) =>
          Swal.fire({
            icon: "error",
            title: "บันทึกไม่สำเร็จ!!",
            showConfirmButton: false,
            timer: 1000,
          }).then((respon) => console.log(respon))
        );
    }
  };

  showBtn = () => {
    this.setState({
      btn_edit: !this.state.btn_edit,
    });
    this.trans_datas();
    console.log(this.state.picture);
    // console.log(this.state.user_selected[0].image);
    // this.setState({ picture :  new Buffer.from(this.state.user_selected[0].image).toString("base64")});
  };

  hideBtn = () => {
    this.setState({
      btn_edit: false,
    });
    let fristname = this.state.isFristname;
    let lastname = this.state.isLastname;
    let gender = this.state.isGender;
    let birthday = this.state.isBirthday;
    let email = this.state.isEmail;
    axios
      .put(this.state.host_url + "/updateProfile/" + this.state.auth_id, {
        fristname,
        lastname,
        gender,
        birthday,
        email,
      })
      .then((response) => {
        console.log(response);
        Swal.fire({
          icon: "success",
          title: "บันทึกสำเร็จ!!",
          showConfirmButton: false,
          timer: 1000,
        }).then((e) => {
          window.location.reload(true);
        });
      })
      .catch((error) => {
        console.error("Error!! ข้อมูลขัดข้อง", error);
      });
    console.log(
      fristname + "/" + lastname + "/" + gender + "/" + birthday + "/" + email
    );
  };

  //img upload
  //update img
  imgChangUpload = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    try {
      axios
        .put(this.state.host_url + "/upload/" + this.state.auth_id, formData)
        .then(
          Swal.fire({
            icon: "success",
            title: "บันทึกรูปภาพสำเร็จ!!",
            showConfirmButton: false,
            timer: 1000,
          }).then((e) => {
            console.log(e);
            window.location.reload(true);
          })
        );
    } catch (error) {
      console.error("Error updating or fetching image:", error.message);
    }
  };
  // dd/mm/yyyy
  dateFormat(strDate) {
    var strSplitDate = String(strDate).split(" ");
    var date = new Date(strSplitDate[0]);
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!

    var yyyy = date.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    date = dd + "/" + mm + "/" + yyyy;
    return date.toString();
  }
  // validateEmail(email){
  //     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  //     return emailRegex.test(email);
  // }
  onchangInput = (event) => {
    console.log("input_id :" + event.target.id);
    console.log("value :" + event.target.value);
    switch (event.target.id) {
      case "select-gender":
        console.log(event.target.value);
        this.setState({ isGender: event.target.value });
        break;
      case "birthday":
        console.log(this.dateFormat(event.target.value));
        this.setState({ isBirthday: this.dateFormat(event.target.value) });
        break;
      case "fristname":
        console.log(event.target.value);
        this.setState({ isFristname: event.target.value });
        break;
      case "lastname":
        console.log(event.target.value);
        this.setState({ isLastname: event.target.value });
        break;
      case "email":
        console.log(event.target.value);
        this.setState({ isEmail: event.target.value });
        break;
      default:
        break;
    }
  };
  render() {
    return (
      <div>
        {/* <p>{this.state.picture+"/"+this.state.isFristname+"/"+this.state.isLastname+"/"+this.state.isGender+"/"+this.state.isBirthday+"/"+this.state.isEmail}</p> */}
        <div className="p-grid-container">
          <div className="p-box">
            <div className="p-h2">
              {this.state.user_selected.map((ps) => (
                <h4 key={ps.user_id}>{ps.fristname + " " + ps.lastname}</h4>
              ))}
            </div>
            <div className="content-img">
              <img
                src={
                  this.state.picture ? this.state.picture : "images/8747741.jpg"
                }
                id="myimage"
                // className="p-img-fluid"
                width="150"
                height="120"
                alt="profile"
              />
              <div>
                <input type="file" onChange={this.imgChangUpload} />
              </div>
              <div className="p-padding-problem">
                <button
                  className="p-button fa fa-envelope"
                  onClick={this.model_check}
                >
                  แจ้งปัญหา
                </button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="p-h3"> ข้อมูลส่วนตัว</h3>
            <div className="p-padding-eadit">
              <button
                className="p-button-edit fa fa-pencil-square "
                onClick={this.showBtn}
              >
                แก้ไขโปรไฟล์
              </button>
            </div>
            {/* <p>{this.state.isUsername}</p> */}
            {this.state.user_selected.map((p) => (
              <div className="p-margin" key={p.user_id}>
                <label>
                  <h5>
                    {" "}
                    ชื่อผู้ใช้งาน :{" "}
                    {this.state.btn_edit ? p.username : p.username}
                  </h5>
                </label>
                <br></br>
                <label>
                  <h5>
                    {" "}
                    ชื่อ :{" "}
                    {this.state.btn_edit ? (
                      <input
                        id="fristname"
                        placeholder={p.fristname}
                        onChange={this.onchangInput}
                      ></input>
                    ) : (
                      p.fristname
                    )}
                  </h5>
                </label>
                <br></br>
                <label>
                  <h5>
                    {" "}
                    นามสกุล :{" "}
                    {this.state.btn_edit ? (
                      <input
                        id="lastname"
                        placeholder={p.lastname}
                        onChange={this.onchangInput}
                      ></input>
                    ) : (
                      p.lastname
                    )}
                  </h5>
                </label>
                <br></br>
                <label>
                  <h5>
                    {" "}
                    เพศ :{" "}
                    {this.state.btn_edit ? (
                      <select
                        id="select-gender"
                        onChange={this.onchangInput}
                        value={this.state.isGender}
                      >
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="orther">orther</option>
                      </select>
                    ) : (
                      p.gender
                    )}
                  </h5>
                </label>
                <br></br>
                <label>
                  <h5>
                    {" "}
                    วันเกิด :{" "}
                    {this.state.btn_edit ? (
                      <input
                        type="date"
                        id="birthday"
                        onChange={this.onchangInput}
                      ></input>
                    ) : (
                      p.birthday
                    )}
                  </h5>
                </label>
                <br></br>
                <label>
                  <h5>
                    {" "}
                    อีเมล :{" "}
                    {this.state.btn_edit ? (
                      <input
                        id="email"
                        type="email"
                        placeholder={p.email}
                        onChange={this.onchangInput}
                      ></input>
                    ) : (
                      p.email
                    )}
                  </h5>
                </label>
                <br></br>
              </div>
            ))}
            <div className="p-padding-eadit">
              {this.state.btn_edit ? (
                <button
                  className="p-button-save fas fa-circle-check"
                  onClick={this.hideBtn}
                >
                  บันทึกโปรไฟล์
                </button>
              ) : null}
            </div>
          </div>
        </div>
        <div className="Reserve-sp">
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
                  <label>ชื่อผู้ใช้งาน : {this.state.isUsername}</label>
                </div>
                <div className="chang-format-center-radio ">
                  <span className="red-point">*</span>
                  <label>หัวข้อปัญหา ? </label>
                  <br></br>
                  <div className="radio-format">
                    <input
                      className="radio-paning"
                      type="radio"
                      id="post"
                      name="problem_topic"
                      value="post"
                      onClick={this.sendReportProblem}
                    ></input>
                    <label htmlFor="post">โพสต์</label>
                    <input
                      className="radio-paning"
                      type="radio"
                      id="private"
                      name="problem_topic"
                      value="private"
                      onClick={this.sendReportProblem}
                    ></input>
                    <label htmlFor="private">ข้อมูลส่วนตัว</label>
                    <input
                      className="radio-paning"
                      type="radio"
                      id="other"
                      name="problem_topic"
                      value="other"
                      onClick={this.sendReportProblem}
                    ></input>
                    <label htmlFor="other">อื่นๆ</label>
                  </div>
                </div>
                <div className="format-button-img">
                  <span className="red-point">*</span>
                  <input
                    className="custom-file-input"
                    id="foo"
                    type="file"
                    onChange={this.savePicture}
                  />
                </div>
                <div className="box-message-format">
                  <label>รายละเอียด</label>
                  <textarea
                    id="contentText"
                    className="box-text"
                    onChange={this.countLebgth}
                    onKeyUp={this.sendReportProblem}
                  ></textarea>
                  <p>
                    {this.state.cdn} / {this.state.maxCdn}
                  </p>
                </div>
                <div className="format-button">
                  <button
                    className="button-problem"
                    onClick={this.submitReportProblem}
                  >
                    <h4>ส่งปัญหา</h4>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Profile;
