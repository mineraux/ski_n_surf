import Vuex from 'vuex'
import database from '~/static/database.json'

const createStore = () => {
    return new Vuex.Store({
        state: {
            pricesShop: database,
        },
        mutations: {
        },
        actions: {
        },
        getters: {
            loadPricesShop(state){
                return state.pricesShop
            }
        }
    })
}

export default createStore