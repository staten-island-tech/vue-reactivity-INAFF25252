import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

{/*         <ul v-if ="shopCart.length > 0">
        <li v-for="item in cart" :key= "item.id">
            {{item.name}} - {{item.price}}
            <button @click="removeFromCart">Remove</button>
        </li>
      </ul>
      <p v-else>Empty Cart</p>
      <button @click="checkout" v-if ="shopCart.length > 0">Checkout</button> */}