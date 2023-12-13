import React from "react";
import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../components/NavbarStyle.css';
import Swal from "sweetalert2";
// import $ from "jquery";


function Registers_true({hideRegister}) {
  const [username ,setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [isEmail, setIsEmail] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const navigate = useNavigate();
  const handleChangUser = (e) => {
     setUsername(e.target.value);
  };
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    setIsEmail(validateEmail(inputValue));
  };
  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };
  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    const newConfirmPassword = event.target.value;
    setConfirmPassword(newConfirmPassword);
  };

  useEffect(() => {
    if (password === confirmPassword) {
      setPasswordsMatch(true);
    } else {
      setPasswordsMatch(false);
    }
  }, [password, confirmPassword]);

  const handleClickConfirm = async e=>{
    e.preventDefault()
    if (email !== '' && username !== '' && password !== '' && passwordsMatch === true){
      try {
        Swal.fire({
          icon: 'success',
          title: 'บันทึกสำเร็จ!!',
          showConfirmButton: false,
          timer: 1500
        }).then((e)=>{
          axios.post("http://localhost:8800/addUsers", {email,username,password});
          // $('.onchangSubmit').hide();
          navigate("/");
        })
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("dont send data");
    }
  };
  console.log(
    isEmail
  );
  return (
    <div>
      <div className="center">
        <h1>REGISTER</h1>
        <form method="post">
          <div className="txt_field">
            <input type="text" name="username" onChange={handleChangUser} required />
            <span></span>
            <label>Username</label>
          </div>
          <div className="txt_field">
            <input type="text" name="emails" value={email} onChange={handleInputChange} className={isEmail ? '' : 'invalid'} required />
            <span></span>
            <label>Email</label>
          </div>
          {isEmail ? null : <p className="error">Invalid email address</p>}
          <div className="txt_field">
            <input type="password" name="password" value={password} onChange={handlePasswordChange} max="10" required />
            <span></span>
            <label>Password</label>
          </div>
          <div className="txt_field">
            <input type="password" name="confirmpassword" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
            <span></span>
            <label>Repeat password</label>
          </div>
          {passwordsMatch ? null : (<p className="error">Passwords do not match</p>)}
          <div className="pass">
            <input type="checkbox" id="ss" />
            <label htmlFor="ss">I have read and agree to the terms</label>
          </div>
          <input type="button" id="btn" value="SIGN IN" onClick={handleClickConfirm} />
          <div className="signup_link">
            {/* Not a member? <a href="QA">ฑegister</a> */}
            <a href="../registers">back to Login</a>
          </div>
        </form>
      </div>
    </div>
  );
}
// class Registers_true extends React.Component{
//   state = {

//   }
//     render(){
//         return(
//             <div>
//                             <div class="center">
//             <h1>REGISTER</h1>
//             <form method="post">
//               <div class="txt_field">
//                 <input type="text" name="fristname" required/>
//                 <span></span>
//                 <label>Fristname</label>
//               </div>
//               <div class="txt_field">
//                 <input type="text" name="lastname" required/>
//                 <span></span>
//                 <label>Lastname</label>
//               </div>
//               <div class="txt_field">
//                 <input type="email" name="emails" required/>
//                 <span></span>
//                 <label>Email</label>
//               </div>
//               <div class="txt_field">
//                 <input type="password" name="password" required/>
//                 <span></span>
//                 <label>Password</label>
//               </div>
//               <div class="txt_field">
//                 <input type="password" name="password" required/>
//                 <span></span>
//                 <label>Repeat password</label>
//               </div>
//               <div class="pass">
//                 <input type='checkbox' id='ss'/><label for='ss'>I have read and agree to the terms</label></div>
//               <input type="submit" value="SIGN IN"/>
//               <div class="signup_link">
//                 {/* Not a member? <a href="QA">ฑegister</a> */}
//               </div>
//             </form>
//           </div>
//             </div>
//         )
//     }
// }
export default Registers_true;
