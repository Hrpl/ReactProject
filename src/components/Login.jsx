import { useContext, useRef, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import "../styles/Login.css"

import {apiLogin} from '../services/api-services'
import Cookies from 'js-cookie';

import Modal from 'react-bootstrap/Modal';

export function Login(props){
    
    const {user, setUser } = useContext(AuthContext)
    
    const [showPassword, setShowPassword] = useState(false)
    const errorRef = useRef(null)

    const navigate = useNavigate()

    async function clickLoginButton(){
        const resp = await apiLogin(user.login, user.password)
        
        if(resp != null) {
            navigate("/")
            Cookies.set('userName', `${resp.data.name}`, { expires: 1})
        }
        else errorRef.current.hidden = false
    }

    return(
        <div className="modal show "
        style={{display: 'block', 
            position: 'initial'}}
        >
            <Modal {...props}
            aria-labelledby="contained-modal-title-vcenter"
            >

                <Modal.Body>
                    <h2 className="text-center mb-5">Добро пожаловать</h2>
                    <div className="d-flex flex-column mx-5">
                        <label className="ms-2"  htmlFor="login"> <b>Логин</b></label>
                        <input value={user.login} className="form-control m-2 rounded-3 border-2" id="login" type="text" 
                        onChange={(event) => setUser({...user, login: event.target.value})} 
                        placeholder="Логин"/>
                    </div>
                    
                    <div className="d-flex flex-column mx-5">
                        <label className="ms-2" ><b>Пароль</b></label>
                        <span className="input-container">
                            <input value={user.password} className="form-control m-2 rounded-3 border-2" id="password" type={showPassword ? "text" : "password"}
                            onChange={(event) => setUser({...user, password: event.target.value})} 
                            placeholder="Пароль"/> 
                            
                            <span onClick={() => setShowPassword(!showPassword)} className="toggle-password">
                                {showPassword ? 
                                <i className="bi bi-eye "></i> 
                                :
                                <i className="bi bi-eye-slash"></i>}
                                
                            </span>
                        </span>
                    </div>
                    
                    <section ref={errorRef} className="text-danger ms-2" hidden>
                        Неверный логин или пароль
                    </section>

                    <section className="d-flex justify-content-center flex-column">
                        <button className="btn text-white d-flex align-self-center justify-content-center mt-3 mb-0 rounded-5" style={{
                            fontWeight: 600,
                            margin: "0.5rem",
                            width: "10vw",
                            backgroundColor: "#e60023"
                        }}
                        onClick={clickLoginButton}>Войти</button>

                        <button className="btn d-flex align-self-center justify-content-center mt-3 mb-0 rounded-5" style={{
                            fontWeight: 600,
                            margin: "0.5rem",
                            width: "10vw",
                            backgroundColor: '#cdcdcd'
                        }}
                        onClick={props.onHide}>Закрыть</button>
                    </section>
                    
                </Modal.Body>
            </Modal>
        </div>
    )
}