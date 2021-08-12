import { reactive } from "@vue/reactivity";


const state = reactive({
  urlBase: 'http://192.168.1.123:1337',
})

const methods = {
  getUsername() {
    return localStorage.getItem("user")
  }
}

// async getCategories(){
//   const data = await axios.get(
//     `${storeLocal.state.urlBase}/categories`
//   );
//   category.value = data.data;
// };

export default {
  state,
  methods
}