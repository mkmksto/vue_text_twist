import { createPinia } from "pinia"
import { createApp } from "vue"
import App from "./App.vue"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faGear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

import "./assets/main.css"

library.add(faGear)

const app = createApp(App)

app.use(createPinia())
app.component("font-awesome-icon", FontAwesomeIcon)

app.mount("#app")
