import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import './assets/menu.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(faCreditCard,faMoneyCheckDollar,faMoneyCheck,faMoneyBill,faYoutube,faInstagram,faFacebookF)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
