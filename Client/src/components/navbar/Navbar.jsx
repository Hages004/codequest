import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Avatar from '../Avatar/Avatar.jsx';
import "./Navbar.css"
import { setcurrentuser } from '../../action/currentuser.js';
import {jwtDecode} from "jwt-decode"
function Navbar(handleslidein) {
  var User = useSelector((state)=>state.currentuserreducer)
  console.log(User)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handlelogout=()=>{
    dispatch({type:"LOGOUT"})
    navigate("/")
    dispatch(setcurrentuser(null))
  }
  useEffect(()=>{
    const token =User?.token
    if (token){
      const decodedtoken=jwtDecode(token)
      if(decodedtoken.exp * 1000 < new Date().getTime()){
        handlelogout()
      }
    }
    dispatch(setcurrentuser(JSON.parse(localStorage.getItem("Profile"))))
  },[User?.token,dispatch])
  return (
    <nav className="main-nav">
      <div className="navbar">
        <button className="slide-in-icon" onClick={() => handleslidein}>
          <img src="/menu.jpg" alt="slide-icon" width={20} />
        </button>

        <Link to="/" className='nav-logo'>
          <img src="/Stack_Overflow-Logo.png" alt="Logo" width={100} />
        </Link>
        <Link className='nav-link'>About</Link>

        <Link className='nav-link'>Products</Link>

        <Link className='nav-link'>For Teams</Link>

        <form action="">
          <input type="text" placeholder='Search......' />
          <img className='search-icon' src="/search-icon.png" alt="search" width={20} />
        </form>

        <div className='navbar-2'>
          {User === null ? (
            <Link className='nav-btn' to="/Auth" >Log in</Link>
          ) : (
            <>
              <Avatar backgroundcolor="009dff" px={10} py={7} borderRadius={50} color={"white"}> 
              <Link to={`/Users/${User?.result?._id}`} style={{ color: "white", textDecoration: "none" }}>
              {User.result.name.charAt(0).toUpperCase()}
              </Link>
              </Avatar>
              <button  className='nav-btn' onClick={handlelogout}>Log out</button>
            </>
          )}
        </div>
      </div>
    </nav>


  )
}

export default Navbar
