import Vuex from 'vuex'
import database from '~/static/database.json'

const createStore = () => {
  return new Vuex.Store({
    state: {
      pricesShop: database,
    },
    mutations: {},
    actions: {},
    getters: {
      loadPricesShop(state) {
        return state.pricesShop
      },
      loadPricesRaquettes(state) {
        if (state.pricesShop.raquettes) {
          return state.pricesShop.raquettes
        }
      },
      loadPricesSki(state) {
        if (state.pricesShop.ski_snow) {
          return state.pricesShop.ski_snow
        }
      }
    }
  })
}

export default createStore
