import { createApp } from 'vue'
import App from './App.vue'

//imports for tailwind**********
import '@/tailwindCssPage/index.css'

//imports for router**********
import  router  from "@/router/index";

//imports for icons**********
import { library } from "@fortawesome/fontawesome-svg-core";
import {  faInstagram,faTwitter,faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

//import for language switcher**********
import i18n from './i18n'

//for add Specific icons 
library.add(faTwitter,faFacebookF,faInstagram);

const app = createApp(App).use(i18n)
app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')
