import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/Auth-context";
import Swal from "sweetalert2";

const Logout = () =>{
    const { state , dispatch } = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        sessionStorage.removeItem('auth');
        localStorage.removeItem('auth');
        Swal.fire({
          position: "center",
          icon: "success",
          title: "ออกจากระบบ",
          showConfirmButton: false,
          timer: 1500
        }).then((e)=>{
          navigate("/");
          window.location.reload(true);
        });
    }
    return (
        <div>
        {state.isAuthenticated ? (
          <div>
            {/* <p>Welcome, {state.user.username}!</p> */}
            <button onClick={handleLogout}>ออกจากระบบ</button>
          </div>
        ) : (
            <button disabled>ออกจากระบบ</button>
        )}
      </div>
    )
}

export default Logout;