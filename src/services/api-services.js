
import axios from "axios"

export async function apiLogin(login, password){

    try{
        const data = await axios.get(`http://192.168.0.12:8081/api/users/login/${login}/${password}`)

        return data
    }
    catch(error){
        return null
    }
}

export async function apiGetProjectByLogin(login){
    try{
        const data = await axios.get(`http://192.168.0.12:8080/api/ps/findByUser/${login}`)
        
        return data.data
    }
    catch(error){
        return null
    }
}
     