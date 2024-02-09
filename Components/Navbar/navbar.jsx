import './navbar.css'
import { Link } from 'react-router-dom'
import { UserContext } from "../Context/users"
import { useContext } from "react"

export default function Navbar() {
  const { user } = useContext(UserContext)
    return (
      <header className='navbar-container'>
        <nav className="navbar">
            <Link to="/home">Home</Link>
            <Link to="/articles">All Articles</Link>
  
          <div className="dropdown">
            <button className="dropbtn">
              Topics
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
             <Link to="/articles?topic=coding">Coding</Link>
             <Link to="/articles?topic=cooking">Cooking</Link>
             <Link to="/articles?topic=football">Football</Link>

            </div>
          </div>
  
        <div className='navbar-right'>
          <div className='sign-in'>
            <a className="sign-up">Logged in as {user.username}</a>
          <Link to="/users">Login</Link>
          <a className="sign-up" href="#sign-up">
            Signup </a>
      
          </div>
          </div>
  
          </nav>
          </header>
          
          )
        
  }