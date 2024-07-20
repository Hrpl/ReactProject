import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import styles from "../styles/Login.module.css"


export function Login(){
    
    const {user, setUser } = useContext(AuthContext)

    function clickLoginButton(){
        console.log(user)
    }

    return(
        
        <div className="mt-5 mx-5 d-flex justify-content-center">
            <div className={styles.place}>
                <div className="d-flex flex-column">
                    <label className={styles.boldLabel} htmlFor="login">Login</label>
                    <input value={user.login} className="m-2" id="login" type="text" 
                    onChange={(event) => setUser({...user, login: event.target.value})} />
                </div>
                
                <div className="d-flex flex-column">
                    <label className={styles.boldLabel}>Password</label>
                    <input value={user.password} className="m-2" id="password" type="password" 
                    onChange={(event) => setUser({...user, password: event.target.value})} />
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