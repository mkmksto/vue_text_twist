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

    nextRoundBtn.disabled = true
    nextRoundBtn.blur()
    clearCurrentRandomWordStore()
    await renewCurrentRandomWordStore()

    // renew header interval
    // reset guess store
    // reset valid letters (must be computed from randomWordStore)
    // set gameWonStatus to false

    // reset Current Round
    // reset Score
    resetGameBtn.blur()
}
