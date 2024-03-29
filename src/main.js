import { createApp } from 'vue'
import App from './App.vue'

//imports for tailwind**********
import '@/tailwindCssPage/index.css'

//imports for router**********
import  router  from "@/router/index";


//import for language switcher**********
import i18n from './i18n'

//imports for icons**********
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {  faInstagram,faTwitter,faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faMoon,faSun,faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

//for add Specific icons 
library.add(faTwitter,faFacebookF,faInstagram,faMoon,faSun,faEye,faEyeSlash);

import '@/assets/index.css'


import axios from 'axios'
import VueAxios from 'vue-axios'

import store  from './store/index.js';

const app = createApp(App).use(i18n)

app.use(router)
app.use(VueAxios,axios)
app.use(store)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')
