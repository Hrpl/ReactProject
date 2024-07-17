import { useContext, useEffect } from "react"
import { AuthContext } from "../AuthContext"
import styles from "../styles/Login.module.css"


export function Login(){
    
    const {user} = useContext(AuthContext)

    function clickLoginButton(){
        useEffect(() => {

        },[])
    }

    return(
        <div className="mt-5 mx-5 d-flex justify-content-center">
            <div className={styles.place}>
                <label className={styles.boldLabel}Пароль htmlFor="login">Login</label>
                <input className="m-2" id="login" type="text"></input>

                <label className={styles.boldLabel}>Password</label>
                <input className="m-2" id="login" type="password"></input>

                <button className="bg-info btn text-white" style={{
                    fontWeight: 600,
                    margin: "0.5rem",
                    width: "10vw"
                }}
                onClick={Login}>Войти</button>
            </div>
        </div>
    )
}