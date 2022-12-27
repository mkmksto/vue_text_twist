import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useGameState = defineStore('gameState', () => {
    const winState = ref(false)
    const loseState = ref(false)

    // ! take into account timer store
    const isGameOver = computed(() => {
        if (!winState.value && loseState.value) {
            return true
        } else {
            return false
        }
    })

    function setWinState(bool) {
        winState.value = bool
    }

    function setLoseState(bool) {
        loseState.value = bool
    }

    return { winState, loseState, setWinState, setLoseState, isGameOver }
})
