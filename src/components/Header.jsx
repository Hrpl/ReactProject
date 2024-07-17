import { useContext } from "react"
import { AuthContext } from "../AuthContext"
import { Link } from "react-router-dom"

export function Header(){
    const {user} = useContext(AuthContext)

    return(
        <header className="d-flex justify-content-between bg-secondary">
            <h3>Менеджер проектов</h3>
            {user.name.lenght > 0 ? (
                <p>{user}</p>
            ):(

                <Link to='/login'  className="link ">Войти</Link>
            )}
            
        </header>
    )
}