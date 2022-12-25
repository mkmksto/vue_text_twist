import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCurrentGuessStore = defineStore('currentGuessStore', () => {
    const currentGuess = ref([])

    function addLetterToGuess(letter, letterId) {
        console.log('adding letter')
    }

    function removeLetterFromGuess(letter, letterId) {
        console.log('removing letter')
    }

    return { currentGuess, addLetterToGuess, removeLetterFromGuess }
})
