import { defineStore } from 'pinia'
import { ref } from 'vue'

// const randomWordStore = useCurRandomWord()
// const { currentRandomWord } = storeToRefs(randomWordStore)

export const useCurrentGuessStore = defineStore('currentGuessStore', () => {
    const currentGuess = ref([])

    function addLetterToGuess(letter, letterId) {
        currentGuess.value.push({ letter: letter, id: letterId })
    }

    function removeLetterFromGuess(letterId) {
        const idx = currentGuess.value.findIndex((l) => l.id === letterId)

        if (idx > -1) currentGuess.value.splice(idx, 1)
    }

    return { currentGuess, addLetterToGuess, removeLetterFromGuess }
})
