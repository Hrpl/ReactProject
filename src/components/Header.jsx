import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Link } from "react-router-dom"
// import image from '../assets/react.svg'

export function Header(){
    const {user} = useContext(AuthContext)

    return(
        <header className="d-flex justify-content-between bg-secondary text-white">
            <h3 className="m-3">Менеджер проектов
                {/* <image src={image}></image> */}
            </h3>
            {user.login.lenght > 0 ? (
                <p>{user}</p>
            ):(

                <Link to='/login' className="btn text-white mt-1">Войти</Link>
            )}
            
        </header>
    )
}