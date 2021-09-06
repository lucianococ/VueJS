import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    botigas:[
      {id: 1, nombre: "Alimentacio" },
      {id: 2 , nombre: "Congelats"}
    ],
    clientes:[
      { id: 1, nombre: "Coca Cola"},
      { id: 2, nombre: 'Fnac'},
      { id: 3, nombre: 'Adidas'},
      { id: 4, nombre: 'Joma'},
      { id: 5, nombre: 'Taragui'}
    ],
   
    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
