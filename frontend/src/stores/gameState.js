import { defineStore } from "pinia"
import { ref } from "vue"

export const useGameState = defineStore("gameState", () => {
    const winState = ref(false)
    const loseState = ref(false)

    function setWinState(bool) {
        winState.value = bool
    }

    function setLoseState(bool) {
        loseState.value = bool
    }

    return { winState, loseState, setWinState, setLoseState }
})
