import { useState } from "react";
import { NavLink } from "react-router-dom"
import { IoReorderThree } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";


export const Header=()=>{
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);


    
    
    return(
        <>
            <header className="section-navbar">
      <section className="top_txt">
        <div className="head container">
          <div className="head_txt">
            <p> <marquee  direction="right">TV shows and movies, see what coming soon and watch bonus videos on Tudum.com. </marquee></p>
          </div>
          <div className="sing_in_up">
            <NavLink to="/signin ">SIGN IN</NavLink>
            <NavLink to="/signup ">SIGN UP</NavLink>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/">
           
            <h1 className="nav-logo">MHflix</h1>
          </NavLink>
        </div>

        <nav className="navbar">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink className="nav-links"  to="/" onClick={handleClick}  activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-links" to="/about"  activeClassName="active" onClick={handleClick}>about</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-links" to="/movie" activeClassName="active"  onClick={handleClick}>Movie</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-links" to="/contact" activeClassName="active"  onClick={handleClick}>contact</NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
          {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}
          {click ? (
              <span className="icon">
                <IoReorderThree />{" "}
              </span>
            ) : (
              <span className="icon">
                <IoMdClose />
              </span>
            )}
          </div>
        </nav>
      </div>
    </header>
        </>
    )
}