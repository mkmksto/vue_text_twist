import { createPinia } from 'pinia'
import { createApp, nextTick, onMounted } from 'vue'
import App from '../App.vue'
import { useCurrentGuessStore } from '../stores/currentGuess'
import { useCurRandomWord } from '../stores/currentRandomWord'
import { useSettingsStore } from '../stores/gameSettings'
import { useGameState } from '../stores/gameState'
import { useRoundTracker } from '../stores/roundTracker'
import { useGameScore } from '../stores/score'
import { useTimer } from '../stores/timer'

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

    const round = useRoundTracker()
    const { resetRound } = round

    const score = useGameScore()
    const { resetScore } = score

    const timer = useTimer()
    const { renewCountdownSecondsLength, renewTimer, stopTimer } = timer

    const settings = useSettingsStore()
    const { gameSettings } = settings

    // actual function stuff
    stopTimer()
    /** @type {HTMLElement} */
    const nextRoundBtn = window.document.querySelector('.next-round-btn')
    const resetGameBtn = window.document.querySelector('.reset-game-btn')

    nextRoundBtn.disabled = true
    nextRoundBtn.blur()
    clearCurrentRandomWordStore()
    await renewCurrentRandomWordStore(gameSettings)

    renewCountdownSecondsLength(gameSettings.timer)
    renewTimer()
    clearGuess()
    setWinState(false)
    setLoseState(false)

    resetRound()
    resetScore()
    resetGameBtn.blur()
}
