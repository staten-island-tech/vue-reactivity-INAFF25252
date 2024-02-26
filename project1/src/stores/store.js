import { reactive } from 'vue'
export const store = reactive(
    [
        {
          name: "Cucumber",
          price: 4.99,
          img: "/cucumber.jpg",
        },
        {
          name: "Avocado",
          price: 4.99,
          img: "/avocado.jpg",
        },
        {
          name: "California",
          price: 5.99,
          img: "/california.jpg",
        },
        {
          name: "Philidelphia",
          price: 5.99,
          img: "/phili.jpg",
        },
        {
          name: "Spicy-kani",
          price: 5.99,
          img: "/kani.jpg",
        },
        {
          name: "Boston",
          price: 5.50,
          img: "/boston.jpg",
        },
        {
          name: "Alaskan",
          price: 5.99,
          img: "/alaskan.jpg",
        },
        {
          name: "Red Devil",
          price: 15.99,
          img: "/red.jpg",
        },
        {
          name: "Dragon",
          price: 15.99,
          img: "/dragon.jpg",
        },
        {
          name: "Eel-Avocado",
          price: 5.99,
          img: "/eel-avo.jpg",
        },
      ],
      {
      count: 0,   
      increment() {
        this.count++
      }
    }
    )