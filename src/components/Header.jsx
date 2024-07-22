import { Link } from "react-router-dom"
import Cookies from 'js-cookie';
import { Login } from "./Login";
import { Button } from "react-bootstrap";
import { useState } from "react";

export function Header(){

    const [showLogin, setShowLogin] = useState(false)


    const user = Cookies.get('userName')
    console.log(document.cookie)

    return(
        <header className="d-flex justify-content-between p-2">
            <section className="d-flex mx-1">
                <h3 className="">Менеджер проектов</h3>
                <h5 className="mx-3 " style={{
                    verticalAlign: "bottom"
                }}>Проекты</h5>
            </section>
            
            {user ? (
                <p>{user}</p>
            ):(
                <div>
                    <Button onClick={() => setShowLogin(true)} className="btn mt-1 mx-2 text-white rounded-5" style={{
                        backgroundColor: "#e60023",
                        fontWeight: 600,
                        border: 0
                    }}>Войти</Button>

                    <div className="" hidden>
                        <Login show={showLogin} onHide={() => setShowLogin(false)}></Login>
                    </div>    

                    <Link className="btn mt-1 mx-2 rounded-5" style={{
                        backgroundColor: "#cdcdcd",
                        fontWeight: 600
                    }}>Регистрация</Link>
                </div>
                
            )}
            
        </header>
    )
}