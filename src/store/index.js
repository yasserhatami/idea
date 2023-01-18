import { createStore } from 'vuex';
// import auth from './modules/auth';
import user from './modules/user.js'


const store = createStore({
    modules: {
        user,
    }
  })
  export default store;