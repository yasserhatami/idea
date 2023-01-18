import axios from "axios";

// import headers from "@/services/config/headers"

// import axios from "axios";
const user = {
    namespaced : true,
    state : {
        user : {}
    },
    mutations  : {
        al(state,user){
            console.log(state,user)
        }
    },
    actions :{
         async x({commit}, params){
            console.log('mamammamammama', params);
            // let yass = Object.values(params)
            const token = `Bearer ${params.token}`
            const response =  await axios.get(`https://www.lotfirahim.ir/api/Administration/GetRolesOfUserByUserName/${params.userName}`, {headers: {"accept": 'text/plain', Authorization: token, 'Content-Type': 'application/json'}});
            response.then(res => {
                console.log('ressssssss', res);
            })
            .catch(err => {
                console.log('errerrerrerr', err);
            })
            // const user = response.result
            commit('al',user)
        }
    }
}

export default user;