import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import { Login } from "./Login";
import { Button } from "react-bootstrap";
import { useState } from "react";
import "../styles/Header.css";

export function Header(){

    const [showLogin, setShowLogin] = useState(false)


    const user = Cookies.get('userName')

    return(
        <header className="d-flex justify-content-between">
            <section className="d-flex mx-1">
                <Link to="/">
                    <h3 className="mt-2 ms-2"
                    style={{
                        color: "#e60023"}}>Главная</h3>
                </Link>
                
                
            </section>

            <section className="d-flex ">
                <Link to="/project" className="mx-3 mt-1 link text-black" style={{
                    fontSize: "1rem",
                    padding: "0.38rem"
                    }}>
                       <p className=" text-black">Проекты</p> 
                </Link>

                {user ? (
                    <div className="circel m-1"><div className="mt-2"></div></div>
                ):(
                    <div className="m-0 p-0">
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
            </section>
            
            
        </header>
    )
}