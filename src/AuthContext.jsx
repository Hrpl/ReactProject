import { createContext, useState } from "react";

export const AuthContext = createContext({
    user:{
        name: false,
        password: '',
    },
    setUser: null,
})

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        name: '',
        password: '',
    })

    return(

        <AuthContext.Provider
            value={{
                user,
                setUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}