import axios from "axios"

const clientApi = () => {
    return  axios.create({
        baseURL : "http://localhost:5000/api/v1"
    })
}

export default clientApi