import './navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
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
            <a>Football</a>
            <a>Cooking</a>
            <a>Coding</a>
              {/* <Link to="/topics/football">Football</Link>
              <Link to="/topics/cooking">Cooking</Link>
              <Link to="/topics/coding">Coding</Link> */}
            </div>
          </div>
  
        <div className='navbar-right'>
          <div className='sign-in'>
          <a className="log-in" href="#login">
            Login </a>
          <a className="sign-up" href="#sign-up">
            Signup </a>
      
          </div>
          </div>
  
          </nav>
          </header>
          
          )
        
  }