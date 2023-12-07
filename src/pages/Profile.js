import React from "react";
import { useState, useEffect } from "react";
// import axios from "axios";

import "./ProfileStyle.css";

const Profile = () => {
  const [hide, setHide] = useState(false);
  const [data, setData] = useState([]);
  const [isFristname, setFristname] = useState("");
  const [isLastname, setLastname] = useState("");
  const [isSex, setSex] = useState("");
  const [isBirthday, setBirthday] = useState("");
  const [isEmail, setEmail] = useState("");
  const hideButtonA = () => {
    setHide(true);
  };
  const datas = sessionStorage.getItem("auth");
  const cosv = JSON.parse(datas);

  const hideButtonB = async e => {
    // e.preventDefault()
    // try {
    //   const user_id = cosv.user.username;
    //   axios.put(
    //     `http://localhost:8800/updateProfile/${user_id}`,
    //     { isFristname, isLastname, isSex, isBirthday, isEmail }
    //   );
    //   // console.log("User updated successfully:", response.data);
    //   // window.location.reload(true);
    // } catch (error) {
    //   console.error("Error updating user:", error);
    // }
    setHide(false);
  };
  // console.log(data);
  // console.log(cosv.user.username);
  console.log(data.filter((user) => user.username === cosv.user.username));
  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetch("http://localhost:8800/users")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <div className="p-grid-container">
        <div className="p-box">
          <div className="p-h2">
            {data
              .filter((user) => user.username === cosv.user.username)
              .map((Meow) => (
                <h3>
                  {Meow.fristname
                    ? Meow.fristname + " " + Meow.lastname
                    : "ไม่มีชื่อ"}
                </h3>
              ))}
          </div>

          <div className=" content-img">
            <img
              src="./jpgs/defaultAvatar.jpg"
              className="p-img-fluid"
              alt="profile"
            />
            <div className="p-padding-problem">
              <a className="p-button fa fa-envelope" href="i#">
                แจ้งปัญหา
              </a>
            </div>
          </div>

          {/* <div class=" content-img">
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
          </div> */}
        </div>
        <div className="">
          {/* <form> */}
          <h3 className="p-h3"> ข้อมูลส่วนตัว</h3>
          <div className="p-padding-eadit">
            <button
              className="p-button-edit fa fa-pencil-square "
              onClick={hideButtonA}
            >
              แก้ไขโปรไฟล์
            </button>
          </div>
          <div className="p-margin">
            <label>
              <h5> ชื่อผู้ใช้งาน : </h5>
            </label>
            {hide ? (
              <label>
                {data
                  .filter((user) => user.username === cosv.user.username)
                  .map((Meow) => (
                    <p>{Meow.username}</p>
                  ))}
              </label>
            ) : (
              <label>
                {data
                  .filter((user) => user.username === cosv.user.username)
                  .map((Meow) => (
                    <p>{Meow.username}</p>
                  ))}
              </label>
            )}
            <br></br>
            <label>
              <h5> ชื่อ :</h5>
            </label>
            {hide ? (
              <input
                type="text"
                value={isFristname}
                onChange={(e) => setFristname(e.target.value)}
              />
            ) : (
              <label>
                {data
                  .filter((user) => user.username === cosv.user.username)
                  .map((Meow) => (
                    <p>{Meow.fristname}</p>
                  ))}
              </label>
            )}
            <br></br>
            <label>
              <h5> นามสกุล :</h5>
            </label>
            {hide ? (
              <input
                type="text"
                value={isLastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            ) : (
              <label>
                {data
                  .filter((user) => user.username === cosv.user.username)
                  .map((Meow) => (
                    <p>{Meow.lastname}</p>
                  ))}
              </label>
            )}
            <br></br>
            <label>
              <h5> เพศ :</h5>
            </label>
            {hide ? (
              <input
                type="text"
                value={isSex}
                onChange={(e) => setSex(e.target.value)}
              />
            ) : (
              <label>
                {data
                  .filter((user) => user.username === cosv.user.username)
                  .map((Meow) => (
                    <p>{Meow.gender}</p>
                  ))}
              </label>
            )}
            <br></br>
            <label>
              <h5> วันเกิด :</h5>
            </label>
            {hide ? (
              <input
                type="text"
                value={isBirthday}
                onChange={(e) => setBirthday(e.target.value)}
              />
            ) : (
              <label>
                {data
                  .filter((user) => user.username === cosv.user.username)
                  .map((Meow) => (
                    <p>{Meow.birthday}</p>
                  ))}
              </label>
            )}
            <br></br>
            <label>
              <h5> อีเมล :</h5>
            </label>
            {hide ? (
              <input
                type="text"
                value={isEmail}
                onChange={(e) => setEmail(e.target.value)}
              />
            ) : (
              <label>
                {data
                  .filter((user) => user.username === cosv.user.username)
                  .map((Meow) => (
                    <p>{Meow.email}</p>
                  ))}
              </label>
            )}
            <br></br>
            <br></br>
          </div>

          <div className="p-padding-eadit">
            {hide ? (
              <button
                className="p-button-save fas fa-circle-check"
                onClick={hideButtonB}
              >
                บันทึกโปรไฟล์
              </button>
            ) : null}
          </div>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

Profile.className = "profile";

export default Profile;
