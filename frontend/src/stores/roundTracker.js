import { defineStore } from "pinia"
import { ref } from "vue"

export const useRoundTracker = defineStore("roundTracker", () => {
    const gameRound = ref(1)

    function moveToNextRound() {
        gameRound.value++
    }

    function resetRound() {
        gameRound.value = 1
    }

    return { gameRound, moveToNextRound, resetRound }
})
