import './NavbarStyle.css';
import React from 'react';
// import Avatar from 'react-avatar';
import { Outlet, Link } from "react-router-dom";
import $ from "jquery";

class Navbar extends React.Component {
  constructor(){
    super();
    this._stylelinkClick = this._stylelinkClick.bind(this);
  }
  componentDidMount(){
    this._stylelinkClick();
  }
  _stylelinkClick() {
    $("a").on('click', function(){
      $("a").removeClass('selected');
      $(this).addClass('selected');
    });
  }
  state = {clicked: false};
  hideonClick = () => {
    this.setState({clicked:!this.state.clicked})
  }
  render() {
    return (
            <>
        <nav>
            <Link className='img-size' to='/' ><img src="./pngs/logo3.png" className="App-logo" alt="logo" /></Link>
            <div>
                <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
                    <li><Link id='stylelink' onClick={this._stylelinkClick} to="/">หน้าหลัก</Link></li>
                    <li><Link id='stylelink' onClick={this._stylelinkClick} to="/bulletin_board">กระดานข่าว</Link></li>
                    <li><Link id='stylelink' onClick={this._stylelinkClick} to="/post_board">กระดานโพสต์</Link></li>
                    <li><Link id='stylelink' onClick={this._stylelinkClick} to="/about">เกี่ยวกับ</Link></li>
                    <li><Link id='stylelink' onClick={this._stylelinkClick} to="/registers">สมัครสมาชิก</Link></li>
                    {/* <li><Link id='stylelink' onClick={this._stylelinkClick} to="/profile"></Link></li> */}
                    {/* <li><Link id='stylelink' onClick={this._stylelinkClick} to="/register_true"></Link></li> */}
             </ul>
            </div>
            <div id="Responsive_mb" onClick={this.hideonClick}>
              <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}>
              </i>
            </div>
        </nav>
    <Outlet />
      </>
    )
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