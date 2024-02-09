import './header.css'
import { UserContext } from "../Context/users"
import { useContext } from "react"


export function Header(){

  const { user } = useContext(UserContext)

    return (
      <>
      <h1>NC News 📰! </h1> 
      {/* <p className='login'> Logged In: {user.username} </p> */}
      </>
    )
    
}