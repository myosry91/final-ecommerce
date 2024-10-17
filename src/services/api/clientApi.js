import axios from "axios"

const clientApi = () => {
    return  axios.create({
        baseURL : import.meta.env.VITE_BASE_URL, 
    }, {
        Credential: true
    })
}

export default clientApi