import axios from "axios"
import headers from "./config/headers"
const auth = {
    login: async (data) => {
        return await axios.post('/Authentication/login', data, headers)
          .then(res => {
            return res.data
        })
    },
    register : async (data) => {
        return await axios.post('/Authentication/register',data,headers)
        .then(res => {
            return res.data
        })
    }
}

export default auth