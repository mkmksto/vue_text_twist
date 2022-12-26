import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { fetchBackendWord } from '../functions/dataFetching'

export const useCurRandomWord = defineStore('curRandomWord', () => {
    const currentRandomWord = reactive({
        shuffled_word: [],
        sub_words: [],
        word: [],
    })

    function unTransferLetters() {
        currentRandomWord.shuffled_word.forEach((letter) => (letter.letter_transferred = false))
    }

    async function renewCurrentRandomWordStore(gameSettings) {
        const backendData = await fetchBackendWord(gameSettings)
        currentRandomWord = backendData
    }

    function clearCurrentRandomWordStore() {
        currentRandomWord = {
            shuffled_word: [],
            sub_words: [],
            word: [],
        }
    }

    return { currentRandomWord, unTransferLetters, renewCurrentRandomWordStore }
})
