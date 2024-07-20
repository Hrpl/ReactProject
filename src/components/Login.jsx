import { useContext, useRef } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import styles from "../styles/Login.module.css"

import {apiLogin} from '../services/api-services'
import Cookies from 'js-cookie';



export function Login(){
    
    const {user, setUser } = useContext(AuthContext)
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
        
        <div className="mt-5 mx-5 d-flex justify-content-center">
            <div className={styles.place}>
                <div className="d-flex flex-column">
                    <label className={styles.boldLabel} htmlFor="login"> Логин</label>
                    <input value={user.login} className="m-2" id="login" type="text" 
                    onChange={(event) => setUser({...user, login: event.target.value})} />
                </div>
                
                <div className="d-flex flex-column">
                    <label className={styles.boldLabel}>Пароль</label>
                    <input value={user.password} className="m-2" id="password" type="password" 
                    onChange={(event) => setUser({...user, password: event.target.value})} />
                </div>
                
                <div ref={errorRef} className="text-danger ms-2" hidden>
                    Неверный логин или пароль
                </div>

                <button className="bg-info btn text-white d-flex align-self-center justify-content-center mt-3 mb-0" style={{
                    fontWeight: 600,
                    margin: "0.5rem",
                    width: "10vw"
                }}
                onClick={clickLoginButton}>Войти</button>
            </div>
        </div>
        
        
    )
}