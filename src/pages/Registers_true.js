import React from "react";

class Registers_true extends React.Component{
    render(){
        return(
            <div>
                            <div class="center">
            <h1>REGISTER</h1>
            <form method="post">
              <div class="txt_field">
                <input type="text" required/>
                <span></span>
                <label>Username</label>
              </div>
              <div class="txt_field">
                <input type="email" required/>
                <span></span>
                <label>Email</label>
              </div>
              <div class="txt_field">
                <input type="password" required/>
                <span></span>
                <label>Password</label>
              </div>
              <div class="txt_field">
                <input type="password" required/>
                <span></span>
                <label>Repeat password</label>
              </div>
              <div class="pass">
                <input type='checkbox' id='ss'/><label for='ss'>I have read and agree to the terms</label></div>
              <input type="submit" value="SIGN IN"/>
              <div class="signup_link"> 
                {/* Not a member? <a href="QA">ฑegister</a> */}
              </div>
            </form>
          </div>
            </div>
        )
    }
}
export default Registers_true;