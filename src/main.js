import { createApp } from 'vue'
import './styles/style.css'
import './styles/style_home.css'
import './styles/footer.css'
import App from './App.vue'
import router from './router/routers.js'

const app = createApp(App)

app.use(router)
app.mount('#app')
