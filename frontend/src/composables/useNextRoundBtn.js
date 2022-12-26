import { createPinia } from 'pinia'
import { createApp, nextTick, onMounted } from 'vue'
import App from '../App.vue'
import { useCurRandomWord } from '../stores/currentRandomWord'

// onMounted(() => {
//     const pinia = createPinia()
//     const app = createApp(App)
//     app.use(pinia)
// })

// const randomWordStore = useCurRandomWord()
// const { renewCurrentRandomWordStore, clearCurrentRandomWordStore } = randomWordStore

export async function useResetGame() {
    // store init
    await nextTick()
    let pinia, app
    onMounted(() => {
        pinia = createPinia()
        app = createApp(App)
        app.use(pinia)
    })
    const randomWordStore = useCurRandomWord()
    const { renewCurrentRandomWordStore, clearCurrentRandomWordStore } = randomWordStore

    // actual function stuff
    // clear header interval
    /** @type {HTMLElement} */
    const nextRoundBtn = window.document.querySelector('.next-round-btn')
    const resetGameBtn = window.document.querySelector('.reset-game-btn')
    // console.log(nextRoundBtn)
    // console.log(resetGameBtn)

    nextRoundBtn.disabled = true
    nextRoundBtn.blur()
    clearCurrentRandomWordStore()
    await renewCurrentRandomWordStore()

    //
    //
    resetGameBtn.blur()
}
