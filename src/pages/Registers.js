import './RegistersStyle.css';
import React from "react";
import { Outlet, Link } from 'react-router-dom';

class Registers extends React.Component{
    render(){
        return(
            <div class="center">
            <h1>LOGIN</h1>
            <form method="post">
              <div class="txt_field">
                <input type="text" required/>
                <span></span>
                <label>Username</label>
              </div>
              <div class="txt_field">
                <input type="password" required/>
                <span></span>
                <label>Password</label>
              </div>
              <div class="pass">
                <input type='checkbox' id='ss'/><label for='ss'>Remember me</label><a href='GG'>Forgot Password?</a></div>
              <input type="button" value="Login"/>
              <div class="signup_link"> 
                Not a member? <a href="QA"><Link to='registers_true' >Register</Link></a>
              </div>
            </form>
            <Outlet />
          </div>
        )
    }
}

export default Registers;