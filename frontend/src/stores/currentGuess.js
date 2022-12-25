import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCurrentGuessStore = defineStore('currentGuessStore', () => {
    const currentGuess = ref([])

    function addToGuess(letter, letterId) {
        console.log(letter, letterId)
    }

    return { currentGuess, addToGuess }
})
