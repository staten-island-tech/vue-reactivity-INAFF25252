import { reactive } from 'vue'
export const store = reactive({
  items:[],
  cartItems:[],
    count: 0,   
    increment() {
    this.count++
    },
    addCart(item){
      this.cartItems.push(item);
    }
  }
)