import "./Leftsidebar.css"
import { NavLink } from "react-router-dom"
function Leftsidebar(slidein) {
  const slideinstyle={
    Transform:"TranslateX(-100%)",
  };
  return (
    <div className="left-sidebar" style={slidein ? slideinstyle : slideoutstyle}>
      <nav className="slide-nav">
        <button className="nav-btn">
          <NavLink to="/"  className="side-nav-links" activeclassname='active'>
            <p>Home</p>
          </NavLink>
        </button>
        <div className="slide-nav-div">
          <div>
            <p>PUBLIC</p>
          </div>
          <button className="nav-btn">
            <NavLink to="/Question " className="side-nav-links" >
            <img src="/Globe.jpg" alt="Globe" width={"17px"} />
            <p style={{paddingLeft:"10px"}}>Questions</p>
            </NavLink>
          </button>
          <button className="nav-btn">
            <NavLink to="/Tags" className="side-nav-links"  style={{paddingLeft:"40px"}}>
            <p>Tags</p>
            </NavLink>
          </button>
          <button className="nav-btn">
            <NavLink to="/Users" className="side-nav-links"  style={{paddingLeft:"40px"}}>
            <p>Users</p>
            </NavLink>
          </button>
        </div>
        </nav> 

    </div>
  )
}

export default Leftsidebar
