import React,{useState} from "react";

import { Link } from "react-router-dom";

export default function Navbar() {

  const [mode, setmode] = useState("light");
  const [btnText, setbtnText] = useState("Dark mode on");

  const toggelStyle = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#282525";
      setbtnText("Light mode on");
    } else if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "#F4F6F6";
      setbtnText("Dark mode on");
    }
  };

return (
    <>
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent mx-6">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                   <Link className="nav-link active" aria-current="page" to="/" style={{ color:'green' }}><h4>Home</h4></Link>
                </li>
                <li className="nav-item">
                   <Link className="nav-link active mx-5" aria-current="page" to="/adduser" style={{ color:'green' }}><h4>Add User</h4></Link>
                </li>
            </ul>
         </div>
          <div className="d-flex-col-lg-7">
              <div className="container ">
                  <button
                    onClick={toggelStyle}
                    type="button"
                    className="btn btn-info rounded-pill"
                  >
                    {btnText}
                  </button>
              </div>  
          </div>
        </div>
      </nav>
    </>
  );
}