import { ref,markRaw } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'
import Subtitle from "../pages/Subtitle/index.vue"
// import { getCart } from '@/service/cart'

export const useStore = defineStore({
    id: 'index',
    state: () => ({
        indexComponent: markRaw(Subtitle),
        indexComponentName: ref('Subtitle'),
        indexComponentDisplay: ref(true),
        // cartCount: 0,
        // cartList: []
    }),
    getters: {
        // getCartCount: (state) => {
        //     return state.cartCount
        // }
    },
    actions: {
        // async getCart() {
        //     const res = await getCart()
        //     this.cartCount = res.data.length
        //     this.cartList = res.data
        // }
    }
})
