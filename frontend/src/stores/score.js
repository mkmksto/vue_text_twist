import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGameScore = defineStore('gameScore', () => {
    const gameScore = ref(0)

    function updateScore(guessString) {
        const guessLen = guessString.length
        if (guessLen <= 2) {
            gameScore.value += guessLen * 100
        } else if (guessLen >= 3 && guessLen < 6) {
            gameScore.value += guessLen * 300
        } else if (guessLen >= 6 && guessLen < 9) {
            gameScore.value += 800
        } else if (guessLen >= 9) {
            gameScore.value += 1500
        }
    }

    function resetScore() {
        gameScore.value = 0
    }

    return { gameScore, updateScore, resetScore }
})
