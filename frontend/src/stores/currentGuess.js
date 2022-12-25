import { defineStore, storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useCurRandomWord } from './currentRandomWord'

export const useCurrentGuessStore = defineStore('currentGuessStore', () => {
    const currentGuess = ref([])

    function addToCurrentGuess() {
        const randomWordStore = useCurRandomWord()
        const { currentRandomWord } = storeToRefs(randomWordStore)
        console.log(currentRandomWord)
    }

    function sayHello() {
        console.log('heloooo')
    }

    return { currentGuess, addToCurrentGuess, sayHello }
})
