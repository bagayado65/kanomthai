import "./RegistersStyle.css";
import React, { useState } from "react";
import { Outlet, Link, useNavigate} from "react-router-dom";
import { useAuth } from '../components/Auth-context';
import '../components/NavbarStyle.css';
import Swal from "sweetalert2";
// import $ from "jquery";

function Registers() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [ isCheckbox ]
  const { dispatch } = useAuth();
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8800/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        navigate('/about');
        console.log('Login successful');
        const isAuthenticated = true;
        if (isAuthenticated) {
          dispatch({
            type: 'LOGIN',
            payload: {
              user: { username },
            },
          });
          Swal.fire({
            position: "center",
            icon: "success",
            title: "ล๊อคอินสำเร็จ",
            showConfirmButton: false,
            timer: 1500
          });
        }
        window.location.reload(true);

        // Redirect or update state as needed
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง!!",
          showConfirmButton: false,
          timer: 1500
        });
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className="center">
      <h1>LOGIN</h1>
      <form method="post">
        <div className="txt_field">
          <input type="text"  value={username} onChange={(e) => setUsername(e.target.value)}  required />
          <span></span>
          <label>Username</label>
        </div>
        <div className="txt_field">
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <span></span>
          <label>Password</label>
        </div>
        <div className="pass">
          {/* <input type="checkbox" id="ss" /> */}
          {/* <label htmlFor="ss">Remember me</label> */}
          <a href="QQ">Forgot Password?</a>
        </div>
        <input type="button" onClick={handleLogin} value="Login"/>

        <div className="signup_link">
          Not a member?{" "}
            <Link to="registers_true">Register</Link>
        </div>
      </form>
      <Outlet />
    </div>
  );
}
// class Registers extends React.Component{
//     render(){

//     }
// }

export default Registers;
