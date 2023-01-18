import axios from "axios"
import headers from "./config/headers"
import store from "../store"

const auth = {
    login: async (data) => {
        return await axios.post('/Authentication/login', data, headers)
          .then(res => {
            const  userName = res.data.result.username
            console.log('yeeeeeeeees', userName)
            store.dispatch('user/x',  {userName, token: res.data.result.token})
            return res.data
        })
    },
    register : async (data, customHeader) => {
        return await axios.post('/Authentication/register',data,{headers: customHeader})
        .then(res => {
            return res.data
        })
    },
    // getUserRoles : async ()
}

export default auth