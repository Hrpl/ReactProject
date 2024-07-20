import { Link } from "react-router-dom"
import Cookies from 'js-cookie';

export function Header(){
    const user = Cookies.get('userName')
    console.log(document.cookie)

    return(
        <header className="d-flex justify-content-between bg-secondary text-white">
            <h3 className="m-3">Менеджер проектов</h3>
            {user ? (
                <p>{user}</p>
            ):(

                <Link to='/login' className="btn text-white mt-1">Войти</Link>
            )}
            
        </header>
    )
}