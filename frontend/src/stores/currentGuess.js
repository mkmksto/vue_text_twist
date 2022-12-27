import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCurrentGuessStore = defineStore('currentGuessStore', () => {
    // formatted as [{id: id, letter: letter}]
    const currentGuess = ref([])
    const guessStringOnly = computed(() => currentGuess.value.map((l) => l.letter).join(''))

    function addLetterToGuess(letter, letterId) {
        currentGuess.value.push({ letter: letter, id: letterId })
    }

    function removeLetterFromGuess(letterId) {
        const idx = currentGuess.value.findIndex((l) => l.id === letterId)

        if (idx > -1) currentGuess.value.splice(idx, 1)
    }

    function clearGuess() {
        console.log('clearning guess')
        currentGuess.value = []
    }

    // function testGuessIfValid() {
    //     console.log(guessStringOnly.value)
    // }

    return { currentGuess, addLetterToGuess, removeLetterFromGuess, clearGuess, guessStringOnly }
})
