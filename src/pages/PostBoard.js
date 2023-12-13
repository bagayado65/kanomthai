import React from "react";
import "./PostBoardStyle.css";
import Avatar from "react-avatar";
import BlobImage from "./BlobImage ";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Outlet, Link } from "react-router-dom";
import data from "./data/PostBoardData.json";
import moment from "moment";
import axios from "axios";
import ReadMore from "../components/ReadMore";
import Blobimg from "./Blobimg";
import Swal from "sweetalert2";
class PostBoard extends React.Component {
  constructor() {
    super();
    this.state = {
      host_url: "http://localhost:8800",
      auth_id: null,
      user_selected: [],
      data_long_post: [],
      showAndHide: false,
      box_model: false,
      selectedFile: null,
      picture: null,
      admin_category: null,
      select_id_category: null,
      select_catagory: null,
      select_info_areas: null,
      picture_post: null,
    };
    this._hiddenDisplay = this._hiddenDisplay.bind(this);
    this.hiddenFileInput = React.createRef();
  }
  componentDidMount() {
    try {
      axios
        .get(
          this.state.host_url +
            "/user/" +
            JSON.parse(sessionStorage.getItem("auth")).user.username
        )
        .then((response) => {
          this.setState({ user_selected: response.data });
          const blob = new Blob([new Uint8Array(response.data[0].image.data)], {
            type: "image/jpeg",
          });
          const blobUrl = URL.createObjectURL(blob);
          this.setState({ picture: blobUrl });
          return () => URL.revokeObjectURL(blobUrl);
        })
        .then((e) => {
          console.log("Login แล้ว!");
          axios.get(this.state.host_url + "/getShowPost").then((res) => {
            this.setState({ data_long_post: res.data });
            console.log(this.state.data_long_post);
          });
        })
        .catch((error) => {
          console.error("Error!! หาข้อมูลไม่ได้", error);
        });
    } catch (error) {
      console.log("ยังไม่มีการ Login!");
    }
    try {
      axios.get(this.state.host_url + "/admin_category").then((res) => {
        this.setState({ admin_category: res.data });
        console.log(this.state.admin_category);
      });
    } catch (error) {
      console.log("ค้นหาข้อมูลไม่เจอ", error);
    }
  }
   NewlineText = (props) => {
    const text = props;
    const newText = text.split('\n').map(str => <p>{str}</p>);
    
    return newText;
  }
  
