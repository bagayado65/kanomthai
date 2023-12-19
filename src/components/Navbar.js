import "./NavbarStyle.css";
import React from "react";
import Avatar from "./Avatar";
import { Outlet, Link } from "react-router-dom";
import Popup from "reactjs-popup";
import Logout from "../pages/Logout";
import axios from "axios";
import $ from "jquery";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this._stylelinkClick = this._stylelinkClick.bind(this);
    this.state = {
      defaultAvatar: "./jpgs/defaultAvatar.jpg",
      host_url: "http://localhost:8800",
      auth_id: null,
      user_selected: [],
      picture: null,
      dispatch: { type: "LOGOUT" },
    };
  }
  componentDidMount() {
    this._stylelinkClick();
    let data = sessionStorage.getItem("auth");
    let cosv = JSON.parse(data);
    try {
      axios
        .get(
          this.state.host_url +
            "/user/" +
            JSON.parse(sessionStorage.getItem("auth")).user.username
        )
        .then((response) => {
          // console.log("data didM :"+response);
          this.setState({ user_selected: response.data });
          // console.log(response.data[0].image.data)
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
    } catch (error) {
      console.log("ยังไม่มีการ Login!");
    }
    if (cosv.user != null) {
      $(".onchangSubmit").hide();
    } else {
      $(".notColor").hide();
    }
  }
  _stylelinkClick() {
    $("a").on("click", function () {
      $("a").removeClass("selected");
      $(this).addClass("selected");
    });
  }
  state = { clicked: false };
  hideonClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav>
          <Link className="img-size" to="/">
            <img src="./pngs/logo3.png" className="App-logo" alt="logo" />
          </Link>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "#navbar"}
            >
              <li>
                <Link id="stylelink" onClick={this._stylelinkClick} to="/">
                  หน้าหลัก
                </Link>
              </li>
              <li>
                <Link
                  id="stylelink"
                  onClick={this._stylelinkClick}
                  to="/bulletin_board"
                >
                  กระดานข่าว
                </Link>
              </li>
              <li>
                <Link
                  id="stylelink"
                  onClick={this._stylelinkClick}
                  to="/post_board"
                >
                  กระดานโพสต์
                </Link>
              </li>
              <li>
                <Link id="stylelink" onClick={this._stylelinkClick} to="/about">
                  เกี่ยวกับ
                </Link>
              </li>
              <li className="onchangSubmit">
                <Link
                  id="stylelink"
                  onClick={this._stylelinkClick}
                  to="/registers"
                >
                  สมัครสมาชิก
                </Link>
              </li>
              <li className="notColor">
                {" "}
                <Popup
                  trigger={
                    <button className="nav-btn-profile">
                      <Avatar
                        imageUrl={
                          this.state.picture
                            ? this.state.picture
                            : this.state.defaultAvatar
                        }
                        size={50}
                      />
                    </button>
                  }
                  position="bottom center"
                >
                  <div className="popup-profile">
                    <div className="popup-profile-btn">
                      <Link id="stylelink" to="/profile">
                        <button>ข้อมูลบัญชี</button>
                      </Link>
                    </div>
                    <div className="popup-profile-btn">
                      <Logout></Logout>
                    </div>
                  </div>
                </Popup>
              </li>
              {/* <li><Link id='stylelink' onClick={this._stylelinkClick} to="/register_true"></Link></li> */}
            </ul>
          </div>
          <div id="Responsive_mb" onClick={this.hideonClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
        <Outlet />
      </>
    );
  }
}
// const Navbar = () => {
//     return (
//       <>
//         <nav>
//             <Link className='img-size' to='/' ><img src="./pngs/logo.png" className="App-logo" alt="logo" /></Link>
//             <div>
//                 <ul id='navbar'>
//                     <li><Link id='stylelink' to="/">หน้าหลัก</Link></li>
//                     <li><Link id='stylelink' to="/bulletin_board">กระดานข่าว</Link></li>
//                     <li><Link id='stylelink' to="/post_board">กระดานโพสต์</Link></li>
//                     <li><Link id='stylelink' to="/about">เกี่ยวกับ</Link></li>
//                     <li><Link id='stylelink' to="/registers">สมัครสมาชิก</Link></li>
//              </ul>
//             </div>
//         </nav>
//     <Outlet />
//       </>
//     )
// };
// class navbar extends React.Component{
//   componentDidMount(){
//     this._stylelinkClick();
//   }
// }

export default Navbar;
