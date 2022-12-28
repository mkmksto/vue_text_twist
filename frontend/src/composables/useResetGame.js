import { createPinia } from 'pinia'
import { createApp, nextTick, onMounted } from 'vue'
import App from '../App.vue'
import { useCurrentGuessStore } from '../stores/currentGuess'
import { useCurRandomWord } from '../stores/currentRandomWord'
import { useGameState } from '../stores/gameState'

export async function useResetGame() {
    // store init
    await nextTick()
    let pinia, app
    onMounted(() => {
        pinia = createPinia()
        app = createApp(App)
        app.use(pinia)
    })

    // stores
    const randomWordStore = useCurRandomWord()
    const { renewCurrentRandomWordStore, clearCurrentRandomWordStore } = randomWordStore

    const currentGuessStore = useCurrentGuessStore()
    const { clearGuess } = currentGuessStore

    const gameState = useGameState()
    const { setWinState, setLoseState } = gameState

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
    clearGuess()
    setWinState(false)
    setLoseState(false)

    // reset Current Round
    // reset Score
    resetGameBtn.blur()
}