  _hiddenDisplay() {
    this.setState({ showAndHide: !this.state.showAndHide });
  }
  //popup post
  model_check = () => {
    this.setState({ box_model: !this.state.box_model });
    this.setState({ select_info_areas : null });
    this.setState({ selectedFile : null });
  };
  handleClick = (event) => {
    this.hiddenFileInput.current.click();
  };
  submitData = (e) => {
    switch (e.target.id) {
      case "select_kanomthai":
        if (e.target.value === "noSelect") {
          console.log("ไม่เก็บ");
          this.setState({ select_catagory: null });
          this.setState({ select_id_category: null });
        } else {
          this.setState({ select_catagory: e.target.value });
          this.setState({
            select_id_category: e.target.selectedOptions[0].text,
          });
          console.log(
            "old category : " +
              this.state.select_catagory +
              "/" +
              this.state.select_id_category
          );
        }
        break;
      case "text_area_post":
        this.setState({ select_info_areas: e.target.value });
        console.log("text_areas_post : " + e.target.value);
        break;
      default:
        break;
    }
  };
  submitDataPost = () => {
    let user_id = this.state.user_selected[0].user_id;
    let dateTime = moment(Date.now()).format();
    let text = this.state.select_info_areas;
    let image = this.state.selectedFile;
    const formData = new FormData();
    formData.append("user_id", user_id);
    formData.append("image", image);
    formData.append("post_info", text);
    formData.append("post_date_time", dateTime);
    // console.log(user_id+"/"+dateTime+"/"+text+"/"+image)
    if (image === null) {
      if (
        this.state.select_catagory === null ||
        this.state.select_id_category === null
      ) {
        Swal.fire({
          icon: "warning",
          title: "กรุณาใส่ประเภทด้วย!!",
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        formData.delete("image");
        try {
          axios
            .post(this.state.host_url + "/postInsertNopicture", formData)
            .then((e) => {
              console.log("inserted!!");
              const formData = new FormData();
              formData.append(
                "category_thai_dessert_id",
                this.state.select_id_category
              );
              formData.append(
                "category_thai_dessert",
                this.state.select_catagory
              );
              axios
                .post(this.state.host_url + "/categoryInsert", formData)
                .then((e) => {
                  Swal.fire({
                    icon: "success",
                    title: "บันทึกสำเร็จ!!",
                    showConfirmButton: false,
                    timer: 1000,
                  }).then((e) => {
                    window.location.reload(true);
                  });
                });
            });
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "error!!",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      }
    } else {
      if (
        this.state.select_catagory === null ||
        this.state.select_id_category === null
      ) {
        Swal.fire({
          icon: "warning",
          title: "กรุณาใส่ประเภทด้วย!!",
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        try {
          axios
            .post(this.state.host_url + "/postInsert", formData)
            .then((e) => {
              const formData = new FormData();
              formData.append(
                "category_thai_dessert_id",
                this.state.select_id_category
              );
              formData.append(
                "category_thai_dessert",
                this.state.select_catagory
              );
              axios
                .post(this.state.host_url + "/categoryInsert", formData)
                .then((e) => {
                  Swal.fire({
                    icon: "success",
                    title: "บันทึกสำเร็จ!!",
                    showConfirmButton: false,
                    timer: 1000,
                  }).then((e) => {
                    window.location.reload(true);
                  });
                });
            });
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "error!!",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      }
    }
    this.setState({ select_info_areas : null });
  };
  countLebgth = (event) => {
    this.setState({
      cdn: event.target.value.length,
    });
  };
  testconsloe = () => {
    console.log(this.state.data_long_post);
  };
  handleChange = (event) => {
    const fileUploaded = event.target.files[0];

    // Update the state with the selected file
    this.setState({ selectedFile: fileUploaded });

    console.log("File Uploaded:", this.state.selectedFile);
  };

  //end popup post
  render() {
    const { showAndHide } = this.state;
    return (
      <div className="g-center">
        {" "}
        {/*หน่ากรอกข้อมูลโพสต์*/}
        <div className="i-center left">
          <select id="category" className="select-style">
            <option value="noSelect" selected>
              เลือกประเภทขนมไทย...
            </option>
            {this.state.admin_category &&
              this.state.admin_category.map((p) => (
                <option value={p.admin_category_id}>
                  {p.admin_category_thai_dessert}
                </option>
              ))}
          </select>
        </div>
        <div className="i-center conten">
          <div className="top-title">
            <div className="title-text">
              <button className="btn-post">POST</button>
              <hr></hr>
            </div>
            {/* <div class='area-conten'><textarea class='text-areas' placeholder="What are you thinking?"></textarea></div> */}
            <div className="under-conten">
              <button className="btn-share" onClick={this.model_check}>
                SHARE
              </button>
            </div>
          </div>
          {this.state.data_long_post.map((e) => {
            return (
              <div className="footed-title">
                <div className="title-post">
                  <div className="avtars">
                    <BlobImage blobData={e.image.data}></BlobImage>
                    {/* <button onClick={this.testconsloe}>abc</button> */}
                  </div>
                  <div className="namespacs">
                    <h4 className="namespacs-nickname">{"@" + e.username}</h4>
                    <span className="namespacs-name">
                      {e.fristname + " " + e.lastname}
                    </span>
                  </div>
                  <Popup
                    trigger={
                      <div className="button-profile">
                        <button>
                          ...
                          <i className="fas fa-caret-down" />
                        </button>
                      </div>
                    }
                    position="bottom center"
                  >
                    <div className="popup-profile">
                      {/* <div className="popup-profile-btn">
                        <Link id="stylelink" to="/profile">
                          Report
                        </Link>
                      </div> */}
                      <div className="popup-profile-btn">
                        <button>Report</button>
                      </div>
                      <Outlet />
                    </div>
                  </Popup>
                </div>
                <hr></hr>
                <div className="conten-center">
                  <div className="time-conten">
                    <i className="fas fa-clock" />
                    <span>
                      {" "}
                      {moment(e.post_date_time).startOf('hour').fromNow()}
                    </span>
                  </div>
                  <div class="title-conten">
                    {/* <h3>{e.category_thai_dessert}</h3> */}
                  </div>
                  <div className="text-conten">
                    <ReadMore text={this.NewlineText(e.post_info)} maxLength={100} />
                  </div>
                  <div className="img-content">
                    {/* {pf.imgc && (
                      <img src={pf.imgsrc} alt={pf.imgc} />
                    )} */}
                    {e.post_image ? <Blobimg blobData={e.post_image.data} /> : null }
                  </div>
                  <hr></hr>
                  <div className="comment-conten">
                    <button className="likebtn">
                      <i id="like" className="fas fa-heart" />
                      Like
                    </button>
                    <button
                      className="componentbtn"
                      onClick={this._hiddenDisplay}
                    >
                      <i id="comment" className="fas fa-comment" /> Component
                    </button>
                  </div>
                  <hr></hr>
                </div>
              </div>
            );
          })}
          {data.profile_kanomthai.map((pf) => {
            return (
              <div className="footed-title">
                {" "}
                {/*หน่าโพสต์*/}
                <div className="title-post">
                  <div className="avtars">
                    <Avatar name={pf.nick_name} round="180px" size="60" />
                  </div>
                  <div className="namespacs">
                    <h4 className="namespacs-nickname">{pf.tag_name}</h4>
                    <span className="namespacs-name">{pf.name}</span>
                  </div>
                  <Popup
                    trigger={
                      <div className="button-profile">
                        <button>
                          ...
                          <i className="fas fa-caret-down" />
                        </button>
                      </div>
                    }
                    position="bottom center"
                  >
                    <div className="popup-profile">
                      <div className="popup-profile-btn">
                        <Link id="stylelink" to="/profile">
                          ข้อมูลบัญชี
                        </Link>
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
                <div className="conten-center">
                  <div className="time-conten">
                    <i className="fas fa-clock" />
                    <span>{pf.timeline}</span>
                  </div>
                  <div class="title-conten">
                    <h3>{pf.title}</h3>
                  </div>
                  <div className="text-conten">
                    {/* {console.log(pf.text_conten.toString().length)} */}
                    {pf.text_conten.map((lt, i) => (
                      <p key={i}>{lt}</p>
                    ))}
                  </div>
                  <div className="img-content">
                    {pf.imgc ? (
                      <img src={pf.imgsrc} alt={pf.imgc} />
                    ) : (
                      <p>maime</p>
                    )}
                  </div>
                  <hr></hr>
                  <div className="comment-conten">
                    <button className="likebtn">
                      <i id="like" className="fas fa-heart" />
                      Like
                    </button>
                    <button
                      className="componentbtn"
                      onClick={this._hiddenDisplay}
                    >
                      <i id="comment" className="fas fa-comment" /> Component
                    </button>
                  </div>
                  <hr></hr>
                  {showAndHide && (
                    <div className="comment-use">
                      <div className="user-comment">
                        {/* <span className="text-comment"></span> 
                                            <Avatar name={pf.commnet_User.name} round="180px" size="30"/>*/}
                        {console.log(Object.keys(pf.commnet_User).length)}
                        {Object.keys(pf.commnet_User).length < 0 ? (
                          <span>ไม่มีคอมเม้น</span>
                        ) : (
                          <div>
                            {pf.commnet_User.map((e) => {
                              return (
                                <div>
                                  <Avatar
                                    name={e.name}
                                    round="180px"
                                    size="30"
                                  />
                                  <span className="text-comment">
                                    {e.comment}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          {/* {abc} */}
        </div>
        <div class="i-center">
          <div className="i-search">
            <input className="i-input-search" placeholder="Search"></input>
            <i class="fas fa-search"></i>
          </div>
          {data.img_advert.map((imc) => {
            return (
              <div className="i-advert">
                <img src={imc.imgsrc} alt="A" />
              </div>
            );
          })}
        </div>
        <div className="Reserve-space-post">
          {this.state.box_model === true && (
            <div className="background-shadow-post">
              <div className="Model-popup">
                <i
                  className="back-del-post fa-solid fa-xmark"
                  onClick={this.model_check}
                />
                <div className="text-topin-post">
                  <h2> แชร์สูตร</h2>
                </div>
                <div className="top-post">
                  <div className="profile-post">
                    <img
                      className="border-img-post"
                      src={this.state.picture}
                      width="80"
                      height="80"
                      alt="profile"
                    />
                  </div>

                  <div className="profile-post-topic">
                    <p>{this.state.user_selected[0].username}</p>
                    <select
                      id="select_kanomthai"
                      className="option-style"
                      onChange={this.submitData}
                    >
                      <option value="noSelect" selected>
                        เลือกประเภทขนมไทย...
                      </option>
                      {this.state.admin_category &&
                        this.state.admin_category.map((p) => (
                          <option value={p.admin_category_id}>
                            {p.admin_category_thai_dessert}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="post-info-format">
                  <div className="topin-info">
                    <textarea
                      id="text_area_post"
                      className="box-text-post"
                      onChange={this.submitData}
                      placeholder="รายละเอียด . . ."
                    />
                  </div>
                </div>
                <div className="box-post-img">
                  <div className="up-img-post">
                    {this.state.selectedFile && (
                      <img
                        onClick={this.handleClick}
                        src={URL.createObjectURL(this.state.selectedFile)}
                        style={{ maxHeight: "100%" }}
                        alt="fromImgPost"
                      />
                    )}
                  </div>
                  <div className="format-img-button">
                    <button
                      className="box-button-img"
                      onClick={this.handleClick}
                    >
                      อัปโหลดรูปภาพ
                    </button>
                    <input
                      type="file"
                      ref={this.hiddenFileInput}
                      style={{ display: "none" }}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="format-button-post">
                  <button
                    className="button-post"
                    id="submit_post"
                    onClick={this.submitDataPost}
                  >
                    <h4>แชร์</h4>
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
export default PostBoard;
